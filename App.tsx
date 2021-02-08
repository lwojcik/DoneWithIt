import React, { useState } from 'react';
// import AppButton from './app/components/AppButton';
// import CrossPlatformSafeArea from './app/components/CrossPlatformSafeArea';
// import WelcomeScreen from './app/screens/WelcomeScreen';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import Screen from './app/components/Screen';
// import Icon from './app/components/Icon';
// import ListItem from './app/components/ListItem';
// import AccountScreen from './app/screens/AccountScreen';
// import ListingsScreen from './app/screens/ListingsScreen';
// import AppPicker from './app/components/AppPicker';
// import AppTextInput from './app/components/AppTextInput';
// import LoginScreen from './app/screens/LoginScreen';
// import MessagesScreen from './app/screens/MessagesScreen';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// import AppTextInput from './app/components/AppTextInput';
// import colors from './app/config/colors';

// import AppText from './app/components/AppText';

// import Card from './app/components/Card';
// import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

// const categories = [
//   {
//     label: 'Furniture',
//     value: 1,

//   },
//   {
//     label: 'Clothing',
//     value: 2,
    
//   },
//   {
//     label: 'Cameras',
//     value: 3,
    
//   },
// ]

import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
  // console.log(Dimensions.get('screen'));
  // console.log(useDimensions());
  // const { landscape } = useDeviceOrientation();

  // const [firstName, setFirstName] = useState('');

  // const [ isNew, setIsNew ] = useState(false);

  // const [ category, setCategory ] = useState(categories[0]);

  return (
    <ListingEditScreen />
    // <Screen>
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectItem={(item: any) => setCategory(item)}
    //     items={categories}
    //     icon='apps'
    //     placeholder='Category'
    //   />
    //   <AppTextInput
    //     icon='email'
    //     placeholder='Email'
    //   />
    // </Screen>
    // <Screen>
    //   <Text>{firstName}</Text>
    //   <AppTextInput
    //     placeholder='First Name'
    //     icon='email'
    //   />
    // </Screen>
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
