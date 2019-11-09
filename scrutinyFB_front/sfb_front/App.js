import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Platform } from '@unimodules/core';
import Header from './components/Header';
import InputBar from './components/InputBar';

export default class App extends React.Component {
  constructor () {
    super();

  }

  render() {
    const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></ 
    View>

    return (
      <View style={styles.container}>
        {statusbar}
        
        <Header title="scrutinyFB" />

        <InputBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  statusbar: {
    backgroundColor: '#d3d3d3',
    height: 40
  }
});
