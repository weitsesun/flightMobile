import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function SinglePlan({ travelPlan, navigation }) {
  return (
      <TouchableOpacity 
        style={ styles.box }
        onPress={() => navigation.navigate('Flights')}
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