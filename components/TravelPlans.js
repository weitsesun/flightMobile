import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import SinglePlan from './SinglePlan'

export default function TravelPlans({ data }) {

  return (
    <View style={{
      flexDirection: 'row',
      flexWrap: 'wrap'
      }}
    >
      {/* <Text>{JSON.stringify(Array.isArray(data))}</Text> */}
      {data && data.map(plan => {
        return <SinglePlan tripName={plan.tripName}/>
      })}
    </View>
  )
}
