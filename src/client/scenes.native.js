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
import NavBar from './components/NavBar.native';

const styles = {
  cameraScreen: {
    backgroundColor: 'transparent',
  },
};

const cameraRollRightHandler = () => {
  const selectedPic = store.getState().profile.selectedPic;
  store.dispatch(postProfilePic(selectedPic));
};

const cameraScreenRightHandler = () => {
  console.log('here');
  const capturedPic = store.getState().profile.capturedPic;
  if (capturedPic) {
    store.dispatch(postProfilePic(capturedPic));
  }
};

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="signup" component={SignUp} />
    <Scene key="login" component={LogIn} />
    <Scene key="profile" component={Profile} profilePic={store.getState().profile.profilePic} />
    <Scene key="editprofile" component={EditProfile} />
    <Scene
      key="camerascreen"
      component={CameraScreen}
      navigationBarStyle={styles.cameraScreen}
      rightTitle="Done"
      onRight={cameraScreenRightHandler}
    />
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
