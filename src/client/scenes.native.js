import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
// import Snackbar from 'react-native-snackbar';

import store from './store.native';
import { postProfilePic } from './actions/index.native';

import LogIn from './containers/Login.native';
import SignUp from './containers/Signup.native';
import Profile from './containers/Profile.native';
import EditProfile from './containers/EditProfile.native';
import CameraRoll from './containers/CameraRoll.native';
import CameraScreen from './containers/CameraScreen.native';

const cameraRollRightHandler = () => {
  const selectedPic = store.getState().editProfile.selectedPic;
  store.dispatch(postProfilePic(selectedPic));
};

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="signup" component={SignUp} />
    <Scene key="login" component={LogIn} />
    <Scene key="profile" component={Profile} />
    <Scene key="editprofile" component={EditProfile} />
    <Scene key="camerascreen" component={CameraScreen} />
    <Scene
      key="cameraroll"
      component={CameraRoll}
      backTitle="Cancel"
      rightTitle="Done"
      onRight={cameraRollRightHandler}
    />
  </Scene>
);


export default scenes;
