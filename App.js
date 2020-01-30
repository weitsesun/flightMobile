import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import TravelPlans from './components/TravelPlans'
import { fakeData } from './fakeData'

export default function App() {
  const [ data, setData ] = useState([])

  useEffect( ()=> setData( fakeData ), [data])

  return (
    <>
      <ImageBackground style={styles.container}>
        <TravelPlans data={data}/>
        <TouchableOpacity
          onPress={() => alert('System maintaining')}
        >
          <Text>Current Task: Render Trips</Text>
        </TouchableOpacity>
      </ImageBackground>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
