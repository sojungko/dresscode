import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import { signUpUser } from '../actions/index.native';

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

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      name: '',
      email: '',
      password: '',
    };
  }

  _onPressButton = () => {
    const user = {
      username: this.state.username,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    this.props.signUpUser(user);
  }

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
          <Button onPress={this._onPressButton}>
            Sign Up
          </Button>
        </TouchableOpacity>
        <Text>Already have an account?</Text>
        <Button onPress={Actions.login}>Log In</Button>
      </View>
    );
  }
}

export default connect(null, { signUpUser })(SignUp);
