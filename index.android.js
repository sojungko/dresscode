import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/client/app.native';

const dressCode = () => <App />;

AppRegistry.registerComponent('dresscode', () => dressCode);
