import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './HomeScreen';
import PlayerScreen from './PlayerScreen';
import StatPage from './StatPage.js';
import FullStatPage from './FullStatPage.js';

import { AppLoading } from 'expo';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Player: {screen: PlayerScreen},
  FullStatPage: {screen: FullStatPage},
  StatPage: {screen: StatPage}
});

const App = createAppContainer(MainNavigator);

export default App;
