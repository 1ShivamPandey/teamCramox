import React from 'react';
import Login from '../Login';
import Home from '../Home';
import {View,ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native/Libraries/Text/Text';
export default function Authcheck() {
  const [UserIsSignedIn, SetUserIsSignedIn] = React.useState(false);

  const isUserLogined = async () => {
    const logined = await AsyncStorage.getItem('itemList');
    if (logined) {
      SetUserIsSignedIn(true);
    }
  };

  React.useEffect(() => {
    isUserLogined();
  }, []);
  return (
    <>
      {UserIsSignedIn === true ? (
          <Home />
      ) : (
          <Login />
      )}
    </>
  );
}
