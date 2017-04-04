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
    return (
      <View style={styles.container}>
        <Header profilePic={this.props.profilePic} />
        <Gallery />
      </View>
    );
  }
}

const mapStateToProps = ({ profile }) => {
  return {
    profilePic: profile.profilePic,
  };
};

export default connect(mapStateToProps)(Profile);
