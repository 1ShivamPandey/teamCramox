import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import RazorpayCheckout from 'react-native-razorpay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Cocktail from '../../assets/Icons/bottomNav/Cocktail.jpg';
import ProductLook from '../../components/ProductLook';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
export default function Checkout({route}) {
  const payingamount = route.params.totalmoney;
  const Totalitemquantity = route.params.itemquantity;
  const Totalitemquantityinstring = Totalitemquantity.toString();
  const payingamountinstring = payingamount.toString();
  const navigation = useNavigation();

  const [apnanaam, setapnanaam] = React.useState('');
  const [apnaemail, setapnaemail] = React.useState('');

  //let a = 10
  React.useEffect(() => {
    datafetch();
  }, []);

  const makePayment = () => {
    var options = {
      description: 'Credits towards consultation',
      // image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_live_FEBzZ0q1oVWWzK', // Your api key
      amount: `${payingamountinstring}` + '00',
      name: 'Cramox',
      prefill: {
        email: 'void@razorpay.com',
        contact: '9191919191',
        name: 'Razorpay Software',
      },
      theme: {color: '#000000'},
    };
    // RazorpayCheckout.open(options)
    //   .then(data => {
    //     // handle success
    //     alert(`Success:  ${JSON.stringify(data)}`);
    //     navigation.navigate('Paymentsuccess');
    //   })
    //   .catch(error => {
    //     // handle failure
    //     // alert(`Error: ${error.code} | ${error.description}`);
    //     alert(`Error: Dikkat ho gya re baba`);
    //   });
    RazorpayCheckout.open(options)
      .then(data => handlePaymentSuccess(data.razorpay_payment_id))
      .catch(error => handlePaymentError(error));
  };

  const handlePaymentSuccess = async paymentId => {
    console.log(`Payment Successful: ${paymentId}`);
    navigation.navigate('Paymentsuccess');
  };

  const handlePaymentError = async error => {
    console.log(`Error: ${error.code} |  ${error.description}`);
    await AsyncStorage.removeItem('itemSecond');
  };

  const datafetch = async () => {
    try {
      const detailsdata = await axios.get(
        'https://signup-cramox-backend.onrender.com/details',
      );
      console.log(detailsdata.data);
      setapnanaam(detailsdata.data);
      // console.log(a)
    } catch (error) {
      console.log('Some data is here...');
    }
  };

  return (
    <View style={{backgroundColor: 'black'}}>
      {/* <Text style={{color: 'white'}}>Cart</Text> */}

      {/* <ProductLook/> */}

      <View
        style={{
          backgroundColor: 'white',
          // alignItems: 'flex-end',
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{padding: 5}}>
          <Text>Pay using UPI</Text>
        </View>

        <View>
          <TouchableOpacity
            style={{
              backgroundColor: '#2E8B57',
              // alignItems: 'flex-end',
              padding: 5,
              borderRadius: 5,
              margin: 10,
              elevation: 10,
              width: 200,
            }}
            onPress={makePayment}
            // onPress={() => {
            //   navigation.navigate('Paymentsuccess');
            // }}
          >
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={{flexDirection: 'column'}}>
                <Text style={{color: 'white', fontWeight: '400', fontSize: 20}}>
                  ₹ {payingamount}
                </Text>

                <Text style={{color: 'white', fontWeight: '400', fontSize: 20}}>
                  Total
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '400',
                    fontSize: 20,
                    textAlign: 'center',
                  }}>
                  Place Order ‣
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={10}
        data={apnanaam.slice(0, 10)}
        keyExtractor={(index, item) => String(item)}
        renderItem={({item}) => (
          <View style={{marginTop: 50}}>
            <View
              style={{
                backgroundColor: 'black',
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingVertical: 10,
                paddingHorizontal: 1,
                borderRadius: 20,
                borderWidth: 2,
                borderColor: 'white',
                elevation: 10,
                marginTop: -10,
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Map', {
                    useremail: item.email,
                    lat: '26.500000',
                    long: '83.779999',
                  });
                }}>
                <View style={{borderColor: 'grey'}}>
                  <Image
                    style={{height: 80, width: 80, borderRadius: 10}}
                    source={Cocktail}
                  />
                </View>
              </TouchableOpacity>

              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>
                    Cocktail
                  </Text>
                  <Text
                    style={{color: '#f2f2f2', fontWeight: '500', fontSize: 18}}>
                    Quantity : {Totalitemquantityinstring}
                  </Text>
                  <Text style={{color: '#f2f2f2'}}>
                    ₹ {payingamountinstring} {item.email}
                  </Text>
                </View>
              </View>
            </View>
            {/* {showView && <Popup />} */}
          </View>
        )}
      />
    </View>
  );
}
