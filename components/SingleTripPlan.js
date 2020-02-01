import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function SingleTripPlan({ travelPlan, navigation }) {
  return (
      <TouchableOpacity 
        style={ styles.box }
        onPress={() => navigation.navigate('FlightsOverview', 
                                            { flights: travelPlan.flights,
                                              tripName: travelPlan.tripName }
                                          )}
      >
        <Text> {travelPlan.tripName}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
    margin: 17,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    // backgroundColor: 'red',
  }
})