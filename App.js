import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import 'react-native-gesture-handler'

import HomeScreen from './components/HomeScreen'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />
}

