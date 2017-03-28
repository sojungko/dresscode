import axios from 'axios';
import * as A from '../constants/index.native';

cloudinary.config({
  cloud_name: 'dresscode',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLDOUINARY_API_SECRET,
});

/* -- Image Handling -- */
export function postProfilePic(image) {
  console.log('Image uri: ', image.uri)
}
