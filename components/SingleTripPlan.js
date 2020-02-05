import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Animated,
} from 'react-native';

export default function SingleTripPlan({
  travelPlan,
  navigation,
  deleteMode,
  setDeleteMode,
}) {

  const handleTripPlanClicked = () => {
    return navigation.navigate('FlightsOverview',
      {
        flights: travelPlan.flights,
        tripName: travelPlan.tripName
      }
    )
  }

  return (
    <TouchableOpacity
      style={{ ...styles.box, borderWidth: `${deleteMode ? 3 : 1}` }}
      onPress={() => handleTripPlanClicked()}
      onLongPress={() => setDeleteMode(true)}
    >
      {deleteMode && (
        <TouchableOpacity 
          style={styles.deleteButton}
          onPress={() => alert('hi')}
        >
          <Text style={styles.deleteButtonText}>×</Text>
        </TouchableOpacity>
      )}
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
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  deleteBox: {
    width: 150,
    height: 150,
    margin: 17,
    padding: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'rgb(100,100,100)',
    alignItems: 'flex-end',
    flexDirection: 'row',
    position: 'relative',
  },
  deleteButton: {
    position: 'absolute',
    backgroundColor: 'rgb(100,100,100)',
    top: -15,
    left: -15,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  deleteButtonText: {
    fontSize: 25,
  }
})