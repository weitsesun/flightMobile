import React, { useState, useEffect } from 'react'
import { 
  View,
  Text,
 } from 'react-native'

export default function FlightsOverview({ navigation }) {
  const [ flights, setFlights ] = useState([])

  useEffect(() => {
    setFlights(navigation.getParam('flights'))
  }, [flights])

  return (
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'rgb(255, 100, 71)',
    }}>
      <Text>{JSON.stringify(flights)}</Text>
    </View>
  )
}
