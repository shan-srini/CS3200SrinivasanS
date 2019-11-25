import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, Image } from 'react-native';
import { Platform } from '@unimodules/core';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native-gesture-handler';
import StatTableComponent from './StatTableComponent';


const headerWidth = wp('150')
const headerHeight = hp('52')
const backButtonHeight = hp('4')
const backButtonWidth = wp('5.2')

export default class FullStatPage extends React.Component {

    constructor () {
        super();
        this.state = {
          displayPlayerSwitch: true,
          player2: [],
        }
    }

    static navigationOptions = {
      header: null
    };

    goBackToPlayer() {
        const {navigate} = this.props.navigation;
        navigate('Player');
    }

    componentDidMount() {
      var {params} = this.props.navigation.state;
      fetch('https://scrutiny-fb-api.herokuapp.com/getPlayerByName?playerName='+params.player2Name)
      .then((response) => response.json())
      .then(player => {
        this.setState({player2: JSON.parse(player)})
      })
      .catch((error) => {
        console.log(error)
      });
    }
    
    render() {
      var {params} = this.props.navigation.state;
        return (
        <View style={styles.container}>
          <View style={styles.backButtonContainer}>
            <TouchableOpacity style={styles.backButton}
                onPress={() => this.goBackToPlayer()}>
                    <Image
                        source={require('./components/backButtonArrow.png')}  
                        style={{ width: backButtonWidth, height: backButtonHeight  }}
                    />
            </TouchableOpacity>
          </View>

          { this.state.displayPlayerSwitch ?
          <StatTableComponent player={params.player1} logStatus={params.logStatus}/>
          :
          <StatTableComponent player={this.state.player2} logStatus={params.logStatus} />
          }

          <View style={styles.playerButtonContainer}>
            <TouchableHighlight style={styles.playerNameBox1} onPress={() => this.setState((prevState) => { return {displayPlayerSwitch: !prevState.displayPlayerSwitch}})}>
              <Text style={[styles.playerNameBoxText]}>
                   {params.player1.player_name}
              </Text> 
            </TouchableHighlight>
            <TouchableHighlight style={styles.playerNameBox2} onPress={() => this.setState((prevState) => { return {displayPlayerSwitch: !prevState.displayPlayerSwitch}})}>
              <Text style={[styles.playerNameBoxText]}>
                  {params.player2Name}
               </Text> 
             </TouchableHighlight>
          </View>
        </View>
      );
    }
  }

  const mainBackgroundColor = 'white';
  // const mainBackgroundColor = 'black';

  const styles = StyleSheet.create({
    container: {
      backgroundColor: mainBackgroundColor,
      flex: 1
    },
    backButton: {
      width: wp('8'),
      height: hp('6'),
    },
    backButtonContainer: {
      position: 'absolute',
      top: hp('5.5'),
      left: wp('5'),
    },
    playerButtonContainer: {
      flexDirection: 'row', 
      position: 'absolute',
      top: hp('90'),
      width: wp('100'),
      height: hp('5'),
      backgroundColor: 'transparent',
      borderColor: 'black',
      borderWidth: 1,
    },
    playerNameBox1: {
      alignContent:'center',
      alignItems:'center',
      width: wp('49.75'),
      height: hp('4.75'),
      backgroundColor: '#B0B0B0',
      borderColor: 'black',
      borderWidth: 0.5,
    },
    playerNameBox2: {
      alignContent:'center',
      alignItems:'center',
      width: wp('49.75'),
      height: hp('4.75'),
      backgroundColor: '#B0B0B0',
      borderColor: 'black',
      borderWidth: 0.5,
    },
    playerNameBoxText: {
      fontSize: wp('4'),
      top: hp('1')
    }
  });

