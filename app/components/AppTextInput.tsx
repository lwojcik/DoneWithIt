import React from 'react'
import {
  TextInput,
  View,
  StyleSheet,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';

export default function AppTextInput({
  icon,
  ...otherProps
}: any) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.textInput}
        {...otherProps}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: defaultStyles.text,
});
