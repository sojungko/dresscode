import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import Header from '../components/Header.native';
import Gallery from '../components/Gallery.native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
  },
});

class Profile extends Component {
  render() {
    console.log('this.props : ', this.props);
    return (
      <View style={styles.container}>
        <Header name={this.props.name} profilePic={this.props.profilePic} />
        <Gallery />
      </View>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    name: users.userInfo.name,
    profilePic: users.userInfo.profilePic,
  };
};

export default connect(mapStateToProps)(Profile);
