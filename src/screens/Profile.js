import React, {Component, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import {
//   ScrollView,
//   TouchableOpacity,
//   TouchableHighlight,
// } from 'react-native-gesture-handler';
// import {TestScheduler} from 'jest';
// import {color} from 'react-native-reanimated';
const {width: W} = Dimensions.get('window');

import Home from './Home';
import Backbutton from '../assets/Icons/bottomNav/Backbutton2.png';
import ProfileIcon from '../assets/Icons/bottomNav/coustmericon.png';
import logoutIcon from '../assets/Icons/bottomNav/iLogout.png';
import settingsIcon from '../assets/Icons/bottomNav/settingsIcon.png';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
const Profile = () => {
  const [DatawaFetch, SetDatawaFetch] = React.useState('');
  const [LoggedoutFetch, SetLoggedoutFetch] = React.useState('');
  const navigation = useNavigation();
  // const {navigation} = this.props;

  useEffect(() => {
    ProfileData();
  }, []);

  // const signin = async () => {
  //   const response = await axios.post('http://192.168.107.97:8080/login');
  //   if (response.data.isValid === true) {
  //     console.log('Navigation page pe Login');

  //     console.log("the data is "+ JSON.stringify(response.data))

  //   } else {
  //     console.log('Wrong password');
  //   }
  // };

  const ProfileData = async () => {
    try {
      const dataFetch = await AsyncStorage.getItem('itemList');
      SetDatawaFetch(dataFetch);
    } catch (error) {
      console.log(error);
    }
  };

  const Logout = async () => {
    try {
    //  const logoutResponse = await axios.get('http://192.168.1.16:8080/logout');
      const logoutResponse = await axios.get('https://signup-cramox-backend.onrender.com/logout');
      //  console.log('logout successfully');
      console.log(logoutResponse.data);
      if (logoutResponse.data.isLogout === true) {
        console.log('User is logged out');
        //    navigation.dispatch(StackActions.replace('Login'));
        SetLoggedoutFetch(logoutResponse.data.logout);
        navigation.navigate('Login');
        await AsyncStorage.removeItem('itemList');
       // await AsyncStorage.clear('itemList');
        // navigation.replace("Login")
      } else {
        console.log('kuch to gadbad hai backend response hai');
      }
    } catch (error) {
      // Agar baar baar logout btn pe click karoge to error ayega to uske mtlb already logout ho gya hai
      console.log('User is already logout ‣‣‣‣‣');
      await AsyncStorage.removeItem('itemList');
    //  navigation.navigate('Login');

    }
    // console.log(logoutResponse?.data);
  };

  const systemloggedout = async () => {
    try {
      await AsyncStorage.setItem('LoggedoutFetch', LoggedoutFetch);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <View>
        {/* <View style={{alignItems: 'center'}}>
            <LinearGradient
              start={{x: 0.9, y: 0.3}}
              end={{x: 0.1, y: 2.0}}
              locations={[0.1, 0.5]}
              colors={['#7F00FF', '#E100FF']}
              style={{
                height: 300,
                width: 121,
                top: -50,
                borderRadius: 150,
                transform: [{scaleX: 3.4}, {scaleY: 2.5}],
                elevation: 30,
              }}>
              <View style={{marginTop: 120, flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Image
                    source={Backbutton}
                    style={{height: 15, width: 10, marginLeft: 5}}></Image>
                </TouchableOpacity>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    marginTop: -10,
                    marginLeft: 15,
                  }}>
                  𝐏𝐫𝐨𝐟𝐢𝐥𝐞
                </Text>
              </View>
            </LinearGradient>
          </View> */}
      </View>

      <View style={[styles.circle]}>
        <View style={{flex: 1, flexDirection: 'row', marginTop: 100}}>
          <Image
            source={ProfileIcon}
            style={{
              height: 50,
              width: 50,
              marginLeft: 10,
            }}></Image>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.Profile_page_Link}>Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            source={settingsIcon}
            style={{
              height: 50,
              width: 50,
              marginLeft: 10,
            }}></Image>
          <Text style={styles.Profile_page_Link}>Settings</Text>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            {/* <TouchableOpacity> */}
            <Image
              source={logoutIcon}
              style={{
                height: 50,
                width: 50,
                marginLeft: 10,
              }}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Logout()
            }}>
            <Text style={styles.Profile_page_Link}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text> The data is : {DatawaFetch}</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'black',
  },
  headerContainer: {
    height: 100,
    margin: 0.1,
    padding: 10,
    borderBottomLeftRadius: 250,
  },
  circle: {
    // marginTop: 70,
    height: 350,
    width: 350,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 20,
    elevation: 30,
    shadowColor: '#4048BF',
    borderWidth: 0.1,
  },
  shadowButton: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 105,
    width: 205,
    height: 75,
    shadowColor: '#4048BF',
    elevation: 40,
  },
  mainButton: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    width: 200,
    height: 70,
    borderRadius: 100,
    shadowColor: '#4048BF',
    shadowOffset: {
      width: 6.4,
      height: 6.4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    shadowColor: 'red',
    backgroundColor: '#203953',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Profile_page_Link: {
    textAlign: 'left',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 25,
  },
});
