import React from 'react';
import { View,Text,Image,TouchableOpacity } from 'react-native';
import Cocktail from '../../../assets/Icons/bottomNav/Cocktail.jpg'
import PlusMinusBtn from '../Buttons/PlusMinusBtn';
export default function ItemContainer(props) {
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
              {/* ₹ {total} {cartstoredPrice} */}
              ₹ 100
            </Text>
          </View>
          <PlusMinusBtn/>
        </View>
      </View>
    </View>
  );
}
