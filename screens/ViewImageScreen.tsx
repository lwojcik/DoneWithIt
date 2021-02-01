import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Platform,
  StatusBar,
} from 'react-native';
import AndroidSafeArea from '../components/AndroidSafeArea';

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.closeIcon} />
        <View style={styles.deleteIcon} />
        <Image
          source={require('../assets/chair.jpg')}
          resizeMode='contain'
          style={styles.image}
          width={100}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#000',
    paddingTop: Platform.OS === "android"
      ? StatusBar.currentHeight
      : 0
  },
  image: {
    alignSelf: 'center',
    alignContent: 'center',
    width: '100%',
  },
  closeIcon: {
    position: 'absolute',
    left: 20,
    top: 0,
    backgroundColor: '#fc5c65',
    width: 50,
    height: 50,
  },
  deleteIcon: {
    backgroundColor: '#4ECDC4',
    width: 50,
    height: 50,
  }
});