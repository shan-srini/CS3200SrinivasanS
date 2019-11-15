import React from 'react';
import { StyleSheet, Text, View, Picker, StatusBar } from 'react-native';
import PlayerScreenFormat from './components/PlayerScreenFormat';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Platform } from '@unimodules/core';
import InputBar2 from './components/InputBar2';

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
    };

    updateYear = (year) => {
      this.setState({ year: year })
    }

    updateComparisonType = (comparisonType) => {
      this.setState({ comparisonType: comparisonType })
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

        //const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View> </View>
        var {params} = this.props.navigation.state;


        return (

        <View style={styles.container}>
          <StatusBar barStyle="light-content" />


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
        </View>
      );
    }
  }

  const statusBarColor = '#F1F2EB';

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
    }
  });