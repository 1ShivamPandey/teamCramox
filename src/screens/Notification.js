// import React, {Component} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   SafeAreaView,
//   ScrollView,
//   Alert,
//   TouchableOpacity,
//   TextInput,
// } from 'react-native';
// import menuBar from '../assets/Icons/bottomNav/menuBar2.png';
// import {
//   Menu,
//   MenuProvider,
//   MenuOptions,
//   MenuOption,
//   MenuTrigger,
// } from 'react-native-popup-menu';
// import backButtons from '../assets/Icons/bottomNav/backButtons.png';
// import rocketImage from '../assets/Icons/bottomNav/rocketImage.png';
// import dropDown from '../assets/Icons/bottomNav/dropDown2.png';

// import {BrightButton} from '../components/BrightButton';
// import {RocketImage} from '../components/RocketImage';
// import {AlloffButton} from '../components/AlloffButton';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// // import {TextInput} from 'react-native-gesture-handler';
// import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
// import axios from 'axios';
// //import AsyncStorage from '@react-native-async-storage/async-storage';
// const Notification = () => {
//   // const Header = () => {
//   //   return (
//   //     <View style={styles.header}>
//   //     <View>
//   //       <View>
//   //         <Image source={backButtons}></Image>
//   //       </View>

//   //       <View>
//   //         <Image source={menuBar}></Image>
//   //       </View>

//   //       <Text>gey</Text>
//   //     </View>

//   //   );

//   // };

//   // const ShadeControl = () => {
//   //   return (
//   //     <View style={styles.ShadeControl}>
//   //       <Text style={{color: 'black', fontSize: 20}}>Shade Control</Text>
//   //       <Text>Living Room</Text>
//   //     </View>
//   //   );
//   // };

//   // const Scenesspace = () => {
//   //   return (
//   //     <View style={styles.Scenes}>
//   //       <Text>𝗦𝗖𝗘𝗡𝗘𝗦</Text>
//   //       <View style={styles.itemsinRow}>
//   //         <View style={styles.boxLook}>
//   //           <View>
//   //             <RocketImage />
//   //           </View>
//   //           <View>
//   //             <BrightButton name="All Off" />
//   //           </View>
//   //         </View>
//   //         <View style={styles.boxLook}>
//   //           <View>
//   //             <RocketImage />
//   //           </View>
//   //           <View>
//   //             <BrightButton name="Bright" />
//   //           </View>
//   //         </View>
//   //       </View>
//   //       <View style={styles.itemsinRow}>
//   //         <View style={styles.boxLook}>
//   //           <View>
//   //             <RocketImage />
//   //           </View>
//   //           <View>
//   //             <BrightButton name="All Off" />
//   //           </View>
//   //         </View>
//   //         <View style={styles.boxLook}>
//   //           <View>
//   //             <RocketImage />
//   //           </View>
//   //           <View>
//   //             <BrightButton name="Bright" />
//   //           </View>
//   //         </View>
//   //       </View>
//   //     </View>
//   //   );
//   // };

//   // const GroupControl = () => {
//   //   return (
//   //     <View>
//   //       <Text>𝗚𝗥𝗢𝗨𝗣 𝗖𝗢𝗡𝗧𝗥𝗢𝗟𝗦</Text>

//   //       <View style={styles.itemsinRow}>
//   //         <View style={styles.boxLook}>
//   //           <View>
//   //             <BrightButton name="More Open" />
//   //           </View>
//   //         </View>

//   //         <View style={styles.boxLook}>
//   //           <View>
//   //           <BrightButton name="More Close" />
//   //           </View>
//   //         </View>
//   //       </View>
//   //     </View>
//   //   );
//   // };

//   // const Control = () => {
//   //   return (
//   //     <View>
//   //       <Text>𝗖𝗢𝗡𝗧𝗥𝗢𝗟𝗦</Text>
//   //     </View>
//   //   );
//   // };

//   // const Dropbtn = () => {
//   //   return (
//   //     <MenuProvider style={{flexDirection: 'column', padding: 30}}>
//   //       <Menu onSelect={value => alert(`You Clicked : ${value}`)}>
//   //         <MenuTrigger>
//   //           <View style={{flex: 1, flexDirection: 'row'}}>
//   //             <Image style={{height: 25, width: 25}} source={dropDown}></Image>
//   //             <Text style={{color: 'black'}}>Window Roller Blind </Text>
//   //           </View>
//   //           <Text style={{color: 'black', marginLeft: 35}}>OFF </Text>
//   //         </MenuTrigger>

//   //         <MenuOptions>
//   //           <MenuOption value={'Login'}>
//   //             <Text style={styles.menuContent}>Pay</Text>
//   //           </MenuOption>
//   //           <MenuOption value={'Register'}>
//   //             <Text style={styles.menuContent}>Pay later</Text>
//   //           </MenuOption>
//   //           <MenuOption value={3} disabled={true}>
//   //             <Text style={styles.menuContent}>Pay Never 😂</Text>
//   //           </MenuOption>
//   //         </MenuOptions>
//   //       </Menu>
//   //     </MenuProvider>
//   //   );
//   // };

//   // const Randombtns = () => {
//   //   return (
//   //     <View>
//   //       <View style={styles.itemsinRow}>
//   //         <View style={styles.boxLook}>
//   //           <View>
//   //             <BrightButton name="Open" />
//   //           </View>
//   //         </View>

//   //         <View style={styles.boxLook}>
//   //           <View>
//   //           <BrightButton name="Pause" />
//   //           </View>
//   //         </View>

//   //         <View style={styles.boxLook}>
//   //           <View>
//   //           <BrightButton name="Close" />
//   //           </View>
//   //         </View>
//   //       </View>

//   //       <View style={styles.itemsinRow}>
//   //         <View style={styles.boxLook}>
//   //           <View>
//   //           <BrightButton name="Black out" />
//   //           </View>
//   //         </View>

//   //         <View style={styles.boxLook}>
//   //           <View>
//   //           <BrightButton name="Flip+" />
//   //           </View>
//   //         </View>
//   //       </View>

//   //       <Text style={{color: 'black', fontSize: 15, marginTop: 100}}>-</Text>
//   //     </View>
//   //   );
//   // };
//   {
//     /* <Header />
//       <ShadeControl />
//       <Scenesspace />
//       <GroupControl />
//       <Control />
//       <Dropbtn />
//       <Randombtns /> */
//   }
//   const [msginfo, SetMessage] = React.useState('');
//   const [ShowMessage, SetShowMessage] = React.useState('');
//   const [isCorrectmail, SetisCorrectmail] = React.useState('');

//   React.useEffect(() => {
//     samUser();
//   });

//   const SendMessage = async () => {
//     try {
//       const apnamessage = await axios.post(
//         'http://192.168.101.97:8080/message',
//         {
//           msginfo,
//         },
//       );
//       if (apnamessage.data.MessageIsValid === true) {
//         console.log('Message is', apnamessage.data);
//         SetShowMessage(apnamessage.data?.sendedMessage);
//       } 
      
//       else {
//         console.log('Something is wrong');
//       }

//     } catch (error) {
//       console.log('There is some error');
//     }
//   };

//   const samUser = async () => {
//     const ismail = await AsyncStorage.getItem('itemList');
//     SetisCorrectmail(ismail);
//     // console.log('The email is ', ismail);
//   };

//   return (
//     <ScrollView style={{backgroundColor: 'black'}}>
//       <View>
//         <View>
//           <View
//             style={{
//               backgroundColor: 'purple',
//               padding: 20,
//               borderRadius: 50,
//               width: 200,
//               alignSelf: 'flex-end',
//             }}>
//             <Text style={{color: 'white'}}> {ShowMessage} </Text>
//           </View>
//           <View
//             style={{
//               backgroundColor: '#EFEFEF',
//               padding: 20,
//               borderRadius: 50,
//               width: 200,
//               alignSelf: 'flex-start',
//             }}>
//             <Text style={{color: 'black'}}> here is my message </Text>
//           </View>
//         </View>

//         <View
//           style={{
//             flexDirection: 'row',
//             marginTop: 520,
//             alignSelf: 'center',
//           }}>
//           <View>
//             <TextInput
//               style={{
//                 margin: 10,
//                 borderWidth: 2,
//                 borderRadius: 50,
//                 paddingLeft: 10,
//                 borderColor: 'white',
//                 width: 350,
//                 color: 'white',
//               }}
//               placeholder="Send a message ... "
//               placeholderTextColor="white"
//               value={msginfo}
//               cursorColor="white"
//               onChangeText={msginfo => SetMessage(msginfo)}
//             />
//           </View>

//           <View style={{position: 'absolute', alignSelf: 'center', right: 25}}>
//             <TouchableOpacity
//               onPress={() => {
//                 SendMessage();
//               }}>
//               <Text style={{color: 'blue', fontWeight: 'bold'}}>Send</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//       {/* <TouchableOpacity>
//         <Image />
//       </TouchableOpacity> */}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     margin: 10,
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },

//   ShadeControl: {
//     marginTop: 10,
//   },

//   Scenes: {
//     marginTop: 20,
//   },

//   menuContent: {
//     color: '#000',
//     fontWeight: 'bold',
//     padding: 2,
//     fontSize: 20,
//   },
//   itemsinRow: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//   },
//   boxLook: {
//     margin: 10,
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     height: 80,
//   },
// });

// export default Notification;


// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const Notification = () => {
//   const [quantity, setQuantity] = useState(0);
//   const [total, setTotal] = useState(0);

//   const handlePlus = () => {
//     setQuantity(quantity + 1);
//     setTotal(total + 10);
//   };

//   const handleMinus = () => {
//     if (quantity > 0) {
//       setQuantity(quantity - 1);
//       setTotal(total - 10);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.row}>
//         <TouchableOpacity onPress={handleMinus}>
//           <Text style={styles.button}>-</Text>
//         </TouchableOpacity>
//         <Text style={styles.text}>{quantity}</Text>
//         <TouchableOpacity onPress={handlePlus}>
//           <Text style={styles.button}>+</Text>
//         </TouchableOpacity>
//       </View>
//       <Text>Total: ${total}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   text: {
//     paddingHorizontal: 10,
//   },
//   button: {
//     fontSize: 20,
//   },
// });

// export default Notification;
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Notification = () => {
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    retrieveData();
  }, []);

  const handlePlus = async () => {
    setQuantity(quantity + 1);
    setTotal(total + 10);
    await saveData();
  };

  const handleMinus = async () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setTotal(total - 10);
      await saveData();
    }
  };

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('@quantity', quantity.toString());
      await AsyncStorage.setItem('@total', total.toString());
      console.log('Data saved successfully!',total.toString());
    } catch (error) {
      console.error(error);
    }
  };

  const retrieveData = async () => {
    try {
      const quantity = await AsyncStorage.getItem('@quantity');
      const total = await AsyncStorage.getItem('@total');
      if (quantity && total) {
        setQuantity(parseInt(quantity, 10));
        setTotal(parseInt(total, 10));
        console.log(`Data retrieved successfully: quantity = ${quantity}, total = ${total}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={handleMinus}>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{quantity}</Text>
        <TouchableOpacity onPress={handlePlus}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>
      <Text>Total: ${total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    paddingHorizontal: 10,
  },
  button: {
    fontSize: 20,
  },
});

export default Notification;
