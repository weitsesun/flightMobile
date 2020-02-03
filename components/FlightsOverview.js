import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import SingleFlight from './SingleFlight'

export default function FlightsOverview({ navigation }) {
  const [flights, setFlights] = useState([])
  const [tripName, setTripName] = useState('this trip')

  useEffect(() => {
    setFlights(navigation.getParam('flights'))
    setTripName(navigation.getParam('tripName'))
  }, [flights])

  return (
      <View style={styles.flightContainer}>
        <Text style={styles.subject}>Flights in {tripName}:</Text>
        {flights.map(flight => 
          <SingleFlight 
            key={flight.id} 
            flight={flight}
            navigation={navigation} 
          />
        )}
      </View>
  )
}

const styles = StyleSheet.create({
  flightContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'orange'
  },
  subject: {
    fontSize: 15,
    marginLeft: '5%',
    marginTop: 10,
  }
})