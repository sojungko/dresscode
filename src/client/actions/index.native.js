import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import * as C from '../constants/index.native';

// const s3 = new AWS.S3({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: 'us-west-1',
// });

/* -- Image Handling -- */
export const selectProfilePic = (image) => {
  return { type: C.SELECT_PROFILE_PIC, payload: image };
};

export const postProfilePic = (image) => {
  console.log('Posting profile pic... ', image);
  s3.upload();
};

