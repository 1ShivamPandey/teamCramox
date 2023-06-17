import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity,Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartFotter from './CartFotter';
import {useNavigation} from '@react-navigation/native';
import { accelerometer } from 'react-native-sensors';
export default function PlusMinusBtn() {
  const [showViewbtns, setShowbtns] = React.useState(0);
  const [AddbtnClicked, setAddbtnclicked] = React.useState(false);

  const [quantity, setQuantity] = React.useState(1);
  const [price, setPrice] = React.useState(100);

  const [quantityStore, setQuantityStore] = React.useState('');
  const [priceStore, setPriceStore] = React.useState('');

  const [showComponent, setShowComponent] = useState(false);

  const navigation = useNavigation();

  React.useEffect(() => {
    getCartValue();
  });

  const disableaddBtn = () => {
    setAddbtnclicked(true);
  };

  const showplusminusBtn = () => {
    setShowbtns(showViewbtns === false ? true : false);
  };

  const hanldePlus = async () => {
    setQuantity(quantity + 1);
    setPrice(price + 100);

    const itemQuantity = (quantity + 1).toString();
    await AsyncStorage.setItem('itemQuantity', itemQuantity);

    const itemPrice = (price + 100).toString();
    await AsyncStorage.setItem('itemPrice', itemPrice);

    // var itemQuantity = (quantity + 1).toString();
    // console.log("Increase quantity is ",quantity+1)
  };

  const handleMinus = async () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setPrice(price - 100);

      const itemQuantity = (quantity - 1).toString();
      await AsyncStorage.setItem('itemQuantity', itemQuantity);

      const itemPrice = (price - 100).toString();
      await AsyncStorage.setItem('itemPrice', itemPrice);

      // itemQuantity = (quantity - 1).toString();
      // console.log("Decrease quantity is ",quantity-1)
    }
  };

  const getCartValue = async () => {
    const Quantity = await AsyncStorage.getItem('itemQuantity');
    const Price = await AsyncStorage.getItem('itemPrice');

    setQuantityStore(Quantity);
    setPriceStore(Price);

    console.log('The Quantity is', Quantity);
    console.log('The Price is', Price);
  };

  // const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) =>
  //   console.log({x, y, z, timestamp})
  // );

  return (
      <View>
        <TouchableOpacity
          onPress={() => {
            disableaddBtn();
            // subscription()
            showplusminusBtn();
          }}
          disabled={AddbtnClicked}>
          {showViewbtns === 0 ? (
            <View
              style={{
                backgroundColor: 'black',
                flexDirection: 'row',
                borderRadius: 6,
                borderColor: 'red',
                borderWidth: 0.8,
                elevation: 10,
                width: 75,
                justifyContent: 'center',
              }}>
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '600',
                    fontSize: 18,
                  }}>
                  ADD
                </Text>
              </View>
            </View>
          ) : (
            <View
              style={{
                backgroundColor: 'black',
                flexDirection: 'row',
                borderRadius: 8,
                borderColor: 'lightblue',
                borderWidth: 2,
                elevation: 10,
                width: 75,
                justifyContent: 'space-evenly',
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    // Wedecreaseitem();
                    // priceValueinDecrease();
                    // setValueinCart();
                    //   handleMinus();
                    //   setValueinCart();
                    handleMinus();
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 20,
                    }}>
                    -
                  </Text>
                </TouchableOpacity>
              </View>

              <View>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '600',
                    fontSize: 18,
                  }}>
                  {/* {ItemIncrease -1 } */}
                  {quantityStore}
                </Text>
              </View>

              <View>
                <TouchableOpacity
                  onPress={() => {
                    // Weincreaseitem();
                    // priceValue();
                    // setValueinCart();
                    // helll();
                    // Productincart();
                    //   handlePlus();
                    //   setValueinCart();
                    //   setShowView(!showView);
                    hanldePlus();
                    setShowComponent(true);
                  }}
                  // disabled={itembtn}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 20,
                    }}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </TouchableOpacity>
        {showComponent && <CartFotter />}
      </View>
  );
}
