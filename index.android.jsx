import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/native/app.native';

const dressCode = () => <App />;

AppRegistry.registerComponent('dresscode', () => dressCode);
