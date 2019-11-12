import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './HomeScreen';
import PlayerScreen from './PlayerScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Player: {screen: PlayerScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
