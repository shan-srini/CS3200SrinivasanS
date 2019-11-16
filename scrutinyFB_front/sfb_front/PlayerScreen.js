import React from 'react';
import { StyleSheet, Text, View, Picker, StatusBar } from 'react-native';
import PlayerScreenFormat from './components/PlayerScreenFormat';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Platform } from '@unimodules/core';
import InputBar2 from './components/InputBar2';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class PlayerScreen extends React.Component {
  
  constructor () {
    super();
    this.state= { 
      year : '',
      comparisonType : '',
      nameState : '',
      jsonResponse: [],
      searchInput : "",
      compareOnePlayer: true,
      fullLog : false,
      homeLog : false,
      awayLog : false,
    };

    updateYear = (year) => {
      this.setState({ year: year })
    }

    updateComparisonType = (comparisonType) => {
      this.setState({ comparisonType: comparisonType })
    }
  }

  updateLog(buttonType) {
    this.setState({homeLog: false, 
      awayLog: false, 
      fullLog: false})
    if(buttonType == 'full') {
      this.setState({fullLog: true})
    }
    if(buttonType == 'away') {
      this.setState({awayLog: true})
    }
    if(buttonType == 'home') {
      this.setState({homeLog: true})
    }
  }

    static navigationOptions = {
      header: null
    };

    componentDidMount() {
      var {params} = this.props.navigation.state;

      this.setState({nameState : params.name});
      fetch('https://scrutiny-fb-api.herokuapp.com/getPlayerByName?playerName='+params.name)
      .then((response) => response.json())
      .then(player => {
        this.setState({jsonResponse: JSON.parse(player)})
      })
      .catch((error) => {
        console.log(error)
      });
    }

    goHome() {
      const {navigate} = this.props.navigation;
      navigate('Home');
    }

    goToStats() {
      const {navigate} = this.props.navigation;
      if(this.state.compareOnePlayer)
      navigate('StatPage', {player1: this.state.jsonResponse, logStatus: 'full'});
    }

    // return age given a Date of birth string
    calcAge(dateString) {
      var birthday = +new Date(dateString);
      return ~~((Date.now() - birthday) / (31557600000));
    }

    render() {

        var {params} = this.props.navigation.state;


        return (

        <View style={styles.container}>

            <PlayerScreenFormat 
              displayPlayerName={this.state.jsonResponse.player_name}
              p_team={this.state.jsonResponse.current_team}
              p_age={this.calcAge(this.state.jsonResponse.player_dob)}
              p_weight={this.state.jsonResponse.player_weight}
              p_height={this.state.jsonResponse.player_height}
              p_pos={this.state.jsonResponse.player_position}

              goBackHome={goBackRequest => {this.goHome()}}
              goStatPage={goStatPageRequest => {this.goToStats()}}
            />

            <InputBar2 
              textChange={searchInput => this.setState({ searchInput })}
           />

          <Picker
              
              selectedValue={this.state.year}
              style={{position: 'absolute'}}

              onValueChange={updateYear}
              
              itemStyle={styles.yearStyle}
            >
                    <Picker.Item label="2019" value="2019" />
                    <Picker.Item label="2018" value="2018" />
            </Picker>
            <Picker
              
              selectedValue={this.state.comparisonType}
              style={{position: 'absolute'}}

              onValueChange={updateComparisonType}
              
              itemStyle={styles.comparisonTypeStyle}
            >
                    <Picker.Item label="Direct Comparison" value="Direct Comparison" />
                    <Picker.Item label="Player Split" value="Player Split" />
                    <Picker.Item label="Against Team" value="Against Team" />
            </Picker>
            <View style={styles.wholeButtonContainer}>
                    <View style={styles.fullLogContainer}>
                        <TouchableHighlight onPress={()=>this.updateLog('full')} underlayColor='#6e6e6e' style={(this.state.fullLog) ? [styles.fullLogHighlighted] : [styles.fullLog]}>
                            <Text style={[styles.dropTitleHeaders]}>
                                Full Game Log
                                </Text> 
                        </TouchableHighlight>
                    </View>
                    <View style={styles.homeLogContainer}>
                        <TouchableHighlight onPress={() => this.updateLog('home')} underlayColor='#6e6e6e' style={(this.state.homeLog) ? [styles.homeLogHighlighted] : [styles.homeLog]}>
                            <Text style={[styles.dropTitleHeaders]}>
                                Home Game Log
                                </Text> 
                        </TouchableHighlight>
                    </View>
                    <View style={styles.awayLogContainer}>
                        <TouchableHighlight onPress={()=>this.updateLog('away')} underlayColor='#6e6e6e' style={(this.state.awayLog) ? [styles.awayLogHighlighted] : [styles.awayLog]}>
                            <Text style={[styles.dropTitleHeaders]}>
                                Away Game Log
                            </Text> 
                        </TouchableHighlight>
                    </View>
                </View>
        </View>
      );
    }
  }

  const statusBarColor = '#F1F2EB';
  const color1 = '#566347';
  const color2 = '#4B4A49';
  const color3 = '#A4C2A5';
  const lightGray = '#8E8E8E';
  const styles = StyleSheet.create({
    statusbar: {
      backgroundColor: statusBarColor,
      height: hp('5%')
    },
    container: {
      backgroundColor: 'gray',
      flex: 1
    },
    yearStyle: {
      position: 'absolute',
      backgroundColor: 'white',
      top: hp('66.5'),
      left: wp('8.5'),
      color: 'black',
      width: wp('27'),
      height: hp('12'),
      fontSize: wp('6.5'),
      fontWeight: '600',
      borderColor: '#a9a9a9',
      borderWidth: 3
    },
    comparisonTypeStyle: {
      position: 'absolute',
      backgroundColor: 'white',
      top: hp('66.5'),
      left: wp('45'),
      color: 'black',
      width: wp('47'),
      height: hp('12'),
      fontSize: wp('5'),
      fontWeight: '600',
      borderColor: '#a9a9a9',
      borderWidth: 3
    },
    wholeButtonContainer: {
      position: 'absolute',
      backgroundColor: color2,
      height: hp('10'),
      width: wp('100'),
      top: hp('32.2'),
      borderColor: 'black',
      borderWidth: 1,
  },
  fullLogContainer: {
      position: 'absolute',
      backgroundColor: lightGray,
      height: hp('4.6'),
      width: wp('98.4'),
      top: hp('0.2'),
      left: wp('0.6'),
      borderColor: 'black',
      borderWidth: 1,
  },
  homeLogContainer: {
      position: 'absolute',
      backgroundColor: lightGray,
      height: hp('4.6'),
      width: wp('49'),
      bottom: hp('0.2'),
      left: wp('0.6'),
      borderColor: 'black',
      borderWidth: 1,
  },
  awayLogContainer: {
      position: 'absolute',
      backgroundColor: lightGray,
      height: hp('4.6'),
      width: wp('49'),
      bottom: hp('0.2'),
      left: wp('50'),
      borderColor: 'black',
      borderWidth: 1,
  },
  fullLog: {
      alignContent: 'center',
      alignItems: 'center',
      width: wp('98'),
      height: hp('4.4'),
      backgroundColor: lightGray
  },
  fullLogHighlighted: {
    alignContent: 'center',
    alignItems: 'center',
    width: wp('98'),
    height: hp('4.4'),
    backgroundColor: '#6A6A6A'
},
  homeLog: {
      alignContent: 'center',
      alignItems: 'center',
      width: wp('49'),
      height: hp('4.4'),
      backgroundColor: lightGray
  },
  homeLogHighlighted: {
    alignContent: 'center',
    alignItems: 'center',
    width: wp('49'),
    height: hp('4.4'),
    backgroundColor: '#6A6A6A'
},
  awayLog: {
      alignContent: 'center',
      alignItems: 'center',
      width: wp('49'),
      height: hp('4.4'),
      backgroundColor: lightGray
  },
  awayLogHighlighted: {
    alignContent: 'center',
    alignItems: 'center',
    width: wp('49'),
    height: hp('4.4'),
    backgroundColor: '#6A6A6A'
},
  dropTitleHeaders: {
      color: 'white',
      fontSize: 12,
      top: hp('0.5'),
      fontSize: wp('5'),
      fontWeight: ('500')
  },
  });