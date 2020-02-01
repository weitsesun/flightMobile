import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import 'react-native-gesture-handler'

import HomeScreen from './components/HomeScreen'
import FlightsOverview from './components/FlightsOverview'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    FlightsOverview: FlightsOverview
  },
  {
    initialRouteParams: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />
}

