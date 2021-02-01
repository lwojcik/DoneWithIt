// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';

export default function AndroidSafeArea(props: any) {
  return (
    <SafeAreaView
      style={[
        styles.AndroidSafeArea,
        props.style,
      ]}
    >
      {props.children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android"
      ? StatusBar.currentHeight
      : 0,
  }
});
