import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import 'whatwg-fetch';
import BottomToolBar from 'react-native-bottom-toolbar';
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
});

const nestedActions = [
    {
        title: 'Analyze', onPress: (index: number, title: string) => {
            console.log(`pressed ${index} ${title}`)
        }
    },
    {
        title: 'Delete', style: 'destructive', onPress: (index: number, title: string) => {
            console.log(`pressed ${index} ${title}`)
        }
    },
    {
        title: 'Cancel', style: 'cancel', onPress: (index: number, title: string) => {
            console.log(`pressed ${index} ${title}`)
        }
    }
]

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
            onPress={Actions.camerascreen}
          />
        </TouchableOpacity>
        <BottomToolBar
          onPress={this.onToolbarPress}
          actions={
          [
                  { title: 'Mark All', iconName: 'ios-done-all-outline', size: 37 },
                  { title: 'Edit', iconName: 'pencil', font: 'simple', size: 15 },
                  { title: 'More', iconName: 'ios-albums-outline', actions: nestedActions },
                  { title: 'Download', iconName: 'ios-download-outline' },
          ]
          }
        />
      </View>

    );
  }
}
