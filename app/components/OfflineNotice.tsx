import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo'

function OfflineNotice() {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No internet connection</AppText>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 50,
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 1000,
    top: Constants.statusBarHeight,
  },
  text: {
    color: colors.white,
  }
});

export default OfflineNotice;