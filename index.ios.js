import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/native/app.native';

export default class dressCode extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('dresscode', () => dressCode);
