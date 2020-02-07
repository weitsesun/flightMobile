import React, { useContext } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Dimensions
} from 'react-native';

import { FuncContext } from './HomeScreen'

export default function AddNewPlanComponent() {
  const { handleObjectAddFunc, MAX_TRIP_NAME_LENGTH } = useContext(FuncContext)

  return (
    <TouchableOpacity 
      style={styles.box }
      onPress={ () => Alert.prompt(
        'Create a new travel plan',
        `Maximum ${MAX_TRIP_NAME_LENGTH} characters`,
        (new_trip_name) => handleObjectAddFunc(new_trip_name),
      )}
    >
      <View style={styles.circle}>
        <Text style={styles.arrow}>+</Text>
      </View>
    </TouchableOpacity>
  )
}

const { width } = Dimensions.get('window')
const halfWidth = width / 2
const boxWidth = halfWidth * 0.85
const boxMargin = halfWidth * 0.075

const styles = StyleSheet.create({
  box: {
    width: boxWidth,
    height: boxWidth,
    margin: boxMargin,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,
  },
  circle: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
    borderStyle: 'dotted',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    opacity: 0.7,
  },
  arrow: {
    fontSize: 50,
    fontWeight: '100',
    opacity: 0.7,
  }
})