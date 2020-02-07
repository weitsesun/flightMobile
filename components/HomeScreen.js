import React, { useState, useEffect, useContext, createContext} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';

import { fakeData } from '../fakeData'
import TravelPlans from './TravelPlans'

export const FuncContext = createContext(null)

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

  const handleObjectAddFunc = (new_trip_name, new_flight=null) => {
    if(!new_flight) {
      // handle empty name
      if(!new_trip_name) {
        alert('Name cannot be empty')
        return
      }
      // handle oversized name
      if (new_trip_name.length > 15) {
        alert('Invalid: Over 15 characters')
        return
      }
      // handle duplicated name
      for(let trip of data) {
        if(trip.tripName === new_trip_name) {
          alert('This name is in use.')
          return
        }
      }
      // add new trip name to the data
      let newTrip = {
        tripName: new_trip_name,
        flights: []
      }
      setData(prevData => [
        ...prevData,
        newTrip,
      ])
    } else {
      alert('TODO: add new flight')
    }
    return
  }

  return (
    <FuncContext.Provider value={{handleObjectDeleteFunc, handleObjectAddFunc}}>
      <ImageBackground style={styles.container}>
        <TravelPlans navigation={navigation} data={data} />
      </ImageBackground>
    </FuncContext.Provider>
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
