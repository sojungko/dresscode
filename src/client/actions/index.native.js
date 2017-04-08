import axios from 'axios';
import { RNS3 } from 'react-native-aws3';
import { Actions } from 'react-native-router-flux';
import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from 'react-native-dotenv';
import store from 'react-native-simple-store';
import * as C from '../constants/index.native';

const server = 'http://10.16.0.37:3000';

/* -- User Handling -- */
export const signUpUser = (userObj) => {
  return dispatch => fetch(`${server}/api/user/post`, {
    method: 'POST',
    body: JSON.stringify(userObj),
  })
    .then(res => res.json())
    .then((res) => {
      store.save({ token: res.token, username: res.username })
        .then(() => {
          Actions.editprofile();
          dispatch({ type: C.SIGN_UP_USER, payload: true });
        });
    });
};

export const logInUser = (userObj) => {
  return dispatch => fetch(`${server}/api/user/signin`, {
    method: 'POST',
    body: JSON.stringify(userObj),
  })
    .then(res => res.json())
    .then((res) => {
      console.log('[actions/index] logInUser res: ', res);
      const { token, username } = res;
      store.save('user', { token, username })
        .then(() => dispatch({ type: C.LOG_IN_USER, payload: res }))
        .then(() => Actions.profile());
    });
};

export const selectProfilePic = (image) => {
  console.log('selectProfilePic action image: ', image);
  return { type: C.SELECT_PROFILE_PIC, payload: image };
};


export const captureProfilePic = (image) => {
  return dispatch => dispatch({ type: C.CAPTURE_PROFILE_PIC, payload: image.path });
};

// * saves to S3 * //
export const postProfilePic = (image) => {
  if (!image) {
    Actions.pop();
    return { type: C.NO_PROFILE_PIC_SELECTED, payload: false };
  }
  const file = {
    uri: image.uri,
    name: image.filename,
    type: 'image/png',
  };
  const options = {
    keyPrefix: 'images/',
    bucket: 'dresscode-app',
    region: 'us-east-1',
    accessKey: AWS_ACCESS_KEY_ID,
    secretKey: AWS_SECRET_ACCESS_KEY,
    successActionStatus: 201,
  };
  return dispatch => RNS3.put(file, options)
      .then((response) => {
        return { location: response.body.postResponse.location }
      })
      .then(({ location }) => store.update('user', { uri: location }))
      .then(() => store.get('user'))
      .then((user) => {
        console.log('here : ', user);
        const { username, uri } = user;
        return fetch(`${server}/api/user/profilepic`, {
          method: 'POST',
          body: JSON.stringify({ username, uri }),
        })
        .then(res => res.json())
        .then((res) => {
          console.log('here now : ', res);
          dispatch({ type: C.POST_PROFILE_PIC_DB, payload: true });
          dispatch({ type: C.POST_PROFILE_PIC_AWS, payload: true });
          dispatch({ type: C.SET_PROFILE_PIC, payload: true });
        })
        .then(() => Actions.pop());
      });
};

