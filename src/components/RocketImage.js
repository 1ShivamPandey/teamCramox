import React from 'react';
import rocketImage from '../assets/Icons/bottomNav/rocketImage.png';
import {View, Image} from 'react-native';
export const RocketImage = () => {
  return (
    <View>
      <Image style={{height: 50, width: 50}} source={rocketImage} />
    </View>
  );
};
