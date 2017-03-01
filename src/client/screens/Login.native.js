import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7,
  },
});

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ email: text })}
          value={this.state.email}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ password: text })}
          value={this.state.password}
        />
        <TouchableOpacity>
          <Text>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
