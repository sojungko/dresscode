import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import 'whatwg-fetch';

import Header from '../components/Header.native';
import Gallery from '../components/Gallery.native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
  },
});

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Gallery />
      </View>
    )
  }
}
