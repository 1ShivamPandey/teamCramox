import React from 'react';
import {View, Text} from 'react-native';
export const BrightButton = (props) => {
  return (
    <View
      style={{
        margin: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 80,
      }}>
      <Text style={{color: 'black', fontSize: 15}} >{props.name}</Text>
    </View>
  );
};


