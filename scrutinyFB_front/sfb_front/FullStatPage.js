import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, Image } from 'react-native';
import { Platform } from '@unimodules/core';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FlatList, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native-gesture-handler';
import StatTableComponent from './StatTableComponent';

const headerWidth = wp('150')
const headerHeight = hp('52')
const backButtonHeight = hp('4')
const backButtonWidth = wp('5.2')

export default class FullStatPage extends React.Component {

  constructor(props) {
    super(props);
    var { params } = this.props.navigation.state
    this.getColor1 = params.getColor1.bind(this)
    this.getColor2 = params.getColor2.bind(this)
    this.state = {
      displayPlayerSwitch: true,
      player2Info: [],
      p1AllData: [],
      p2AllData: [],
    }
  }

  static navigationOptions = {
    header: null
  };

  goBackToPlayer() {
    const { navigate } = this.props.navigation;
    navigate('Player');
  }

  componentDidMount() {
    const { navigate } = this.props.navigation;
    var { params } = this.props.navigation.state;
    fetch('https://scrutiny-fb-api.herokuapp.com/getPlayerByName?playerName=' + params.player2Name)
      .then((response) => response.json())
      .then(player => {
        this.setState({ player2Info: JSON.parse(player) })
        this.fetchData()
      })
      .catch((error) => {
        console.log(error)
        alert("Unable to find " + params.player2Name)
        navigate("Player")
      });
  }

  fetchData() {
    const { navigate } = this.props.navigation;
    var { params } = this.props.navigation.state
    var formData1 = new FormData()
    formData1.append('playerID', params.player1.player_id)
    formData1.append('home_or_away', params.logStatus)
    formData1.append('year', params.year)

    var formData2 = new FormData()
    formData2.append('playerID', this.state.player2Info.player_id)
    formData2.append('home_or_away', params.logStatus)
    formData2.append('year', params.year)

    //player1
    fetch('https://scrutiny-fb-api.herokuapp.com/getStats', {
      method: 'POST',
      body: formData1
    })
      .then((response) => response.json())
      .then(stats => {
        this.setState({ p1AllData: JSON.parse(stats), })
        //  console.log((JSON.parse(stats)[0])["rushing_yds"])
        if (this.state.p1AllData.length < 1) {
          alert("Unable to find stats for " + params.player1.player_name)
          navigate("Player")
        }
      })
      .catch((error) => {
        console.log(error)
      })
    //player 2
    fetch('https://scrutiny-fb-api.herokuapp.com/getStats', {
      method: 'POST',
      body: formData2
    })
      .then((response) => response.json())
      .then(stats => {
        this.setState({ p2AllData: JSON.parse(stats), })
        //  console.log((JSON.parse(stats)[0])["rushing_yds"])
        if (this.state.p2AllData.length < 1) {
          alert("Unable to find stats for " + this.state.player2Info.player_name)
          navigate("Player")
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    var { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {this.state.displayPlayerSwitch ?
          <StatTableComponent
            player={params.player1}
            allStats={this.state.p1AllData}
            chosenColor={this.getColor1(params.player1.current_team)}
            chosenColor2={this.getColor2(params.player1.current_team)}
            chosenColorBottom={this.getColor1(params.player1.current_team)}
          />
          :
          <StatTableComponent
            player={this.state.player2Info}
            allStats={this.state.p2AllData}
            chosenColor={this.getColor1(this.state.player2Info.current_team)}
            chosenColor2={this.getColor2(this.state.player2Info.current_team)}
            chosenColorBottom={this.getColor1(this.state.player2Info.current_team)}
          />
        }

        {/* <View style={styles.bottom}/> */}
        <View style={styles.playerButtonContainer}>
          <TouchableHighlight style={styles.playerNameBox1} underlayColor='#6e6e6e' onPress={() => this.setState({ displayPlayerSwitch: true })}>
            <Text style={[styles.playerNameBoxText]}>
              {params.player1.player_name}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.playerNameBox2} underlayColor='#6e6e6e' onPress={() => this.setState({ displayPlayerSwitch: false })}>
            <Text style={[styles.playerNameBoxText]}>
              {params.player2Name}
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity style={styles.backButton}
            onPress={() => this.goBackToPlayer()}>
            <Image
              source={require('./components/backButtonArrow.png')}
              style={{ width: backButtonWidth, height: backButtonHeight }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mainBackgroundColor = 'white';
playerNameTop = hp('1')
playerNameTop = (isIPad) ? hp('0.5') : playerNameTop

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
    alignContent: 'center',
    alignItems: 'center',
    width: wp('49.75'),
    height: hp('4.75'),
    backgroundColor: '#B0B0B0',
    borderColor: 'black',
    borderWidth: 0.5,
  },
  playerNameBox2: {
    alignContent: 'center',
    alignItems: 'center',
    width: wp('49.75'),
    height: hp('4.75'),
    backgroundColor: '#B0B0B0',
    borderColor: 'black',
    borderWidth: 0.5,
  },
  playerNameBoxText: {
    fontSize: wp('4'),
    top: playerNameTop
  },
  bottom: {
    position: 'absolute',
    width: wp('100'),
    height: hp('20'),
    top: hp('90'),
    backgroundColor: '#4B4A49'
  },
});

