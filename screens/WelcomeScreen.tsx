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
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.imageBackground}
      >
        <View style={styles.logo}>
          <Image
            source={require('../assets/logo-red.png')}
            style={styles.logoImage}
          />
          <Text>
            Sell what you don't need
          </Text>
        </View>
        <View style={styles.buttonSection}>
          <View style={styles.loginButton} />
          <View style={styles.registerButton} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
  imageBackground: {
    flex: 1,
  },
  logo: {
    top: 50,
    alignSelf: 'center',
  },
  logoImage: {
    alignSelf: 'center',
    width: 100,
    height: 100,
  },
  buttonSection: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#fc5c65',
  },
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#4ECDC4',
  }
});