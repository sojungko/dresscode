import React, { Component, PropTypes } from 'react';
import {
  View,
} from 'react-native';

export default class AuthView extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <View>
        {this.props.children}
      </View>
    );
  }
}
