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
      <View style={styles.header}></View>
      <ImageBackground style={styles.container}>
        <TravelPlans data={data}/>
        {/* <TouchableOpacity
          onPress={() => alert('System maintaining')}
        >
          <Text>Current Task: Render Trips</Text>
        </TouchableOpacity> */}
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  header:{
    height: 100,
    width: '100%',
    backgroundColor: 'rgb(10,150,140)'
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
});
