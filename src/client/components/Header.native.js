import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
// import samplePic from '../../assets/samplepic.jpg';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 20,
    borderWidth: 3,
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
});

// TODO Pass down image source, name, bio as props

const Header = ({ name, profilePic }) => (
  <View style={styles.container}>
    <Image
      style={styles.profilePic}
      source={{ uri: profilePic }}
    />
    <View style={styles.profileInfo}>
      <Text
        style={styles.name}
      >
        {name}
      </Text>
      <Text
        style={styles.bio}
      >
        Hello world! blablabla
      </Text>
      <TouchableOpacity>
        <Button
          onPress={Actions.editprofile}
          title="Edit Profile"
        />
      </TouchableOpacity>
    </View>
  </View>
);

export default Header;
