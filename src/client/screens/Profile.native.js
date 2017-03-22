import React, { Component } from 'react';
import {
  AsyncStorage,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import 'whatwg-fetch';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.3,
  },
})

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      profilePic: '',
    };
  }

  componentWillMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.name}</Text>
      </View>
    )
  }
}
