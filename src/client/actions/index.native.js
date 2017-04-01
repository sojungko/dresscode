import axios from 'axios';
import { RNS3 } from 'react-native-aws3';
import { Actions } from 'react-native-router-flux';
import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from 'react-native-dotenv';
import * as C from '../constants/index.native';

/* -- Image Handling -- */
export const selectProfilePic = (image) => {
  console.log('selectProfilePic action image: ', image);
  return (dispatch) => {
    return dispatch({ type: C.SELECT_PROFILE_PIC, payload: image });
  };
};

export const postProfilePic = (image) => {  
  console.log('Posting profile pic... ', image);
  const file = {
    uri: image.uri,
    name: image.filename,
    type: 'image/png',
  };
  console.log('access key id : ', AWS_ACCESS_KEY_ID);
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
        console.log(response.body.postResponse);
        return dispatch({ type: C.POST_PROFILE_PIC_SUCCESS, payload: response.body.postResponse });
      })
      .then(() => Actions.editprofile());
};


