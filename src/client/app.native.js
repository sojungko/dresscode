import React from 'react';
import { Scene, Router, Modal, Reducer } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import store from './store.native';

import LogIn from './screens/Login.native';
import SignUp from './screens/Signup.native';
import Profile from './screens/Profile.native';

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

const App = () => (
  <Provider store={store}>
    <Router createReducer={reducerCreate}>
      <Scene key="modal" component={Modal} >
        <Scene key="root">
          <Scene key="signup" component={SignUp} initial={true} />
          <Scene key="login" component={LogIn} />
          <Scene key="profile" component={Profile} />
          <Scene key="home" />
        </Scene>
      </Scene>

    </Router>
  </Provider>
);

export default App;
