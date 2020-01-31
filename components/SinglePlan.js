import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default function SinglePlan({ tripName }) {
  return (
      <TouchableOpacity 
        style={ styles.box }
        onPress={() => alert('switch to trip')}
      >
        <Text> {tripName}</Text>
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
    alignItems: 'flex-end',
    flexDirection: 'row',
    // backgroundColor: 'red',
  }
})