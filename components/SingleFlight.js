import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import { getTravelDate } from './getTravelDate'

export default function SingleFlight({ flight, navigation }) {
  const [month, day, year] = getTravelDate(flight.scheduled)

  return (
    <TouchableOpacity 
      style={styles.flightContainer} 
      onPress={() => navigation.navigate('SingleFlightDetail',
                                         { flight })}
    >
      <View style={styles.dateContainer}>
        <Text>{`${month}. ${day}`}</Text>
        <Text>{year}</Text>
      </View>
      <View style={styles.routeContainer}>
        <Text style={styles.routeText}>
          {`${flight.from}  ➟  ${flight.to}`}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  flightContainer: {
    width: '90%',
    height: 80,
    marginHorizontal: '5%',
    marginTop: 15,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: 'row',
  },
  dateContainer: {
    height: 80,
    width: '20%',
    borderRightWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  routeContainer: {
    width: '80%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  routeText: {
    fontSize: 30,
  }
})

