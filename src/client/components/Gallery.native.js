import React from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

import samplePic2 from '../samplepic2.jpg';
import samplePic3 from '../samplepic3.png';
import samplePic4 from '../samplepic4.jpg';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  image: {
    flex: 3.33,
    width: 100,
    height: 100,
  },
});

const Gallery = () => (
  <View style={styles.container}>
    <Image
      source={samplePic2}
      style={styles.image}
    />
    <Image
      source={samplePic3}
      style={styles.image}
    />
    <Image
      source={samplePic4}
      style={styles.image}
    />
  </View>
);

export default Gallery;
