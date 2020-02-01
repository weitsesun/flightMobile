import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import SingleTripPlan from './SingleTripPlan'
import AddNewPlanComponent from './AddNewPlanComponent'

export default function TravelPlans({ data, navigation }) {
  return (
    <View>
      <View style={styles.planViewGrid}
      >
        {/* <Text></Text> */}
        {data && data.map(travelPlan => {
          return <SingleTripPlan 
                    key={travelPlan.tripName}
                    travelPlan={travelPlan}
                    navigation={navigation}
                  />
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