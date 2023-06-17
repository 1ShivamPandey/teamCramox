import React, {Component} from 'react';
import {Image, View, StyleSheet} from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import homeicon from '../../../assets/Icons/bottomNav/Home.png';
import plus_Icon from '../../../assets/Icons/bottomNav/plus_Icon2.png';
import Noticationsicon from '../../../assets/Icons/bottomNav/notification_Icon.png';
import Login from '../../../screens/Login';
import Test from '../../../screens/Test';
import Notification from '../../../screens/Notification';
import Stack from '../Stack';
import Stack2 from '../Stack2'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import AsyncStorage from '@react-native-async-storage/async-storage';
const Tab = createBottomTabNavigator();


const Tabs = () => {
  const [UserIsSignedIn, SetUserIsSignedIn] = React.useState(false);
  
  React.useEffect(() => {
    isUserLogined();
  }, []);

  const isUserLogined = async () => {
    const logined = await AsyncStorage.getItem('itemList');
    if (logined) {
      SetUserIsSignedIn(true);
    }
  };

    return (
      <Tab.Navigator
        // initialRouteName="LOGIN"
        tabBarOptions={{
          showLabel: false,
          //tintColor:'white',
          activeTintColor: 'white',
          style: {
            position: 'absolute',
            backgroundColor: 'black',
            borderColor: 'lightblue',
            borderWidth: 5,
            borderTopWidth: 5,
            // shadowColor:'blue',
            //  borderBottomWidth:1,
            //borderTopLeftRadius:20,
            //  borderTopRightRadius:20,
            borderRadius: 100,
            paddingLeft: 20,
            paddingRight: 20,
            marginBottom: 6, 
            marginLeft: 10,
            marginRight: 10,
          },
        }}>
        <Tab.Screen
          name="Stack2"
          component={UserIsSignedIn ? Stack : Stack2  }
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <TouchableOpacity onPress={()=>{isUserLogined()}}>
                <Image
                  source={homeicon}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? 'white' : 'grey',
                  }}></Image>
                  </TouchableOpacity>
              </View>
            ),

            style: {
              backgroundColor: 'red',
            },
          }}
        />

        <Tab.Screen
          name="Test"
         // component={Test}
          component={UserIsSignedIn ? Test : Stack2  }
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={plus_Icon}
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 10,
                    tintColor: focused ? 'white' : 'grey',
                  }}></Image>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Notification"
          // component={Notification}
          component={UserIsSignedIn ? Notification : Stack2  }
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={Noticationsicon}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? 'white' : 'grey',
                    //  tintColor: focused ? '#4863E1' : 'grey',
                  }}></Image>
              </View>
            ),
            tabBarVisible: false,
            tabBarStyle: {
              display: 'none',
            },
            //  tabBarButton: () => null,
          }}
        />
      </Tab.Navigator>
    );
  
}

export default Tabs;
