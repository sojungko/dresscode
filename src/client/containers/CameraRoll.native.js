import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { NavBar } from 'react-native-router-flux';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { postProfilePic } from '../actions/index.native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6AE2D',
  },
  content: {
    marginTop: 15,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 16,
    alignItems: 'center',
    color: '#fff',
  },
  bold: {
    fontWeight: 'bold',
  },
  info: {
    fontSize: 12,
  },
});

class CameraRoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      selected: [],
    };
  }

  getSelectedImages(images) {
    this.setState({ num: images.length, selected: images })
    console.log(images[0]);
    postProfilePic(images[0]);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>
            <Text style={styles.bold}> {this.state.num} </Text> image(s) have been selected
          </Text>
        </View>
        <CameraRollPicker
          scrollRenderAheadDistance={500}
          initialListSize={1}
          pageSize={3}
          removeClippedSubviews={false}
          groupTypes="SavedPhotos"
          batchSize={5}
          maximum={1}
          selected={this.state.selected}
          assetType="Photos"
          imagesPerRow={3}
          imageMargin={5}
          callback={this.getSelectedImages.bind(this)}
        />
      </View>
    );
  }
}

export default connect()(CameraRoll);