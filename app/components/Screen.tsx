import React from 'react';
import { View, StyleSheet } from 'react-native';
import CrossPlatformSafeArea from './CrossPlatformSafeArea';

export default function Screen({ children, style }: any) {
  return (
    <CrossPlatformSafeArea style={[styles.screen, style]}>
      <View style={[styles.view, style]}>
        {children}
      </View>
    </CrossPlatformSafeArea>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  view: {
    flex: 1,
  }
});