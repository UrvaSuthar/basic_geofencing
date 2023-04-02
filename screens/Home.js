import { View, Text } from 'react-native'
import React from 'react'
import Geofence from './components/Geofence'

const Home = () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-xl'>Hello</Text>
      <Geofence/>
    </View>
  )
}

export default Home