import axios from 'axios';
import * as A from '../constants/index.native';


/* -- Image Handling -- */
export const profilePicIsSelected = (bool) => {
  return { type: A.PROFILE_PIC_IS_SELECTED, payload: bool };
}
export const selectProfilePic = (image) => {
  return { type: A.SELECT_PROFILE_PIC, payload: image };
}