import Geolocation from 'react-native-geolocation-service';
import GeoFencing from 'react-native-geo-fencing';

import { View, Text } from 'react-native'
import React from 'react'

const Geofence = () => {

		const polygon = [
		  { lat: 23.595222, lng: 72.358285},
		  { lat: 23.595200, lng: 72.358435 },
		  { lat: 23.595429,  lng: 72.358473 },
 // last point has to be same as first point
		  { lat: 23.595222, lng: 72.358285},
		];
	       
		let point = {
		  lat: 23.595330,
		  lng: 72.358368 
		};
	       
		GeoFencing.containsLocation(point, polygon)
		  .then(() => console.log('point is within polygon'))
		  .catch(() => console.log('point is NOT within polygon'))
	
  return (
    <View>
      <Text>Geofence</Text>
    </View>
  )
}

export default Geofence