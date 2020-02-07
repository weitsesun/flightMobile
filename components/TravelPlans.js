import React, { useState, } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import SingleTripPlan from './SingleTripPlan'
import AddNewPlanComponent from './AddNewPlanComponent'

export default function TravelPlans({ data, navigation }) {
  const [deleteMode, setDeleteMode] = useState(false)

  return (
      <TouchableOpacity 
      style={{width: '100%', height: '100%'}}
      onPress={() => {
        if(deleteMode) setDeleteMode(false)
        return
      }}>
      <View style={styles.planViewGrid}>
        {data && data.map(travelPlan => {
          return <SingleTripPlan 
                    key={travelPlan.tripName}
                    travelPlan={travelPlan}
                    navigation={navigation}
                    setDeleteMode={setDeleteMode}
                    deleteMode={deleteMode}
                  />
        })}

        {/* if deleteMode is ON, hide add new plan button */}
      <AddNewPlanComponent />
      </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  planViewGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
})