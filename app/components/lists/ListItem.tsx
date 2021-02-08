import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../config/colors';
import AppText from '../AppText'

export default function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  chevronsVisible = false,
}: any) {
  return (
    <Swipeable
      renderRightActions={renderRightActions}
    >
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={onPress}
      >
        <View style={styles.container}>
          {IconComponent}
          {image && (
            <Image
              style={styles.image}
              source={image}
            />
          )}
          <View style={styles.detailsContainer}>
            <AppText
              style={styles.title}
              numberOfLines={1}
            >{title}</AppText>
            {subTitle && (
              <AppText
                style={styles.subTitle}
                numberOfLines={2}
              >
                {subTitle}
              </AppText>
            )}
          </View>
          {chevronsVisible && (
            <MaterialCommunityIcons
              name="chevron-right"
              size={25}
              color={colors.medium}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: '400',
  },
  subTitle: {
    color: colors.medium,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  }
});
