import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import 'whatwg-fetch';

import Header from '../components/Header.native';
import Gallery from '../components/Gallery.native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
  },
});

const Profile = ({ profilePic }) => (
  <View style={styles.container}>
    <Header profilePic={profilePic} />
    <Gallery />
  </View>
);

export default connect()(Profile);
