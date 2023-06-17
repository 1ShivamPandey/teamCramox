import React, {Component} from 'react';
import {View, Text, TextInput, Button, useState} from 'react-native';
import axios from 'axios';
import {useNavigation, useRoute} from '@react-navigation/native';
import validator from 'validator';
import RazorpayCheckout from 'react-native-razorpay';
const Test = () => {
  const [email, SetEmail] = React.useState('');
  const [password, SetPassword] = React.useState('');
  const [name, Setname] = React.useState('');
  const navigation = useNavigation();
  // const {navigation} = this.props;

  const signUp = async () => {
    try {
      // const res = await axios.post('http://192.168.1.3:8080/register', {
      const res = await axios.post(
        'https://signup-cramox-backend.onrender.com/register',
        {
          email,
          password,
          name,
        },
      );
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
      key: 'rzp_test_ajwt09yMru2Lql', // Your api key
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

  return (
    <View>
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
      />

      <TextInput
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

      <Text style={{color: 'red'}}>Name:{name}</Text>
      <Button
        title="Submit"
        onPress={() => {
          signUp();
          Teg();
        }}></Button>

      {/* <View>
        <Button title="Pay" onPress={makePayment} />
      </View> */}
    </View>
  );
};
export default Test;
