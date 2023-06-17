import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  Pressable,
  Alert,
} from 'react-native';
import { Axios } from 'axios';
import {event} from 'react-native-reanimated';
import {Formik} from 'formik';
// import {event} from 'react-native-reanimated';
//import e from 'express';
function Register() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: '',
  //     // password: '',
  //     //response: 'click to connect to server',
  //     //emailError: '',
  //   };
  //   // this.changeHandler = this.changeHandler.bind(this);
  // }

  //   useEffect(() => {
  //     fetchApi()
  //   },[])

  // connect = async () => {
  //   const URL = 'http://192.168.1.34:3000/abc';
  //   try {
  //     const response = await fetch(URL);
  //     if (response.status != 200) {
  //       throw new Error('something is wrong');
  //     }
  //     const responseText = await response.text();
  //     this.setState({response: responseText});
  //   } catch (error) {
  //     Alert.alert(error.message);
  //   }
  // };

  // submit() {
  //   // console.warn(this.state);
  //   if (this.state.email == '') {
  //     console.log('email eld is empty ');
  //     alert('this is empty');
  //   } else {
  //     console.log('email entered');
  //   }
  //   console.log(this.state);
  // }

  // changeHandler = email => {
  //   this.setState({
  //     email: email,
  //     // password: username,
  //   });
  // };

  // handleChange(inputText) {
  //   this.setState({
  //     email: inputText,
  //   });
  // }

  // handleEmailChange(inputText) {
  //   this.setState({
  //     email: inputText,
  //   });
  // }

  // handlePasswordChange(inputText) {
  //   this.setState({
  //     password: inputText,
  //   });
  // }

  // submitHandler = e => {
  //   e.preventDefault();
  //   console.log(this.state);
  //   axios
  //     .post(
  //       'http://192.168.1.35:8080/register',
  //       this.state,
  //     )
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  //   emailValidator() {
  //     if (this.state.email=='') {
  //       this.setState({emailError: "email field can't be empty"});
  //     } else {
  //       this.setState({emailError:''});
  //     }
  //   }

  const [name, SetName] = React.useState({email: '', password: ''});

  const handleSubmit = async () => {
    const loginFormData = new FormData();
    loginFormData.append('email', name.email);
    loginFormData.append('password', name.password);

    try {
      const response = await axios({
        method: 'post',
        url: 'http://192.168.1.35:8080/register',
        data: loginFormData,
        headers: {'Content-Type': 'multipart/form-data'},
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = event => {
    SetName({
      ...name,
      [event.target.value]: event.target.value,
    });
  };

  // async () =>{
  //   axios.post('http://192.168.1.35:8080/register',{email:name.email, password:name.password})
  // }

  // const handleclick = async () => {
  //   axios
  //     .post('http://192.168.1.35:8080/register')
  //     .then(resposne => console.log(resposne.data));
  // };

  // render() {
  // const checkTextInput = () => {
  //   if (!name.trim()) {
  //     alert('Enter a name');
  //   }
  //   return;
  // };
  // const {email, password} = this.state;

  return (
    <ScrollView>
      <View style={{backgroundColor: 'blue'}}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            marginTop: 20,
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          Register
        </Text>

        {/* <View style={{margin: 20}}>
          <Formik onSubmit={handleSubmit}>
            <TextInput
              style={{
                margin: 10,
                borderColor: 'white',
                borderWidth: 2,
                borderRadius: 50,
                paddingLeft: 10,
              }}
              placeholder="Enter email"
              placeholderTextColor="white"
              value={name.email}
              onChange={handleChange}
            />
             
            <TextInput
              style={{
                margin: 10,
                borderColor: 'white',
                borderWidth: 2,
                borderRadius: 50,
                paddingLeft: 10,
              }}
              placeholder="Enter Password"
              placeholderTextColor="white"
              value={name.password}
              onChange={handleChange}
            />
          </Formik>
        </View> */}

        <View style={{margin: 20}}>
          {/* <TextInput
            style={{
              margin: 10,
              borderColor: 'white',
              borderWidth: 2,
              borderRadius: 50,
              paddingLeft: 10,
            }}
            placeholder="Enter email"
            placeholderTextColor="white"
            value={name.email}
            onChange={handleChange}
            // onChange={e => SetName({...name, email: e.target.value})}
            // onChangeText={email => setemailText(email)}
            //   onBlur={() => this.emailValidator()}
            // onChangeText={text => {
            //   this.setState({email: text});
            // }}
          ></TextInput> */}

          {/* <TextInput
            style={{
              margin: 10,
              borderColor: 'white',
              borderWidth: 2,
              borderRadius: 50,
              paddingLeft: 10,
            }}
            placeholder="Enter password"
            placeholderTextColor="white"
            value={name.password}
            onChange={handleChange}
            // onChange={e =>
            //   SetName({...name, password: e.target.value})
            // }
            // onChangeText={handlerTextChange}
          ></TextInput> */}

          {/* 
          <TextInput
            style={{
              margin: 10,
              borderColor: 'white',
              borderWidth: 2,
              borderRadius: 50,
              paddingLeft: 10,
            }}
            placeholder="Enter email"
            placeholderTextColor="white"
            value={password}
            onChangeText={password => setemailText(password)}
          ></TextInput> */}

          {/* <Text style={{color:'white'}}>{this.state.emailError} hey</Text> */}

          {/* <TextInput
              style={{
                margin: 10,
                borderColor: 'white',
                borderWidth: 2,
                borderRadius: 50,
                paddingLeft: 10,
              }}
              placeholder="Enter password"
              placeholderTextColor="white"
              keyboardType="numeric"
              value={password}
              onChangeText={this.changeHandler}
             
            ></TextInput> */}
          {/* 
               onChangeText={text => {
                 this.setState({password: text});
               }} */}

          {/* <Button  title="submit" onPress={()=> {this.submit()}}/> */}
          {/* <Pressable
              style={{
                backgroundColor: '#66ffff',
                height: 50,
                borderRadius: 100,
                marginTop: 20,
              }}
              // onPress={() => {
              //   this.submit();
              // }}
              onPress={this.submitHandler}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginTop: 10,
                  textAlign: 'center',
                }}>
                Submit
              </Text>
            </Pressable> */}

          {/* <Button title="submit" onPress={() => handleclick(this)}></Button> */}
          {/* <Text style={{color: 'red'}}>{JSON.stringify(name.email)}</Text> */}
          {/* <Button title="connect" onPress={this.connect}></Button>  */}
          {/* <Text style={{color: 'red'}}>{this.state.response}</Text> */}
        </View>

        <Text style={{marginTop: 800}}>]</Text>
      </View>
    </ScrollView>
  );
}
// }
export default Register;
