import React from 'react';
import {View, Text, Image, Animated, Easing, Alert} from 'react-native';
import Lottie from 'lottie-react-native';
import Check from '../../assets/Icons/bottomNav/Check.png';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
//import Sound from 'react-native-sound';
export default function Paymentsuccess() {
  const animationprogress = React.useRef(new Animated.Value(0));
  const navigation = useNavigation();

  const [timeState, Setimestate] = React.useState(false);

  React.useEffect(() => {
    Animated.timing(animationprogress.current, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  // React.useEffect(()=>{
  //   // playSound()
  // })

  //   setInterval(() => {
  //     navigation.navigate('Search')
  //   }, 10000);

  setTimeout(() => {
    navigation.dispatch(StackActions.replace('Search'));
  }, 5000);

  // const sound = new Sound('OrderSuccess.mp3');
  // const playSound = () => {
  //   sound.play();
  // };

  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <View>
        {/* <Image style={{borderWidth:20,height:100,width:100,alignSelf:'center',justifyContent:'center'}} source={Check}/> */}
        <View
          style={{
            backgroundColor: 'white',
            marginTop: 200,
            borderRadius: 1000,
            height: 250,
            alignSelf: 'center',
          }}>
          <Lottie
            style={{height: 250, alignSelf: 'center'}}
            source={require('../../assets/Icons/bottomNav/paymentDone.json')}
            progress={animationprogress.current}
          />
        </View>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 50,
            alignSelf: 'center',
          }}>
          Order Placed
        </Text>
      </View>
    </ScrollView>
  );
}
