import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 30,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  profileInfo: {
    width: 0,
    flexGrow: 1,
    marginLeft: 20,
    marginRight: 30,
    flexDirection: 'column',
  },
  name: {
    marginBottom: 2,
    fontWeight: 'bold',
    fontSize: 16,
  },
  bio: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 13,
  },
})

const Header = () => (
  <View style={styles.container}>
    <Image
      style={styles.profilePic}
      source={require('../assets/samplepic.jpg')}
    />
    <View style={styles.profileInfo}>
      <Text
        style={styles.name}
      >
        Sojung
      </Text>
      <Text
        style={styles.bio}
      >
        Hello world! blablabla
      </Text>
    </View>
  </View>
);

export default Header;
