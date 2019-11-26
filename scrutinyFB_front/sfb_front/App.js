import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './HomeScreen';
import PlayerScreen from './PlayerScreen';
import StatPage from './StatPage.js';
import FullStatPage from './FullStatPage.js';
import LoginPage from './LoginPage';
import FavoritesPage from './components/FavoritesPage.js';
import AddFavoritesPage from './components/AddFavoritesPage.js';
import { AppLoading } from 'expo';

<StatusBar barStyle="default"/>

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Player: {screen: PlayerScreen},
  FullStatPage: {screen: FullStatPage},
  StatPage: {screen: StatPage},
  LoginPage: {screen: LoginPage},
  FavoritesPage: {screen: FavoritesPage},
  AddFavoritesPage: {screen: AddFavoritesPage}
});

const App = createAppContainer(MainNavigator);

export default App;
