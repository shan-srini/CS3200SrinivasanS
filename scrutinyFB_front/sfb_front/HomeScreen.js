import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, Image } from 'react-native';
import { Platform } from '@unimodules/core';
import HomeScreenFormat from './components/HomeScreenFormat';
import InputBar from './components/InputBar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const headerWidth = wp('150')
const headerHeight = hp('52')

export default class HomeScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      searchInput: "",
      jsonResponse: [],
      isReady: false,
      allPlayerNames: [],
      playerOptionList: [],
    };
  }

  handleSubmitEditing(name) {
    playerName = name
    const { navigate } = this.props.navigation;
    name == null ?
      navigate('Player', { name: this.state.searchInput })
      :
      navigate('Player', { name: playerName })
  }

    componentDidMount() {
      fetch('https://scrutiny-fb-api.herokuapp.com/getAllPlayerNames')
      .then(res => res.json())
      .then(playerNames => {
        this.setState({ allPlayerNames: playerNames })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  filterPlayerOptionList(searchInput) {
    allList = this.state.allPlayerNames
    toReturn = allList.filter(name => (name[0].toLowerCase().indexOf(searchInput.toLowerCase()) == 0))
    // console.log(toReturn) // works as expected
    this.state.searchInput === "" ? this.setState({ playerOptionList: [] }) : this.setState({ playerOptionList: toReturn })
  }

  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.headerContainer]}>
          <Image
            source={require('./components/MainHeader.png')}
            style={{ width: headerWidth, height: headerHeight }}
          />
        </View>

        <HomeScreenFormat />

        <InputBar
          textChange={searchInput => { this.setState({ searchInput }); this.filterPlayerOptionList(searchInput) }}
          changePageSubmitted={submitRequest => { this.handleSubmitEditing() }}
          changePageFromButton={submitRequestButton => { this.handleSubmitEditing() }}
        />
        <View style={styles.playerListContainer}>
          <ScrollView >
            {this.state.playerOptionList.map((player, playerIndex) => (
              <TouchableOpacity key={playerIndex} style={styles.playerOption} onPress={() => this.handleSubmitEditing(player)}>
                <Text style={styles.playerText}> {player} </Text>
              </TouchableOpacity>
            ))
            }
          </ScrollView>
        </View>
      </View>
    );
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
    top: hp('-15'),
    left: wp('-3.5'),
    width: wp('100%'),
    height: hp('30'),
    backgroundColor: ('transparent')
  },
  playerListContainer: {
    top: hp('47'),
    left: wp('10.5'),
    height: hp('45%'),
  },
  playerOption: {
    height: hp("5"),
    width: wp("79.25"),
    backgroundColor: "white",
    alignContent: "center",
    backgroundColor: ('transparent')
    // backgroundColor: "",
    // alignItems: "center"
  },
  playerText: {
    top: hp(1),
    color: "white",
    fontSize: wp('5')
  },
});

