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

// * saves to database *//
export const saveProfilePic = ({ username, location }) => {
  console.log('[actions/index] saveProfilePic location : ', location);
  const sending = { username, profilePic: location };
  console.log('[actions/index] saveProfilePic sending... : ', sending);
  return dispatch => fetch(`${server}/api/user/profilepic`, {
    method: 'POST',
    body: JSON.stringify(sending),
  })
    .then(res => res.json())
    .then((res) => {
      console.log('[actions/index] saveProfilePic response : ', res);
      dispatch({ type: C.POST_PROFILE_PIC_DB, payload: res.body });
    });

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
        const postResponse = response.body.postResponse;
        const { location } = postResponse;
        store.update('user', { etag: response.body.postResponse.location })
          .then(() => {
            store.get('user', (user) => {
              const { username } = user;
              const sending = { username, profilePic: location };
              console.log('[actions/index] saveProfilePic sending... : ', sending);
              return dispatch => fetch(`${server}/api/user/profilepic`, {
                method: 'POST',
                body: JSON.stringify(sending),
              })
                .then(res => res.json())
                .then((res) => {
                  console.log('[actions/index] saveProfilePic response : ', res);
                  dispatch({ type: C.POST_PROFILE_PIC_DB, payload: res.body });
                });
            })
            .then(() => {
              dispatch({ type: C.POST_PROFILE_PIC_AWS, payload: postResponse });
              dispatch({ type: C.SET_PROFILE_PIC, payload: location });
            })
            .then(() => Actions.pop());
          });
      });
};

