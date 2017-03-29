import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ActionSheetIOS,
  Button,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
// import { postProfilePic } from '../actions/index.native';
import 'whatwg-fetch';
import samplePic from '../../assets/samplepic.jpg';

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
  },
  button: {
    marginBottom: 10,
    fontWeight: '500',
  },
});

const BUTTONS = [
  'Choose from Library',
  'Take Photo',
  'Delete',
  'Cancel',
];
const DESTRUCTIVE_INDEX = 2;
const CANCEL_INDEX = 3;

class EditProfile extends Component {
  showActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DESTRUCTIVE_INDEX,
    }, (buttonIndex) => {
      if (buttonIndex === 0) {
        Actions.cameraroll();
      } else if (buttonIndex === 1) {
        Actions.camerascreen();
      }
    });
  };

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
            onPress={this.showActionSheet}
            style={styles.button}
          />
        </TouchableOpacity>
      </View>

    );
  }
}

export default connect()(EditProfile);
