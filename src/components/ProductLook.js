import React, {useMemo} from 'react';
import {View, Text, Image} from 'react-native';
import Cocktail from '../../src/assets/Icons/bottomNav/Cocktail.jpg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {add} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
const ProductLook = (props, {title}) => {
  const [quantity, setQuantity] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  const [showView, setShowView] = React.useState(false);
  const [showViewbtns, setShowbtns] = React.useState(0);

  //Add btn disabled after one click
  const [AddbtnClicked, setAddbtnclicked] = React.useState(false);

  //Cart pop not showing again & again
  //  const [itembtn, setitembtnclicked] = React.useState(false);

  //CART VALUES
  const [cartstoredPrice, setcartstoredPrice] = React.useState('');
  const [cartstoredQuantity, setcartstoredQuantity] = React.useState('');

  const navigation = useNavigation();
  React.useEffect(() => {
    //valueIncart();
    // getitem();
    getCartValue();
    // setShowView(false);
  });

  const handlePlus = async () => {
    setQuantity(quantity + 1);
    setTotal(total + 100);
  };

  const handleMinus = async () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setTotal(total - 100);
    }
  };

  const handleAddbtn = () => {
    setAddbtnclicked(true);
  };

  // const handleitembtn = () => {
  //   setitembtnclicked(true);
  // };

  // const Weincreaseitem = () => {
  //   SetItemIncrease(ItemIncrease + 1);
  // };

  // const Wedecreaseitem = () => {
  //   SetItemIncrease(ItemIncrease - 1);
  // };

  // if (ItemIncrease <= 0) {
  //   SetItemIncrease(1);
  // }

  // if (ItemVal <= -1) {
  //   SetitemVal(0);
  // }

  // const priceValue = () => {
  //   SetitemVal(ItemIncrease * 100);
  // };

  // const priceValueinDecrease = () => {
  //   SetitemVal(ItemIncrease * 100 - 200);
  // };

  // const valueIncart = async () => {
  //   try {
  //     const intoString = (JSON.stringify(itemVal) )
  //     await AsyncStorage.setItem('itemdetails',itemVal);
  //   } catch (error) {
  //     console.log('there is some error');
  //   }
  //   // getitem();
  // };

  const setValueinCart = async () => {
    try {
      //here at hundred we have to figure out the exact number by which there is difference
      // if (handlePlus === true) {
      //   var itemdetailval = total + 500;
      // } else {
      //   var itemdetailval = total - 450 ;
      // }

      // if(handleMinus() === false){
      //   var itemdetailval = total - 200 ;
      // } else{
      //   var itemdetailval = total - 200 ;
      // }

      // var itemdetailval = total - 100;

      // if(handleMinus === false){
      //   var itemdetailval = total - 100;
      // }else if (handleMinus !== false){
      //   var itemdetailval = total - 100;
      // }
      //  if (handleMinus() === false) {

      //  } else {
      //   const itemdetailval = total - 100;
      //  }
      const itemdetailval = total + 100;
      const TotalPrice = itemdetailval.toString();
      //  console.log(abc
      // console.log(total);
      // console.log('total no of items is ', quantity);

      const TotalQuantity = quantity.toString();

      await AsyncStorage.setItem('Totalprice', TotalPrice);
      await AsyncStorage.setItem('TotalQuantity', TotalQuantity);

      console.log('Set Total price is  ....', TotalPrice);
      console.log('Set Total quantity is  ....', TotalQuantity);
      // console.log('item data is ....', ItemVal.toString());
    } catch (err) {
      console.log('there is an error');
    }
  };

  const getCartValue = async () => {
    const getTotalprice = await AsyncStorage.getItem('Totalprice');
    const getTotalQuantity = await AsyncStorage.getItem('TotalQuantity');

    setcartstoredPrice(getTotalprice);
    setcartstoredQuantity(getTotalQuantity);
    console.log('.......................................');

    console.log('Get Total Price.....', getTotalprice);
    console.log('Get Quantity of items .....', getTotalQuantity);
  };

  // const getitem = async () => {
  //  cartStoredValue = await AsyncStorage.getItem("itemdetails")
  //  console.log(cartStoredValue,"hahah")
  // };

  // const helll = () => {
  //   const ItemValue = 100 * ItemIncrease;
  //   SetItemValue(ItemValue);
  //   console.log(ItemIncrease, apnaitem, ItemValue);
  // };

  // const Productincart = async () => {
  //   const productitem = await AsyncStorage.setItem('ItemValueis',itemValuehaha);
  //   console.log('Product item is', productitem);
  // };

  // const ProductinCartval = async () => {
  //   const productitemVal = await AsyncStorage.getItem('ItemValue');
  //   SetitemVal(productitemVal);
  //   console.log('Product val is', productitemVal);
  // };

  const Popup = React.useCallback(() => {
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
              {' '}
              {quantity} items
            </Text>
            <Text style={{color: 'white', fontWeight: '700', fontSize: 18}}>
              ₹ {total}
            </Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Checkout', {
                  name: 'shivam is my name',
                  totalmoney: `${total}`,
                  itemquantity: `${quantity}`,
                });
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                View Cart ‣
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  });

  return (
    <View>
      {/* <Text style={{color: 'red'}}>this is product page</Text> */}
      <View
        style={{
          backgroundColor: 'black',
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingVertical: 20,
          paddingHorizontal: 1,
          borderRadius: 20,
          elevation: 5,
          borderColor: 'red',
          borderWidth: 1,
        }}>
        <View style={{borderColor: 'grey', borderRadius: 1, borderWidth: 2}}>
          <Image style={{height: 125, width: 125}} source={Cocktail} />
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text style={{color: 'white'}}>
              Product {props.name} {props.title}
            </Text>
            <Text style={{color: 'white'}}>
              ₹ {total} {cartstoredPrice}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              // setShowView(!showView);
              setShowbtns(showViewbtns === 0 ? 1 : 0);
              handleAddbtn();
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
                  justifyContent: 'space-evenly',
                }}>
                <View>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: '600',
                      fontSize: 18,
                    }}>
                    {/* {ItemIncrease -1 } */}
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
                  borderColor: 'red',
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
                      handleMinus();
                      setValueinCart();
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
                    {quantity}
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
                      handlePlus();
                      setValueinCart();
                      setShowView(!showView);
                      // handleitembtn();
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
        </View>
      </View>

      {showView && <Popup />}
    </View>
  );
};
export default ProductLook;
