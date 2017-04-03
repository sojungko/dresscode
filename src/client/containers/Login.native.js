import React, { Component } from 'react';
import {
  AsyncStorage,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
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
    textAlign: 'center',
    margin: 5,
  },
});

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  _onPressButton() {
    console.log('this.state : ', this.state);
    fetch('http://10.16.0.37:3000/api/user/signin', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res.token);
        AsyncStorage.setItem('token', res.token);
        Actions.profile();
        // console.log(React.AsyncStorage.getItem('token'));
      })
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
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ password: text })}
          value={this.state.password}
          secureTextEntry={true}
        />
        <TouchableOpacity>
          <Button
            onPress={() => {
            this._onPressButton();
            }}
          >
            Sign In
          </Button>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(LogIn);