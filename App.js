import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const backgroundURL = 'https://wallpaperaccess.com/full/797185.png'

export default function App() {
  
  return (
    <>
      <ImageBackground
        source={{ uri: backgroundURL }}
        style={styles.container}
      >
        <Text
          style={styles.header}
        >
          Search Your Flight
          </Text>
        <TouchableOpacity
          onPress={() => alert('System maintaining')}
          style={styles.welcomeButton}
        >
          <Text style={styles.welcomeButtonText}>Let's Go!</Text>
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
  },
  header: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  welcomeButton: {
    backgroundColor: 'rgb(200, 200, 90)',
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  welcomeButtonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold'
  }
});
