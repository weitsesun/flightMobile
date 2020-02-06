import React, { useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default function AddNewPlanComponent({ deleteMode }) {
  
  return (
    <TouchableOpacity 
      style={{...styles.box, opacity: `${deleteMode ? 0.2 : 1}`}}
      onPress={ () => alert('TODO: add new travel plan')}
    >
      <View style={styles.circle}>
        <Text style={styles.arrow}>+</Text>
      </View>
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
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
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
  }
})