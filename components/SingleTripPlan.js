import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Animated,
  Easing,
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

  let wiggleValue = new Animated.Value(0)
  const handleWiggle = () => {
    if(!deleteMode) return;
    Animated.loop(
      Animated.sequence([
        Animated.timing(wiggleValue, { toValue: 1.0, duration: 150, easing: Easing.linear, useNativeDriver: true }),
        Animated.timing(wiggleValue, { toValue: -1.0, duration: 300, easing: Easing.linear, useNativeDriver: true }),
        Animated.timing(wiggleValue, { toValue: 0.0, duration: 150, easing: Easing.linear, useNativeDriver: true }),
      ]).start()
    )
  }

  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() => handleTripPlanClicked()}
      onLongPress={() => {
        setDeleteMode(true)
        handleWiggle()
      }}
    >
        <Animated.View style={{...styles.animateBox, 
          borderWidth: `${deleteMode ? 3 : 1}`,
          transform: [{
            rotate: wiggleValue.interpolate({
              inputRange: [-1, 1],
              outputRange: ['-0.1rad', '0.1rad'],
            })
          }]}}>
      {deleteMode && (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => alert('hi')}
        >
          <Text style={styles.deleteButtonText}>×</Text>
        </TouchableOpacity>
      )}
      <Text> {travelPlan.tripName}</Text>
      </Animated.View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
    margin: 17,
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
  },
  animateBox: {
    width: '100%',
    height: '100%',
    padding: 15,
    alignItems: 'flex-end',
    flexDirection: 'row',
    borderRadius: 10,
  }
})