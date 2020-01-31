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
import AddNewPlan from './AddNewPlan'

export default function TravelPlans({ data }) {

  return (
    <View>
      <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        // backgroundColor: 'red',
        width: '100%',
        justifyContent: 'flex-start',
      }}
      >
        {/* <Text>{JSON.stringify(Array.isArray(data))}</Text> */}
        {data && data.map(plan => {
          return <SinglePlan key={data.id} tripName={plan.tripName} />
        })}
        <AddNewPlan />
      </View>
    </View>
  )
}
