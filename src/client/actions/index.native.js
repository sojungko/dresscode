import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import * as C from '../constants/index.native';


/* -- Image Handling -- */
export const selectProfilePic = (image) => {
  return { type: C.SELECT_PROFILE_PIC, payload: image };
};

// 
export const postProfilePic = (image) => {
  console.log('Posting profile pic... ', image);
  return dispatch => axios.post('/api/getlocations', image)
    .then(({ data }) => {
      console.log('actions/postProfilePic data : ', data);

      return dispatch({ type: C.POST_PROFILE_PIC_SUCCESS, payload: data });
    });
};

