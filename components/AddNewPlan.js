import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default function AddNewPlan() {
  return (
    <View style={styles.box}>
      <View style={styles.circle}>
        <Text style={styles.arrow}>+</Text>
      </View>
    </View>
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