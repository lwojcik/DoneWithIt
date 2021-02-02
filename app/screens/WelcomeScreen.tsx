import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
} from 'react-native';
import AppButton from '../components/AppButton';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={10}
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/logo-red.png')}
        />
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color='secondary' />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
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
  buttonsContainer: {
    width: '100%',
    padding: 20,
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  }
});