import React from 'react';
import { View } from 'react-native';
import { Scene, Router, Modal, Reducer, Actions } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import store from './store.native';

import LogIn from './containers/Login.native';
import SignUp from './containers/Signup.native';
import Profile from './containers/Profile.native';
import EditProfile from './containers/EditProfile.native';
import CameraRoll from './containers/CameraRoll.native';
import CameraScreen from './containers/CameraScreen.native';

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
      onRight={() => { Actions.editprofile() }}
    />
  </Scene>
);

//
// const reducerCreate = params=>{
//     const defaultReducer = Reducer(params);
//     return (state, action)=>{
//         console.log("ACTION:", action);
//         return defaultReducer(state, action);
//     }
// };


const App = () => (
  <Provider store={store}>
    <Router scenes={scenes} />
  </Provider>
);

export default App;
