import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';

import { fakeData } from '../fakeData'
import TravelPlans from './TravelPlans'

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([])
  useEffect(() => setData(fakeData), [data])

  return (
    <>
      <ImageBackground style={styles.container}>
        <TravelPlans data={data} navigation={navigation} />
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
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
