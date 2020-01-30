import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default function SinglePlan({ id, tripName }) {
  return (
      <View key={id} style={ styles.box }>
        <Text> {tripName}</Text>
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
  }
})