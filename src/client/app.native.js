import React from 'react';
import { View } from 'react-native';
import { Scene, Router, Modal, Reducer, Actions } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import store from './store.native';

import LogIn from './containers/Login.native';
import SignUp from './containers/Signup.native';
import Profile from './containers/Profile.native';
import EditProfile from './containers/EditProfile.native';
// import AuthView from './components/AuthView.native';

const connectedLogIn = connect()(LogIn);
const connectedSignUp = connect()(SignUp);
const connectedProfile = connect()(Profile);
const connectedEditProfile = connect()(EditProfile);
// const connectedAuthView = connect()(AuthView);

const scenes = Actions.create(
    <Scene key="root">
      <Scene key="signup" component={connectedSignUp} />
      <Scene key="login" component={connectedLogIn} />
      <Scene key="profile" component={connectedProfile} />
      <Scene key="editprofile" component={connectedEditProfile} />
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
