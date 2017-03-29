import React from 'react';
import { Router } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import store from './store.native';
import scenes from './scenes.native';

const App = () => (
  <Provider store={store}>
    <Router scenes={scenes} />
  </Provider>
);

export default App;
