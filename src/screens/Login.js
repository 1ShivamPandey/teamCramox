// import React, {Component} from 'react';
// import {View, Text, Button} from 'react-native';
// import {TextInput} from 'react-native-gesture-handler';
// import { Formik } from 'formik';
// export default class Login extends Component {
//   render() {
//     return (
//       //   <View><Text>Login</Text></View>
//      <Formik
//      initialValues={{ email: '' }}
//      onSubmit={values => console.log(values)}
//    >
//      {({ handleChange, handleBlur, handleSubmit, values }) => (
//        <View>
//          <TextInput
//            onChangeText={handleChange('email')}
//            onBlur={handleBlur('email')}
//            value={values.email}
//          />
//          <Button onPress={handleSubmit} title="Submit" />
//        </View>
//      )}
//    </Formik>
//     );
//   }
// }
import React, {Component, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  useState,
  Alert,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
//import validator from 'validator';
const Login = () => {
  const [email, SetEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [password, SetPassword] = React.useState('');
  const [name, Setname] = React.useState('');
  const [userData, SetuserData] = React.useState('');
  const [loginuserData, SetloginuserData] = React.useState('');
  const [userDataName, SetuserDataName] = React.useState('');
  const [userDataEmail, SetuserDataEmail] = React.useState('');
  const [userDataPassowrd, SetuserDataPassword] = React.useState('');
  const [IsSystemLoggedOut, setIsSystemLoggedOut] = React.useState('');
  const [showText, setShowText] = useState(true);

  const navigation = useNavigation();
  // const {navigation} = this.props;

  // const popAction = StackActions.pop(1)
  // navigation.dispatch(popAction)

  // useEffect(() => {
  //  // SignUp()
  //   if (email || password !== null) {
  //     //console.log('We have hit the api ..............');
  //   } else {
  //     console.log('Email and password are null');
  //     SignUp();
  //   }

  //   //Welcome();
  //   //  addlogininfo();
  //   //getlogininfo();
  // }, []);

  // useFocusEffect(
  //   React.useCallback(()=>{
  //     if (email || password !== null) {
  //           //console.log('We have hit the api ..............');
  //           SignUp();
  //         } else {
  //           console.log('Email and password are null');
  //         }
  //   })
  // )

  useFocusEffect(
    React.useCallback(() => {
      const backAction = () => {
        Alert.alert('Exit', 'Wanna Exit ?', [
          {
            text: 'NO',
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: 'Exit',
            onPress: () => BackHandler.exitApp(),
            style: 'cancel',
          },
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', backAction);
    }, []),
  );

  // useEffect(() => {
  // SignUp();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     await AsyncStorage.setItem('email', email);
  //   })();
  // }, [email]);

  // useEffect(() => {
  //   async () => {
  //     const value = await AsyncStorage.getItem('email');
  //     SetEmail(value);
  //   };
  // }, []);

  // const DisplayText =  () => {
  //   return (
  //     <View>
  //       <Text>Yeh login wala game hai</Text>
  //     </View>
  //   );
  // };

  // const Welcome = async () => {
  //   const welcomeapidata = await axios.get('http://192.168.43.97:8080/welcome');
  //   console.log('|||||||||||||||||||||||||||||||||||||');
  //   console.log('WELCOME API DATA .......');
  //   console.log(welcomeapidata.data?.email);
  //   console.log(welcomeapidata.data?.name);
  //   console.log('|||||||||||||||||||||||||||||||||||||');
  //   // console.log(welcomeapidata);
  // //  SetuserData(welcomeapidata.data?.email);

  //   // return (s
  //   //   <View>
  //   //     <Text>Welcome wala data</Text>
  //   //   </View>
  //   // );

  //   // if (welcomeapidata.data.isValid === false) {
  //   //   console.log("Logout ho gya system")
  //   // } else {
  //   //   console.log("Still login")
  //   // }
  // };

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

  React.useEffect(() => {
    const interval = setInterval(() => {
      setShowText(!showText);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // if (UserIsSignedIn === true) {
  //   navigation.navigate('Home')
  // }

  const SignUp = async () => {
    try {
      //   const response = await axios.post('http://192.168.1.3:8080/login', {
      const response = await axios.post(
        'https://signup-cramox-backend.onrender.com/login',
        {
          email,
          password,
        },
      );
      //  SetuserData(JSON.stringify(response.data?.email));
      console.log(response.data);

      if (response.data.isValid === true) {
        console.log('Login', response.data?.email);
        navigation.navigate('Home');

        // navigation.dispatch(StackActions.replace('Home'));

        //   console.log('the data is ' + JSON.stringify(response.data));
        SetuserData(JSON.stringify(response.data?.email));
        console.log('The data is  ', response.data);

        // console.log('....................................');
        // console.log(response.data?.dabbadata?.email);
        // console.log(response.data?.dabbadata?.name);
        // console.log(response.data?.dabbadata?.password);
        // console.log('....................................');

        SetuserDataName(response.data?.name);
        console.log('The........................', response.data?.email);
        SetuserDataEmail(response.data?.email);
        SetuserDataPassword(response.data?.password);

        await AsyncStorage.setItem('itemList', response.data?.email);
        console.log(typeof response.data?.email);
        // SetuserDataName(response.data?.dabbadata?.name);
        // SetuserDataEmail(response.data?.dabbadata?.email);
        // SetuserDataPassword(response.data?.dabbadata?.password);

        // let Abc = () =>{
        //   return(
        //     <View><Text>The login system is here</Text></View>
        //   )
        // }

        // return <Text>Login</Text>;
      } else {
        console.log('Wrong password');
        // return <Text>Logout</Text>;
      }
      // {
      //   response.data.isValid === true ? navigation.navigate('Search') &&  console.log('Login') &&  console.log("the data is "+ JSON.stringify(response.data)) : console.log('Wrong password');
      // }
    } catch (error) {
      console.log('new issue');
    }
  };

  // const addlogininfo = async () => {
  //   try {
  //     console.log("user data is ....",userData)
  //     await AsyncStorage.setItem('itemList', userData);
  //     // await AsyncStorage.setItem('userFirstName', userDataName);
  //     //  await getlogininfo();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const getlogininfo = async () => {
    try {
      const detailsdata = await AsyncStorage.getItem('itemList');
      //console.log('the data is ');
      SetloginuserData(detailsdata);
    } catch (error) {
      console.log(error);
    }
  };

  const Systemconfig = () => {
    if (userData) {
      return (
        <View>
          <Text style={{textAlign: 'center'}}>ᴀʟʀᴇᴀᴅʏ ꜱɪɢɴᴇᴅ ɪɴ</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text style={{textAlign: 'center'}}>​​ ʟᴏɢɪɴ ᴛᴏ ᴄᴏɴᴛɪɴᴜᴇ →</Text>
        </View>
      );
    }
  };

  // const Logout = async () => {
  //   try {
  //     const logoutResponse = await axios.get(
  //       'http://192.168.43.97:8080/logout',
  //     );
  //     console.log('logout successfully');
  //   } catch (error) {
  //     console.log('there is some error in logout');
  //   }
  //   // console.log(logoutResponse?.data);
  // };

  const UserName = () => {
    if (userData) {
      return (
        <View>
          <Text>My Email id is :: {userDataEmail}</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text>I don't have any idea about my mail id</Text>
        </View>
      );
    }
  };

  const systemwaloggedin = async () => {
    try {
      const loggedout = await AsyncStorage.getItem('LoggedoutFetch');
      setIsSystemLoggedOut(loggedout);
    } catch (error) {
      console.log(error);
    }
  };

  // const DataButton = async () => {
  //   const logindata = await axios.get('http://192.168.107.97:8080/login',{email,password});
  //   if (logindata.data.isValid === true) {
  //     // return (
  //     //   <View>
  //     //     <Text>We are in login zone</Text>
  //     //   </View>
  //     // );
  //     console.log('data is hitting');
  //   } else {
  //     // return (
  //     //   <View>
  //     //     <Text>Logut ho gya dost</Text>
  //     //   </View>
  //     // );
  //     console.log('data is  not hitting');
  //   }
  // };

  // const signUp = async () => {
  //   try {
  //     const res = await axios.post('http://192.168.1.12:8080/login', {
  //       email,
  //       password,
  //     });
  //     console.log(res.data);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const signUp = async () => {
  //   try {
  //     const response = await axios.get('http://192.168.1.12:8080/login', {
  //       params: {
  //         email:email
  //       }
  //     });

  //     if (response.data.isValid) {
  //       navigation.navigate('Search');
  //       console.log("It's working boss")
  //     } else {
  //       // Handle invalid email
  //     }
  //   } catch (error) {
  //     // Handle error
  //   }
  // };

  // if (!SignUp) {
  //   return alert('Could not ');
  // }

  // const Teg = () => {
  //    console.log("Teg wala Function")
  //   // SetEmail([...email]);
  //   // SetPassword([...password]);
  // };

  // const submitbabu = () => {
  //   signUp();
  //   Teg();
  // };

  // handleReset = () => {
  //   this.setState({
  //     itemvalues: [{}]
  //   });
  // };

  const validateEmail = email => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
      console.log('email error');
    } else {
      setEmailError('');
    }
  };

  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <View
        style={{
          flexDirection: 'column',
          marginTop: 180,
        }}>
        <TextInput
          style={{
            margin: 10,
            borderWidth: 2,
            borderRadius: 50,
            paddingLeft: 10,
            borderColor: 'white',
            alignSelf: 'center',
            width: 300,
            shadowColor: 'white',
            elevation: 1,
          }}
          placeholder="ᴇᴍᴀɪʟ"
          placeholderTextColor="white"
          value={email}
          contextMenuHidden={true}
          onBlur={() => validateEmail(email)}
          onChangeText={newemail => SetEmail(newemail)}
        />

        <TextInput
          style={{
            margin: 10,
            borderWidth: 2,
            borderRadius: 50,
            paddingLeft: 10,
            borderColor: 'white',
            alignSelf: 'center',
            width: 300,
            shadowColor: 'white',
            elevation: 1,
          }}
          placeholder="ᴘᴀꜱꜱᴡᴏʀᴅ"
          placeholderTextColor="white"
          value={password}
          onChangeText={password => SetPassword(password)}
        />

        {/* {emailError !== '' && <Text>{emailError}</Text>} */}

        {/* 
      <TextInput
        style={{
          margin: 10,
          borderWidth: 2,
          borderRadius: 50,
          paddingLeft: 10,
        }}
        placeholder="Name"
        placeholderTextColor="black"
        value={name}
        onChangeText={name => Setname(name)}
      /> */}
        {/* <Text style={{color: 'red'}}>Name:{name}</Text> */}

        {emailError == '' ? (
          // <Button
          //   title="Submit"
          //   onPress={() => {
          //     SignUp();
          //     //addlogininfo();
          //   }}></Button>

          <TouchableOpacity
            onPress={() => {
              SignUp();
            }}
            style={{
              backgroundColor: '#FF9199',
              padding: 10,

              margin: 10,
              borderRadius: 100,
              alignSelf: 'center',
              width: 350,
              elevation: 20,
              shadowRadius: 10,
              shadowColor: 'white',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 25,
                letterSpacing: 1,
              }}>
              ʟᴏɢɪɴ
            </Text>
          </TouchableOpacity>
        ) : (
          <Text style={{textAlign: 'center', color: 'red'}}>WRONG EMAIL</Text>
        )}

        <Systemconfig />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text style={{textAlign: 'center', color: 'lightblue', fontSize: 20, display:showText ?  'none' : 'flex'}}>
            ᴡᴀɴᴛ ᴛᴏ ʙᴇ ᴏɴ ʙᴏᴀʀᴅ ?
          </Text>
        </TouchableOpacity>

        {/* <Button
          title="Welcome Api"
          onPress={() => {
            //  Welcome();
          }}></Button> */}

        {/* <DisplayText /> */}

        {/* <DataButton/> */}
        {/* <Abc/> */}

        {/* IMPP ------ */}

        {/* <Text> Hey the data is {loginuserData}</Text> */}
        {/* <UserName /> */}

        {/* <Button
        title="Logout"
        onPress={() => {
          Logout();
        }}></Button> */}
      </View>
    </ScrollView>
  );
};
export default Login;
