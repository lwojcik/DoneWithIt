// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Constants from 'expo-constants';

export default function CrossPlatformSafeArea(props: any) {
  return (
    <SafeAreaView
      style={[
        styles.CrossPlatformSafeArea,
        props.style,
      ]}
    >
      {props.children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  CrossPlatformSafeArea: {
    paddingTop: Constants.statusBarHeight,
  }
});
