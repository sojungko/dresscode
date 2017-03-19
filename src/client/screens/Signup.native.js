import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    textAlign: 'center',
  },
});

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      name: '',
      email: '',
      password: '',
    };
  }

  // pressHandler() {
  //   fetch('http://localhost:8000/api/user/post')
  //     .then(())
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ username: text })}
          value={this.state.username}
        />
        <Text>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ name: text })}
          value={this.state.name}
        />
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ email: text })}
          value={this.state.email}
        />
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={text => this.setState({ password: text })}
          value={this.state.password}
        />
      <TouchableOpacity>
          <Button onPress={()=>Actions.login}>
            Sign Up
          </Button>
        </TouchableOpacity>
      </View>
    );
  }
}
