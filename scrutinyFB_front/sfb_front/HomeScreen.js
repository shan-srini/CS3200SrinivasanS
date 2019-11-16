import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, Image } from 'react-native';
import { Platform } from '@unimodules/core';
import HomeScreenFormat from './components/HomeScreenFormat';
import InputBar from './components/InputBar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { AppLoading } from 'expo';

const headerWidth = wp('150')
const headerHeight = hp('52')

export default class HomeScreen extends React.Component {

    constructor () {
        super();
        this.state= { 
          searchInput : "",
          jsonResponse: [],
          loading: false,
          isReady: false,
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
      if (!this.state.isReady) {
        return (
          <AppLoading
            startAsync={this._cacheResourcesAsync}
            onFinish={() => this.setState({ isReady: true })}
            onError={console.warn}
          />
        ); }
    

      return (

        <View style={styles.container}>

      <View style={[styles.headerContainer]}>
        <Image 
          source={require('./components/MainHeader.png')} 
          style={{ width: headerWidth, height: headerHeight  }}
        />
      </View>
        
        <HomeScreenFormat /> 

      {/* <Text> {loading} </Text> */}

        <InputBar 
            textChange={searchInput => this.setState({ searchInput })}
            changePageSubmitted={submitRequest => {this.callApi(); this.handleSubmitEditing()}}
            changePageFromButton={submitRequestButton => {this.callApi(); this.handleSubmitEditing()}}
        />
      </View>
      );
    }
    async _cacheResourcesAsync() {
      const images = [require('./components/MainHeader.png')];
  
      const cacheImages = images.map(image => {
        return asset.fromModule(image).downloadAsync();
      }); 
      return Promise.all(cacheImages);
    }
  }

  const mainBackgroundColor = '#c2c2c2';
  // const mainBackgroundColor = 'black';

  const styles = StyleSheet.create({
    container: {
      backgroundColor: mainBackgroundColor,
      flex: 1
    },
    headerContainer: {
      position: 'absolute',
      alignContent: 'center',
      alignItems: 'center',
      top:hp('-15'),
      left:wp('-3.5'),
      width: wp('100%'),
      height: hp('30'),
      backgroundColor: ('transparent')
  },
  });

