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
    marginTop: 50,
    marginLeft: 30,
  },
});

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      profilePic: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Gallery />
      </View>
    )
  }
}
