import React from 'react';
import {
  View,
} from 'react-native';
// import AppButton from './app/components/AppButton';
// import AndroidSafeArea from './components/AndroidSafeArea';
// import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// import AppText from './app/components/AppText';

// import Card from './app/components/Card';
// import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {
  // console.log(Dimensions.get('screen'));
  // console.log(useDimensions());
  // const { landscape } = useDeviceOrientation();

  return (
    <ViewImageScreen />
    // <View style={{
    //   backgroundColor: '#f8f4f4',
    //   padding: 20,
    //   paddingTop: 100,
    // }}>
    //   <Card
    //     title="Red jacket for sale"
    //     subTitle="$100"
    //     image={require("./app/assets/jacket.jpg")}
    //   />
    // </View>
    // <View style={{
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // }}>
    //   <WelcomeScreen />
    // </View>
    // <View style={{
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // }}>
    //   <MaterialCommunityIcons
    //     name='email'
    //     size={60}
    //     color='dodgerblue'
    //   />
    // </View>
    // <View style={{
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // }}>
    //   <View style={{
    //     backgroundColor: 'dodgerblue',
    //     width: 100,
    //     height: 100,
    //     padding: 20,
    //     paddingHorizontal: 20,
    //     paddingLeft: 30,
    //     // borderWidth: 10,
    //     // borderColor: 'royalblue',
    //     // borderRadius: 50,
    //     //
    //     // IOS only:
    //     // shadowColor: 'grey',
    //     // shadowOffset: {
    //     //   width: 0,
    //     //   height: 10,
    //     // },
    //     // shadowOpacity: 1,
    //     // shadowRadius: 10,
    //     //
    //     // Android only:
    //     // elevation: 20,
    //   }}>
    //     <View style={{
    //       backgroundColor: 'gold',
    //       width: 50,
    //       height: 50,
    //     }}>
    //     </View>
    //     <View style={{
    //       backgroundColor: 'tomato',
    //       width: 100,
    //       height: 100,
    //       margin: 20,
    //     }}>
    //     </View>
    //   </View>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff"
//   }
// });
