import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import * as Progress from 'react-native-progress';
import colors from '../config/colors';
import LottieView from 'lottie-react-native';

export default function UploadScreen({
  progress = 0,
  visible = false,
  onDone,
}: any) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay={true}
            loop={false}
            style={styles.animation}
            onAnimationFinish={onDone}
            source={require('../assets/animations/done.json')}
          />
        )}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  animation: {
    width: 150,
  },
});