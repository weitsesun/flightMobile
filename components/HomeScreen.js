import React, { useState, useEffect, useContext, createContext} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';

import { fakeData } from '../fakeData'
import TravelPlans from './TravelPlans'

export const DeleteFuncContext = createContext(null)

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([])
  useEffect(() => setData(fakeData), [])

  /** 
   * Function for delete trip or flight
   * @param trip_name(string)
   * @param flight_id(optional)
   */
  const handleObjectDeleteFunc = (trip_name, flight_id=null) => {
    if(!flight_id) {
      let newData = data.filter(trip => {
        return trip.tripName !== trip_name
      })
      setData(newData)
    } else {
      alert('flight_id delete function is not built')
    }
    return
  }

  return (
    <DeleteFuncContext.Provider value={{handleObjectDeleteFunc}}>
      <ImageBackground style={styles.container}>
        <TravelPlans navigation={navigation} data={data} />
      </ImageBackground>
    </DeleteFuncContext.Provider>
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
