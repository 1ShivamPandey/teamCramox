import React, {Component} from 'react';
import {View, Text, TextInput, Button, useState, Image} from 'react-native';
import axios from 'axios';
import {useNavigation, useRoute} from '@react-navigation/native';
import validator from 'validator';
import RazorpayCheckout from 'react-native-razorpay';
import {ScrollView} from 'react-native-gesture-handler';
import {launchCamera,launchImageLibrary} from 'react-native-image-picker';
import Geocoder from 'react-native-geocoding';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Coupon = () => {
  const [email, SetEmail] = React.useState('');
  const [password, SetPassword] = React.useState('');
  const [name, Setname] = React.useState('');
  const [image, setImage] = React.useState('');
  const [secondimage, setsecondimg] = React.useState('');

  const navigation = useNavigation();
  // const {navigation} = this.props;

// React.useEffect(()=>{
//   getimage()
// },[])

  const signUp = async () => {
    try {
      const res = await axios.post('http://192.168.176.97:8080/register', {
        // const res = await axios.post('https://signup-cramox-backend.onrender.com/register', {
        email,
        password,
        name,
      });
      // .then(res => console.log(res));
      //  console.log(email);
      // console.warn(email);
      console.log(res.data);
      navigation.navigate('Search');
    } catch (error) {
      console.log(error);
    }
    // if (validator.isEmail(email)) {
    //   SetEmail('Valid Email :)')
    // } else {
    //   SetEmail('Enter valid Email!')
    // }
  };

  const Teg = () => {
    // console.log("Teg wala Function")
    SetEmail([...email]);
    SetPassword([...password]);
    Setname([...name]);
  };

  const submitbabu = () => {
    signUp();
    Teg();
  };

  const makePayment = () => {
    var options = {
      description: 'Credits towards consultation',
      // image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_Coupon_ajwt09yMru2Lql', // Your api key
      amount: '5000' + '00',
      name: 'Cramox',
      prefill: {
        email: 'void@razorpay.com',
        contact: '9191919191',
        name: 'Razorpay Software',
      },
      theme: {color: '#000000'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        alert(`Success:  ${JSON.stringify(data)}`);
      })
      .catch(error => {
        // handle failure
        // alert(`Error: ${error.code} | ${error.description}`);
        alert(`Error: Dikkat ho gya re baba`);
      });
  };

  // handleReset = () => {
  //   this.setState({
  //     itemvalues: [{}]
  //   });
  // };

  const options = {
    // title: 'Pick an image',
    storageOptions: {
      // skipBackup: true,
      path: 'images',
      mediaType:'photo'
    },
    includeBase64:true
  };

  const pickImage = async() => {
    launchImageLibrary(options, async response => {
      if (response.didCancel) {
        console.log('USer cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error:', response.error);
      } else if (response.customButton) {
        console.log('User tapped coustmer btn', response.customButton);
      } else {
        const source = {uri: 'data:image/jpeg;base64,' + response.assets[0].base64};
        // const source = {uri:response.uri}
       // console.log("Response is",response)
      // await AsyncStorage.setItem('image', source);
      setImage(source);
      }
    });
  };


  // const getimage = async() =>{
  //   const img = await AsyncStorage.getItem('image')
  //   setsecondimg(img)
  // }


  // const pickImage = () => {
  //   ImagePickerResponse.launchImageLibrary({mediaType:'photo'},response => {
  //       console.log("Response ",response)
  //       setImage(response)
  //   //   if (response.uri) {
  //   //     // handle the image URI here
  //   //   }
  //   });
  // };

  Geocoder.init("AIzaSyA7Lo6QtBafetJV6k9a2YYgodMvaHCcvRo"); // use a valid API key
  // With more options
  // Geocoder.init("xxxxxxxxxxxxxxxxxxxxxxxxx", {language : "en"}); // set the language
  
  // Search by address
  Geocoder.from("Colosseum")
      .then(json => {
        var location = json.results[0].geometry.location;
        console.log(location);
      })
      .catch(error => console.warn(error));
  
  // Search by address, with a biased geo-bounds
  Geocoder.from("Pyramid", {
      southwest: {lat: 36.05, lng: -115.25},
      northeast: {lat: 36.16, lng: -115.10}})
      .then(json => {
        var location = json.results[0].geometry.location;
        console.log(location);
      })
      .catch(error => console.warn(error));
  
  // Search by geo-location (reverse geo-code)
  Geocoder.from(41.89, 12.49)
      .then(json => {
              var addressComponent = json.results[0].address_components[0];
        console.log(addressComponent);
      })
      .catch(error => console.warn(error));
  
  // Works as well :
  // ------------
  
  // location object
  Geocoder.from({
    latitude : 41.89,
    longitude : 12.49
  });
  
  // latlng object
  Geocoder.from({
    lat : 41.89,
    lng : 12.49
  });
  
  // array
  Geocoder.from([41.89, 12.49]);



  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      {/* <Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:25}}>Coupons</Text> */}
      <Text
        style={{color: 'grey', textAlign: 'left', fontSize: 18, marginTop: 25}}>
        Wanna upload coupons & earn money ? 🤨
      </Text>

      <Image source={image} style={{height:100 ,width:100}} />
      <Button title="Pick an image" onPress={pickImage} />
      {/* <Image source={secondimage} style={{height:100 ,width:100}}/> */}

      {/* <TextInput
        style={{
          margin: 10,
          borderWidth: 2,
          borderRadius: 50,
          paddingLeft: 10,
          color: 'black',
        }}
        placeholder="Enter email"
        placeholderTextColor="black"
        value={email}
        onChangeText={email => SetEmail(email)}
      />

      <TextInput
        style={{
          margin: 10,
          borderWidth: 2,
          borderRadius: 50,
          paddingLeft: 10,
          color: 'black',
        }}
        placeholder="Password"
        placeholderTextColor="black"
        value={password}
        onChangeText={password => SetPassword(password)}
      />

      <TextInput
        style={{
          margin: 10,
          borderWidth: 2,
          borderRadius: 50,
          paddingLeft: 10,
          color: 'black',
        }}
        placeholder="Name"
        placeholderTextColor="black"
        value={name}
        onChangeText={name => Setname(name)}
      /> */}

      <Text style={{color: 'red'}}>Name:{name}</Text>

      <Button
        title="Submit"
        onPress={() => {
          signUp();
          Teg();
        }}></Button>
    </ScrollView>
  );
};
export default Coupon;
