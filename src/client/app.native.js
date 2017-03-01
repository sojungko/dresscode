import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import store from './store.native';

import LogIn from './screens/Login.native';
import SignUp from './screens/Signup.native';

const App = () => (
  <Provider store={store}>
    <Router>
      <Scene key="root" component={SignUp}>
        <Scene key="login" component={LogIn} />
        <Scene key="register" />
        <Scene key="home" />
      </Scene>
    </Router>
  </Provider>
);

export default App;
