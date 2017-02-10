import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import store from './store.native';

const App = () => (
  <Provider store={store}>
    <Router>
      <Scene key="root">
        <Scene key="login" />
        <Scene key="register" />
        <Scene key="home" />
      </Scene>
    </Router>
  </Provider>
);

export default App;
