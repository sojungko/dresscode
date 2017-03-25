import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet,
} from 'react-native';
import 'whatwg-fetch';
import samplePic from '../samplepic.jpg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    alignItems: 'center',
  },
  profilePic: {
    height: 80,
    width: 80,
    borderRadius: 40,
  }
});

export default class EditProfile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={samplePic}
          style={styles.profilePic}
        />
        <TouchableOpacity>
          <Button
            title="Change Profile Photo"
          />
        </TouchableOpacity>
      </View>
    );
  }
}
