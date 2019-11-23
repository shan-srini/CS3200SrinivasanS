import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './HomeScreen';
import PlayerScreen from './PlayerScreen';
import StatPage from './StatPage.js';
import LoginPage from './LoginPage'
import { AppLoading } from 'expo';

<StatusBar barStyle="default"/>

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Player: {screen: PlayerScreen},
  StatPage: {screen: StatPage},
  LoginPage: {screen: LoginPage}
});

const App = createAppContainer(MainNavigator);

export default App;
