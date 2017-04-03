import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import { Actions } from 'react-native-router-flux';

// import { store } from '../store.native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    alignSelf: 'stretch',
    right: 0,
    left: 0,
    backgroundColor: 'transparent',
  },
});

const rightButtonConfig = {
  title: 'Done',
  handler: () => Actions.pop(),
};

const NavBar = (props) => {
  /*if (!props.profile) {
    return (
      <View>
      </View>
    );
  }*/
  return (
    <View style={styles.container}>
      <NavigationBar
        rightButton={rightButtonConfig}
      />
    </View>
  );
};

export default NavBar;
