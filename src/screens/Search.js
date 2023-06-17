import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, ScrollView, TextInput, Image} from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import startupLogo from '../assets/Icons/bottomNav/astralshops.png';
import Invest from '../assets/Icons/bottomNav/Invest.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Search = ({route}) => {
  const navigation = useNavigation;
  const [userName, setuserName] = React.useState('');
  const [userEmailId, setuserEmail] = React.useState('');
  //    const {navigation} = this.props;

  React.useEffect(() => {
    getUserdetails();
  }, []);

  const getUserdetails = async () => {
    // const userFirstName = await AsyncStorage.getItem('userFirstName');
    // setuserName(userFirstName);

    const userEmail = await AsyncStorage.getItem('itemList');
    cartStoredValue = await AsyncStorage.getItem('itemSecond');
    setuserEmail(userEmail);
    console.log('user email is .....', userEmail, cartStoredValue);

    const avx = route.params.name;
    console.log(avx);
  };

  return (
    <ScrollView>
      <View style={{backgroundColor: 'black', justifyContent: 'center'}}>
        <View>
          <TextInput
            style={{
              color: 'black',
              paddingLeft: 20,
              fontSize: 20,
              backgroundColor: '#e6e6e6',
              margin: 10,
              borderRadius: 100,
            }}
            placeholder="Search for the next unicorn"
            placeholderTextColor="#666666"></TextInput>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            margin: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'Darkblue',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
            }}>
            <Image
              style={{
                height: 50,
                width: 50,
                borderRadius: 100,
                borderWidth: 2,
                padding: 10,
                borderColor: '#00ffff',
              }}
              source={startupLogo}></Image>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text
                style={{
                  color: 'grey',
                  fontWeight: 'bold',
                  fontSize: 12,
                  marginLeft: 30,
                }}>
                Raising amount :
              </Text>
              <Text style={{color: 'grey', fontWeight: 'bold', fontSize: 12}}>
                1oo k
              </Text>
            </View>

            <Text
              style={{
                color: 'black',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              {userName === null ? 'hey' : userName}
            </Text>
          </View>
          {/* <Text style={{color: 'grey', margin: 10}}>Required Fund</Text> */}

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                backgroundColor: '#f2f2f2',
                borderRadius: 10,
                height: 30,
                width: 70,
                paddingTop: 5,
                paddingBottom: 1,
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <Image style={{height: 20, width: 20}} source={Invest} />
                <Text style={{color: 'black'}}>Equity</Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#f2f2f2',
                borderRadius: 20,
                height: 30,
                width: 60,
                paddingTop: 5,
              }}>
              <Text style={{color: 'black', paddingLeft: 10}}>Funded</Text>
            </View>

            <View
              style={{
                backgroundColor: '#f2f2f2',
                borderRadius: 20,
                height: 30,
                width: 90,
                paddingTop: 5,
              }}>
              <Text
                onPress={() => navigation.navigate('Product')}
                style={{color: 'green', paddingLeft: 10}}>
                𝐈𝐧𝐯𝐞𝐬𝐭 Now
              </Text>
            </View>
          </View>
        </View>
        <Text style={{marginTop: 800}}>Register</Text>
      </View>
    </ScrollView>
  );
};
export default Search;
