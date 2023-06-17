import React from 'react';
import {View, Text} from 'react-native';
//import MapView from 'react-native-maps';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

export default function Map({route}) {
  const userwalaemail = route.params.useremail;
  const lat = route.params.lat;
  const long = route.params.long;

  return (
    <View>
      {/* <Text style={{color: 'black'}}>This is map page {userwalaemail}</Text> */}
      <MapView
        style={{height: '100%', width: '100%'}}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        initialRegion={{
          latitude:  28.644800,
          longitude: 77.216721,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
    </View>
  );
}
