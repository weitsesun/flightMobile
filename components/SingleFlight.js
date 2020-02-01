import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

const getTravelDate = (timeObject) => {
  const monthTable = {
    0: 'Jan', 1: 'Feb', 2: 'Mar',
    3: 'Apr', 4: 'May', 5: 'Jun',
    6: 'Jul', 7: 'Aug', 8: 'Sep',
    9: 'Oct', 10: 'Nov', 11: 'Dec'
  }

  let month, day, year
  month = monthTable[timeObject.getMonth()]
  day = timeObject.getDate()
  year = timeObject.getFullYear()
  return [month, day, year]
}

export default function SingleFlight({ flight }) {
  const [month, day, year] = getTravelDate(flight.scheduled)

  return (
    <View style={styles.flightContainer}>
      <View style={styles.dateContainer}>
        <Text>{`${month}. ${day}`}</Text>
        <Text>{year}</Text>
      </View>
      <View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  flightContainer: {
    width: '90%',
    height: 80,
    marginHorizontal: '5%',
    marginTop: 15,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
  },
  dateContainer: {
    height: 80,
    width: '20%',
    borderRightWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

