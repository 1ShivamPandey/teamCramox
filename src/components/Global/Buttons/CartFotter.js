import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const CartFotter = () => {
  const [quantityStore, setQuantityStore] = React.useState('');
  const [priceStore, setPriceStore] = React.useState('');

  const navigation = useNavigation();
  // React.useEffect(() => {
  //
  // },[]);

  React.useEffect(() => {
      getCartValue();
  });

  const getCartValue = async() => {
    const Quantity = await AsyncStorage.getItem('itemQuantity');
    const Price = await AsyncStorage.getItem('itemPrice');

    setQuantityStore(Quantity);
    setPriceStore(Price);

    console.log('The Quantity is', Quantity);
    console.log('The Price is fuck', Price);
  }


  return (
    <View
      style={{
        backgroundColor: '#2E8B57',
        height: 50,
        borderRadius: 8,
        marginTop: 30,
      }}>
      <View
        style={{
          flexDirection: 'row',
          // alignItems: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <View style={{flexDirection: 'column'}}>
          <Text style={{color: 'white', fontSize: 15}}>
            {quantityStore} items
          </Text>
          <Text style={{color: 'white', fontWeight: '700', fontSize: 18}}>
            ₹ {priceStore} Total
          </Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Checkout', {
                name: 'shivam is my name',
                //   totalmoney: `${total}`,
                //   itemquantity: `${quantity}`,
              });
              getCartValue();
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
              View Cart ‣
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default CartFotter;
