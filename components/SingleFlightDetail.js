import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import { getTravelDate } from './getTravelDate'


export default function SingleFlightDetail({ navigation }) {
  const flight = navigation.getParam('flight')
  const [month, day, year] = getTravelDate(flight.scheduled)

  return (
    <View style={styles.flightDetailContainer}>
      <View style={styles.dateContainer}>
        <Text style={{fontSize: 17}}>{`${month}. ${day}, ${year}`}</Text>
      </View>

      <View style={styles.locationContainer}>
        <View style={styles.locationCircle}>
          <Text style={styles.locationFont}>{flight.from}</Text>
        </View>
        <Text style={{fontSize: 15}}>▪︎ ▪︎ ▪︎ ▪︎ ▪︎ ▪︎</Text>
        <View style={styles.locationCircle}>
          <Text style={styles.locationFont}>{flight.to}</Text>
        </View>
      </View>

      <View style={styles.dateContainer}>
        <Text style={{fontSize: 17}}>{flight.kind}</Text>
      </View>

      <View style={styles.boardingInfoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoHeader}>Terminal</Text>
          <View style={styles.infoBody}>
            <Text style={styles.infoFont}>{`${flight.terminal}`}</Text>
          </View>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoHeader}>Gate</Text>
          <View style={styles.infoBody}>
            <Text style={styles.infoFont}>{`${flight.gate}`}</Text>
          </View>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoHeader}>Flight</Text>
          <View style={styles.infoBody}>
            <Text style={styles.infoFont}>{`${flight.flightNumber}`}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  flightDetailContainer: {
    width: '100%', 
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  dateContainer:{
    width: '100%',
    paddingTop: 10,
    paddingHorizontal: '5%'
  },
  locationContainer : {
    height: 100,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  locationCircle: {
    height: 100,
    width: 100,
    borderWidth: 2,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  locationFont: {
    fontSize: 30,
  },
  boardingInfoContainer: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: '5%',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  infoBox: {
    width: 104,
    height: 66,
    borderStyle: 'dotted',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'relative'
  },
  infoHeader: {
    position: 'absolute',
    top: -10,
    fontSize: 17,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  infoBody: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoFont: {
    fontSize: 30,
    fontWeight: 'bold'
  }
})