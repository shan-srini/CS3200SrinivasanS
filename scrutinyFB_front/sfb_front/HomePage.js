import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Platform } from '@unimodules/core';
import Header from './components/Header';
import InputBar from './components/InputBar';

export default class HomeScreen extends React.Component {

    constructor () {
        super();
        this.state= { searchInput : ""};
      }

    static navigationOptions = {
      title: 'Player Page',
    };
    render() {
        const {navigate} = this.props.navigation;
        
        const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></ 
        View>

      return (
        <View style={styles.container}>
        {statusbar}
        
        <Header title="scrutinyFB" />

        <InputBar textChange={searchInput => this.setState({ searchInput })}/>

        <Text style={styles.version}>v 1.0.0</Text>
        <Text>{this.state.searchInput}</Text>
        <Button
          title="Go to player screen"
          onPress={() => navigate('Player', {name: 'Tom Brady'})}
        />
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
    },
    version: {
      top: 630,
      left: 340,
      color: 'white',
      fontSize: 15,
      fontWeight: '500'
    }
  });