import React from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

// import AndroidSafeArea from '../components/AndroidSafeArea';

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons
          name='close'
          color='white'
          size={35}
        />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
            name='delete'
            color='white'
            size={35}
          />
      </View>
      <Image
        source={require('../assets/chair.jpg')}
        resizeMode='contain'
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});