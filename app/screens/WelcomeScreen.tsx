import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
} from 'react-native';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/logo-red.png')}
        />
        <Text>Sell what you don't need</Text>
      </View>
      <View style={styles.loginButton } />
      <View style={styles.registerButton } />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
  }
});