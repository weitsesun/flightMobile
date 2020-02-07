import React, { useState, } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import SingleTripPlan from './SingleTripPlan'
import AddNewPlanComponent from './AddNewPlanComponent'

export default function TravelPlans({ data, navigation }) {
  const [deleteMode, setDeleteMode] = useState(false)

  return (
    
      <TouchableOpacity
        activeOpacity={1}
        style={{ width: '100%', height: '100%'}}
        onPress={() => {
          if (deleteMode) setDeleteMode(false)
          return
        }}>
    <ScrollView>

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
          <AddNewPlanComponent deleteMode={deleteMode} setDeleteMode={setDeleteMode}/>
        </View>
        </ScrollView>

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