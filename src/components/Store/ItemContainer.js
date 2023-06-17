import React from 'react';
import { View,Text,Image,TouchableOpacity } from 'react-native';
import Cocktail from '../../assets/Icons/bottomNav/Cocktail.jpg'
export default function ItemContainer() {
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

      {/* {showView && <Popup />} */}
    </View>
  );
}
