import React from 'react';
import {
  StyleSheet,
} from 'react-native';
// import AndroidSafeArea from './components/AndroidSafeArea';
// import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';

export default function App() {
  // console.log(Dimensions.get('screen'));
  // console.log(useDimensions());
  // const { landscape } = useDeviceOrientation();

  return (
    <ViewImageScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
