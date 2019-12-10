import React from 'react';
import { StyleSheet, Text, View, Picker, StatusBar } from 'react-native';
import PlayerScreenFormat from './components/PlayerScreenFormat';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Platform } from '@unimodules/core';
import InputBar2 from './components/InputBar2';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class PlayerScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      year: 2019,
      comparisonType: "Player",
      nameState: '',
      curPlayerInfo: [],
      player2: [],
      selectP2Input: "",
      fullLog: true,
      homeLog: false,
      awayLog: false,
    };

    updateYear = (year) => {
      this.setState({ year: year })
    }

    updateComparisonType = (comparisonType) => {
      this.setState({ comparisonType: comparisonType })
    }
  }

  updateLog(buttonType) {
    this.setState({
      homeLog: false,
      awayLog: false,
      fullLog: false
    })
    if (buttonType == 'full') {
      this.setState({ fullLog: true })
    }
    if (buttonType == 'away') {
      this.setState({ awayLog: true })
    }
    if (buttonType == 'home') {
      this.setState({ homeLog: true })
    }
  }

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    var { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    this.setState({ nameState: params.name });
    fetch('https://scrutiny-fb-api.herokuapp.com/getPlayerByName?playerName=' + params.name)
      .then((response) => response.json())
      .then(player => {
        this.setState({ curPlayerInfo: JSON.parse(player) })
      })
      .catch((error) => {
        alert("Unable to find " + params.name)
        navigate("Home")
      });
  }

  goHome() {
    const { navigate } = this.props.navigation;
    navigate('Home');
  }

  chooseLog() {
    if (this.state.fullLog)
      return 'full'
    if (this.state.awayLog)
      return 'away'
    if (this.state.homeLog)
      return 'home'
  }

  goToStats() {
    const { navigate } = this.props.navigation;
    if (this.state.comparisonType === "Player")
      navigate('StatPage', {
        player: this.state.curPlayerInfo,
        logStatus: this.chooseLog(),
        year: this.state.year,
        chosenColor: this.getColor1(this.state.curPlayerInfo.current_team),
        chosenColor2: this.getColor2(this.state.curPlayerInfo.current_team)
      });
    else if (this.state.comparisonType === "Comparison") {
      navigate('FullStatPage', {
        player1: this.state.curPlayerInfo,
        player2Name: this.state.selectP2Input,
        year: this.state.year,
        logStatus: this.chooseLog(),
        getColor1: this.getColor1,
        getColor2: this.getColor2
      })
    }
    else if (this.state.comparisonType === "Splits")
      navigate('SplitsStatPage', {
        player: this.state.curPlayerInfo,
        playerName: this.state.curPlayerInfo.player_name,
        playerSplitName: this.state.selectP2Input,
        logStatus: this.chooseLog(),
        year: this.state.year,
        getColor1: this.getColor1,
        getColor2: this.getColor2
      });
  }

  // return age given a Date of birth string
  calcAge(dateString) {
    var birthday = +new Date(dateString);
    return ~~((Date.now() - birthday) / (31557600000));
  }

  pickHelmet(team) {
    const helmets = {
      "Los Angeles Rams": require("./components/Helmets/RamsHelmet.png"),
      "New York Giants": require("./components/Helmets/GiantsHelmet.png"),
      "Carolina Panthers": require("./components/Helmets/PanthersHelmet.png"),
      "New Orleans Saints": require("./components/Helmets/SaintsHelmet.png"),
      "Kansas City Chiefs": require("./components/Helmets/ChiefsHelmet.png"),
      "Dallas Cowboys": require("./components/Helmets/CowboysHelmet.png"),
      "Green Bay Packers": require("./components/Helmets/PackersHelmet.png"),
      "Houston Texans": require("./components/Helmets/TexansHelmet.png"),
      "Atlanta Falcons": require("./components/Helmets/FalconsHelmet.png"),
      "Los Angeles Chargers": require("./components/Helmets/ChargersHelmet.png"),
      "Pittsburgh Steelers": require("./components/Helmets/SteelersHelmet.png"),
      "San Francisco 49ers": require("./components/Helmets/49ersHelmet.png"),
      "Tampa Bay Buccaneers": require("./components/Helmets/BucsHelmet.png"),
      "Philadelphia Eagles": require("./components/Helmets/EaglesHelmet.png"),
      "Minnesota Vikings": require("./components/Helmets/VikingsHelmet.png"),
      "Indianapolis Colts": require("./components/Helmets/ColtsHelmet.png"),
      "Cleveland Browns": require("./components/Helmets/BrownsHelmet.png"),
      "Cincinnati Bengals": require("./components/Helmets/BengalsHelmet.png"),
      "Arizona Cardinals": require("./components/Helmets/CardinalsHelmet.png"),
      "New England Patriots": require("./components/Helmets/PatriotsHelmet.png"),
      "Denver Broncos": require("./components/Helmets/BroncosHelmet.png"),
      "Tennessee Titans": require("./components/Helmets/TitansHelmet.png"),
      "Seattle Seahawks": require("./components/Helmets/SeahawksHelmet.png"),
      "Washington Redskins": require("./components/Helmets/RedskinsHelmet.png"),
      "Chicago Bears": require("./components/Helmets/BearsHelmet.png"),
      "Detroit Lions": require("./components/Helmets/LionsHelmet.png"),
      "Oakland Raiders": require("./components/Helmets/RaidersHelmet.png"),
      "Buffalo Bills": require("./components/Helmets/BillsHelmet.png"),
      "New York Jets": require("./components/Helmets/JetsHelmet.png"),
      "Miami Dolphins": require("./components/Helmets/DolphinsHelmet.png"),
      "Baltimore Ravens": require("./components/Helmets/RavensHelmet.png"),
      "Jacksonville Jaguars": require("./components/Helmets/JaguarsHelmet.png"),
    };
    return helmets[team]
  }

  getColor1(team) {
    const colors = {
      "Los Angeles Rams": '#002A5E',
      "New York Giants": '#0B2265',
      "Carolina Panthers": '#0085CA',
      "New Orleans Saints": '#D3BC8D',
      "Kansas City Chiefs": '#E31837',
      "Dallas Cowboys": '#869397',
      "Green Bay Packers": '#203731',
      "Houston Texans": '#03202F',
      "Atlanta Falcons": '#A71930',
      "Los Angeles Chargers": '#002A5E',
      "Pittsburgh Steelers": '#FFB612',
      "San Francisco 49ers": '#AA0000',
      "Tampa Bay Buccaneers": '#D50A0A',
      "Philadelphia Eagles": '#004C54',
      "Minnesota Vikings": '#4F2683',
      "Indianapolis Colts": '#002C5F',
      "Cleveland Browns": '#311D00',
      "Cincinnati Bengals": '#FB4F14',
      "Arizona Cardinals": '#97233F',
      "New England Patriots": '#002244',
      "Denver Broncos": '#002244',
      "Tennessee Titans": '#0C2340',
      "Seattle Seahawks": '#002244',
      "Washington Redskins": '#773141',
      "Chicago Bears": '#0B162A',
      "Detroit Lions": '#0076B6',
      "Oakland Raiders": '#000000',
      "Buffalo Bills": '#00338D',
      "New York Jets": '#125740',
      "Miami Dolphins": '#008E97',
      "Baltimore Ravens": '#241773',
      "Jacksonville Jaguars": '#D7A22A',
    };
    return colors[team]
  }

  getColor2(team) {
    const colors = {
      "Los Angeles Rams": '#FFFFFF',
      "New York Giants": '#A71930',
      "Carolina Panthers": '#101820',
      "New Orleans Saints": '#101820',
      "Kansas City Chiefs": '#FFB81C',
      "Dallas Cowboys": '#041E42',
      "Green Bay Packers": '#FFB612',
      "Houston Texans": '#A71930',
      "Atlanta Falcons": '#000000',
      "Los Angeles Chargers": '#FFC20E',
      "Pittsburgh Steelers": '#101820',
      "San Francisco 49ers": '#B3995D',
      "Tampa Bay Buccaneers": '#34302B',
      "Philadelphia Eagles": '#ACC0C6',
      "Minnesota Vikings": '#FFC62F',
      "Indianapolis Colts": '#A2AAAD',
      "Cleveland Browns": '#FF3C00',
      "Cincinnati Bengals": '#000000',
      "Arizona Cardinals": '#FFB612',
      "New England Patriots": '#C60C30',
      "Denver Broncos": '#FB4F14',
      "Tennessee Titans": '#418FDE',
      "Seattle Seahawks": '#69BE28',
      "Washington Redskins": '#FFB612',
      "Chicago Bears": '#C83803',
      "Detroit Lions": '#B0B7BC',
      "Oakland Raiders": '#A5ACAF',
      "Buffalo Bills": '#C60C30',
      "New York Jets": '#000000',
      "Miami Dolphins": '#FC4C02',
      "Baltimore Ravens": '#9E7C0C',
      "Jacksonville Jaguars": '#101820',
    };
    return colors[team]
  }


  render() {
    var { params } = this.props.navigation.state;

    return (
      this.state.curPlayerInfo.player_name == null ?
        <Text style={{ top: hp(50), left: wp(40) }}> Loading </Text>
        :
        <View style={styles.container}>
          <PlayerScreenFormat
            displayPlayerName={this.state.curPlayerInfo.player_name}
            p_team={this.state.curPlayerInfo.current_team}
            p_age={this.calcAge(this.state.curPlayerInfo.player_dob)}
            p_weight={this.state.curPlayerInfo.player_weight}
            p_height={this.state.curPlayerInfo.player_height}
            p_pos={this.state.curPlayerInfo.player_position}
            goBackHome={goBackRequest => { this.goHome() }}
            goStatPage={goStatPageRequest => { this.goToStats() }}
            helmetImage={this.pickHelmet(this.state.curPlayerInfo.current_team)}
            color1={this.getColor1(this.state.curPlayerInfo.current_team)}
            color3={this.getColor2(this.state.curPlayerInfo.current_team)}
          />

          <InputBar2
            textChange={searchInput => this.setState({ selectP2Input: searchInput })}
          />

          <Picker
            selectedValue={this.state.year}
            style={{ position: 'absolute' }}
            onValueChange={updateYear}
            itemStyle={styles.yearStyle}
          >
            <Picker.Item label="2019" value={2019} />
            <Picker.Item label="2018" value={2018} />
          </Picker>
          <Picker
            selectedValue={this.state.comparisonType}
            style={{ position: 'absolute' }}
            onValueChange={updateComparisonType}
            onValueChange={updateComparisonType}
            itemStyle={styles.comparisonTypeStyle}
          >
            <Picker.Item label="Current Player Stats" value="Player" />
            <Picker.Item label="Direct Comparison" value="Comparison" />
            <Picker.Item label="Player Splits" value="Splits" />
            {/* <Picker.Item label="Against Team" value="Against Team" /> */}
          </Picker>
          <View style={styles.wholeButtonContainer}>
            <View style={styles.fullLogContainer}>
              <TouchableHighlight onPress={() => this.updateLog('full')} underlayColor='#403f3e' style={(this.state.fullLog) ? [styles.fullLogHighlighted] : [styles.fullLog]}>
                <Text style={[styles.dropTitleHeaders]}>
                  Full Game Log
                                </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.homeLogContainer}>
              <TouchableHighlight onPress={() => this.updateLog('home')} underlayColor='#403f3e' style={(this.state.homeLog) ? [styles.homeLogHighlighted] : [styles.homeLog]}>
                <Text style={[styles.dropTitleHeaders]}>
                  Home Game Log
                </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.awayLogContainer}>
              <TouchableHighlight onPress={() => this.updateLog('away')} underlayColor='#403f3e' style={(this.state.awayLog) ? [styles.awayLogHighlighted] : [styles.awayLog]}>
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
isX = Platform.OS == 'ios' && Expo.Constants.platform.ios.model.toLowerCase().includes('iphone x')
fontDropTitleHeaders = isX ? wp('4') : wp('5')
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
    fontSize: wp('4'),
    fontWeight: '700',
    borderColor: '#a9a9a9',
    borderWidth: 3
  },
  wholeButtonContainer: {
    position: 'absolute',
    backgroundColor: color2,
    height: hp('10'),
    width: wp('100'),
    top: hp('32'),
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
    backgroundColor: '#4B4A49'
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
    backgroundColor: '#4B4A49'
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
    backgroundColor: '#4B4A49'
  },
  dropTitleHeaders: {
    color: 'white',
    fontSize: fontDropTitleHeaders,
    top: hp('0.5'),
    // fontSize: wp('5'),
    fontWeight: ('500')
  },
});