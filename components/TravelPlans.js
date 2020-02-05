import React, { useState } from 'react'
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
  const [deleteMode, setDeleteMode] = useState(false)

  return (
    <View>
      <TouchableOpacity 
      style={{width: '100%', height:'100%'}}
      onPress={() => {
        if(deleteMode) setDeleteMode(false)
        return
      }}>
      <View style={styles.planViewGrid}
      >
        {data && data.map(travelPlan => {
          return <SingleTripPlan 
                    key={travelPlan.tripName}
                    travelPlan={travelPlan}
                    navigation={navigation}
                    setDeleteMode={setDeleteMode}
                    deleteMode={deleteMode}
                  />
        })}
        <AddNewPlanComponent />
      </View>
      </TouchableOpacity>
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