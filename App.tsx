// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  // Text,
  // Image,
  // TouchableWithoutFeedback,
  // TouchableOpacity,
  // TouchableHighlight,
  // TouchableNativeFeedback,
  // View,
  Alert,
  Button,
  Platform,
  StatusBar,
} from 'react-native';
import AndroidSafeArea from './components/AndroidSafeArea';

export default function App() {
  // const handlePress = () =>  console.log('Text pressed');

  return (
    <AndroidSafeArea style={styles.container}>
      <Button
        color="orange"
        title="Click Me"
        // IOS only:
        // onPress={() =>
        //   Alert.prompt(
        //     'My title',
        //     'My message',
        //     text => console.log(text),
        //   )
        // }
        onPress={() => Alert.alert(
          'My title',
          'My message',
          [
            {
              text: 'Yes',
              onPress: () => console.log('Yes'),
            },
            {
              text: 'No',
              onPress: () => console.log('No'),
            },
          ]
          )}
      />
      {/* <Text
        // numberOfLines={1}
        onPress={handlePress}
      >
        Hello React Native - really long text even longer lalalal let's see what happens lul
      </Text> */}
      {/* <TouchableNativeFeedback
        onPress={() => console.log('image tapped')}
      >
        <View
          style={{
            width: 200,
            height: 70,
            backgroundColor: 'dodgerblue',
          }}
        ></View> */}
        {/* <Image
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: 'https://picsum.photos/200/300',
          }}
        /> */}
      {/* </TouchableNativeFeedback> */}
    </AndroidSafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
