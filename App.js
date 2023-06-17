import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import Tabs from './src/components/Navigation/bottomNavigation/Tabs';
import Splash from './src/screens/splash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const App = () => {
  // const [UserIsSignedIn, SetUserIsSignedIn] = React.useState(false);

  // const isUserLogined = async () => {
  //   const logined = await AsyncStorage.getItem('itemList');
  //   if (logined) {
  //     SetUserIsSignedIn(true);
  //   }
  // };

  // React.useEffect(() => {
  //   isUserLogined();
  // }, []);
  return (
    <NavigationContainer>
      <Splash>
        <SafeAreaProvider>
          <Tabs />
        </SafeAreaProvider>
      </Splash>
    </NavigationContainer>
  );
};
export default App;
