import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { Platform } from '@unimodules/core';
import HomeScreenFormat from './components/HomeScreenFormat';
import InputBar from './components/InputBar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default class HomeScreen extends React.Component {

    constructor () {
        super();
        this.state= { 
          searchInput : "",
          jsonResponse: [],
          loading: false
        };
      }
    

    callApi() {
      this.setState({loading: true})
      fetch('https://scrutiny-fb-api.herokuapp.com/getPlayerByName?playerName='+this.state.searchInput)
      .then(res => res.json())
      .then(player => {
        this.setState({jsonResponse: JSON.parse(player),
        loading: false})
      })
      .catch((error) => {
        console.log("error")
      })
    }

    handleSubmitEditing() { 
      this.setState({loading: true})
      this.callApi()
      const {navigate} = this.props.navigation;
      // if(this.state.jsonResponse.player_name==this.state.searchInput) {
      //   this.setState({loading: false})
        navigate('Player', {name: this.state.searchInput})
      // }
      // else {
      //   alert("Not valid Player Name")
      // }
  }

    static navigationOptions = {
      header: null
    };
    render() {
      
        const {navigate} = this.props.navigation;

        const loading = this.state.loading ? <Text> LOADING </Text> : <Text> </Text>
        
        const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View> </View>

      return (

        <View style={styles.container}>
        {statusbar}
        <StatusBar barStyle="light-content" />

        
        <HomeScreenFormat title="scrutinyFB" version="1.0.0"/> 

      {/* <Text> {loading} </Text> */}

        <InputBar 
            textChange={searchInput => this.setState({ searchInput })}
            changePageSubmitted={submitRequest => {this.callApi(); this.handleSubmitEditing()}}
            changePageFromButton={submitRequestButton => {this.callApi(); this.handleSubmitEditing()}}
        />
      </View>
      );
    }
  }

  const mainBackgroundColor = '#8E8E8E';
  const statusBarColor = '#566347';

  const styles = StyleSheet.create({
    container: {
      backgroundColor: mainBackgroundColor,
      flex: 1
    },
    statusbar: {
      backgroundColor: statusBarColor,
      height: hp('5%')
    },
  });