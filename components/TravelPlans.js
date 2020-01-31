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
import AddNewPlanComponent from './AddNewPlanComponent'

export default function TravelPlans({ data }) {

  return (
    <View>
      <View style={styles.planViewGrid}
      >
        {/* <Text></Text> */}
        {data && data.map(travelPlan => {
          return <SinglePlan key={travelPlan.tripName} tripName={travelPlan.tripName} />
        })}
        <AddNewPlanComponent />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  planViewGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'flex-start',
  },
})