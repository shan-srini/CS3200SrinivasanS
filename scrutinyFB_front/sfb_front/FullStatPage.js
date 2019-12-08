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
          player2Info: [],
          p1AllData: [],
          p1TableData: [],
          tableHeaders1: [],
          tableKeys1: [],
          p2AllData: [],
          p2TableData: [],
          tableHeaders2: [],
          tableKeys2: [],
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
        this.setState({player2Info: JSON.parse(player)})
        this.fetchData()
      })
      .catch((error) => {
        console.log(error)
      });
    }

    fetchData() {
      var {params} = this.props.navigation.state
      if(params.logStatus == 'full') {
      fetch('https://scrutiny-fb-api.herokuapp.com/getStatsById?playerID='+params.player1.player_id)
      .then((response) => response.json())
      .then(stats => {
        this.setState({p1AllData: JSON.parse(stats),})
                      // tableHeaders: JSON.parse(stats).keys()})
                      this.chooseKeys1()
                      this.setData1()
                      //  console.log((JSON.parse(stats)[0])["rushing_yds"])
      })
      .catch((error) => {
        console.log(error)
      })
      fetch('https://scrutiny-fb-api.herokuapp.com/getStatsById?playerID='+this.state.player2Info.player_id)
      .then((response) => response.json())
      .then(stats => {
        this.setState({p2AllData: JSON.parse(stats),})
                      // tableHeaders: JSON.parse(stats).keys()})
                      this.chooseKeys2()
                      this.setData2()
                      //  console.log((JSON.parse(stats)[0])["rushing_yds"])
      })
      .catch((error) => {
        console.log(error)
      });
    }
      if(params.logStatus == 'away') {
      fetch('https://scrutiny-fb-api.herokuapp.com/getStatsByIdAway?playerID='+params.player1.player_id)
      .then((response) => response.json())
      .then(stats => {
        this.setState({p1AllData: JSON.parse(stats),})
                      // tableHeaders: JSON.parse(stats).keys()})
                      this.chooseKeys1()
                      this.setData1()
                      //  console.log((JSON.parse(stats)[0])["rushing_yds"])
      })
      .catch((error) => {
        console.log(error)
      });
      fetch('https://scrutiny-fb-api.herokuapp.com/getStatsByIdAway?playerID='+this.state.player2Info.player_id)
      .then((response) => response.json())
      .then(stats => {
        this.setState({p2AllData: JSON.parse(stats),})
                      // tableHeaders: JSON.parse(stats).keys()})
                      this.chooseKeys2()
                      this.setData2()
                      //  console.log((JSON.parse(stats)[0])["rushing_yds"])
      })
      .catch((error) => {
        console.log(error)
      });
    }
      if(params.logStatus == 'home') {
      fetch('https://scrutiny-fb-api.herokuapp.com/getStatsByIdHome?playerID='+params.player1.player_id)
      .then((response) => response.json())
      .then(stats => {
        this.setState({p1AllData: JSON.parse(stats),})
                      // tableHeaders: JSON.parse(stats).keys()})
                      this.chooseKeys1()
                      this.setData1()
                      //  console.log((JSON.parse(stats)[0])["rushing_yds"])
      })
      .catch((error) => {
        console.log(error)
      });
      fetch('https://scrutiny-fb-api.herokuapp.com/getStatsByIdHome?playerID='+this.state.player2Info.player_id)
      .then((response) => response.json())
      .then(stats => {
        this.setState({p2AllData: JSON.parse(stats),})
                      // tableHeaders: JSON.parse(stats).keys()})
                      this.chooseKeys2()
                      this.setData2()
                      //  console.log((JSON.parse(stats)[0])["rushing_yds"])
      })
      .catch((error) => {
        console.log(error)
      });
    }
    }

    // Chooses keys order depending on position
    // I know I should abstract, but this is in a time crunch and needs more state & function reformatting
    // to do so, for now keeping as 2 different functions for each player
    chooseKeys1() {
      var {params} = this.props.navigation.state
      if(params.player1.player_position == 'RB') {
          this.setState({tableKeys1: [`week`, 'rushing_yds', 'rushing_att', 'rushing_yds_per_att', 'rushing_td', 'catch_percentage', 'receiving_yds_per_tgt'],
      tableHeaders1: ["Wk", "Rush Yds", "Rush Atts", "Yds/Att", "Rush TDs", "Catch %", 'Yds/Tgt']})
      }
      if(params.player1.player_position == 'WR' || params.player1.player_position == 'TE') {
          this.setState({tableKeys1: [`week`, 'receiving_yds', 'receiving_tgts', 'catch_percentage', 'receiving_tds', 'receiving_yds_per_tgt'],
      tableHeaders1: ["Wk", "Rec Yds", "Tgts", "Catch %", "Rec TDs", 'Yds/Tgt']})
      }
      if(params.player1.player_position == 'QB') {
          this.setState({tableKeys1: [`week`, 'passing_yds', 'passing_completions', 'passing_yds_per_att', 'passing_tds', 'rushing_yds', 'rushing_att', 'rushing_td'],
      tableHeaders1: ["Wk", "Pass Yds", "Pass Comps", "Yds/Att", "Pass TDs", "Rush yds", "Rush atts", "Rush TDs"]})
      }
    }
    chooseKeys2() {
      if(this.state.player2Info.player_position == 'RB') {
          this.setState({tableKeys2: [`week`, 'rushing_yds', 'rushing_att', 'rushing_yds_per_att', 'rushing_td', 'catch_percentage', 'receiving_yds_per_tgt'],
      tableHeaders2: ["Wk", "Rush Yds", "Rush Atts", "Yds/Att", "Rush TDs", "Catch %", 'Yds/Tgt']})
      }
      if(this.state.player2Info.player_position == 'WR' || this.state.player2Info.player_position == 'TE') {
          this.setState({tableKeys2: [`week`, 'receiving_yds', 'receiving_tgts', 'catch_percentage', 'receiving_tds', 'receiving_yds_per_tgt'],
      tableHeaders2: ["Wk", "Rec Yds", "Tgts", "Catch %", "Rec TDs", 'Yds/Tgt']})
      }
      if(this.state.player2Info.player_position == 'QB') {
          this.setState({tableKeys2: [`week`, 'passing_yds', 'passing_completions', 'passing_yds_per_att', 'passing_tds', 'rushing_yds', 'rushing_att', 'rushing_td'],
      tableHeaders2: ["Wk", "Pass Yds", "Pass Comps", "Yds/Att", "Pass TDs", "Rush yds", "Rush atts", "Rush TDs"]})
      }
    }

    // sets the data according to the keys
    setData1() {
      toReturn = []
          // this.state.jsonResponse.forEach((dataRow) => 
          for (i in this.state.p1AllData) {
              // console.log(this.state.jsonResponse[i]["rushing_yds"]) // working correctly
              innerAppend = [];
              this.state.tableKeys1.map((header) => {
                  innerAppend.push(this.state.p1AllData[i][header])
              })
              toReturn.push(innerAppend)
          }
      this.setState({p1TableData: toReturn})
      // console.log(this.state.tableData)  //Working correctly
    }
    setData2() {
      toReturn = []
          // this.state.jsonResponse.forEach((dataRow) => 
          for (i in this.state.p2AllData) {
              // console.log(this.state.jsonResponse[i]["rushing_yds"]) // working correctly
              innerAppend = [];
              this.state.tableKeys2.map((header) => {
                  innerAppend.push(this.state.p2AllData[i][header])
              })
              toReturn.push(innerAppend)
          }
      this.setState({p2TableData: toReturn})
      // console.log(this.state.tableData)  //Working correctly
    }
    
    render() {
      var {params} = this.props.navigation.state;
        return (
        <View style={styles.container}>
          { this.state.displayPlayerSwitch ?
          <StatTableComponent 
            player={params.player1} 
            logStatus={params.logStatus} 
            tableHeaders={this.state.tableHeaders1} 
            chosenColor = {params.chosenColor}
            chosenColor2 = {params.chosenColor2}
            chosenColorBottom ={params.chosenColor}
            tableData={this.state.p1TableData}/>
          :
          <StatTableComponent 
            player={this.state.player2Info} 
            logStatus={params.logStatus} 
            tableHeaders={this.state.tableHeaders2} 
            chosenColor = {params.chosenColor}
            chosenColor2 = {params.chosenColor2}
            chosenColorBottom ={params.chosenColor}
            tableData={this.state.p2TableData}/>
          }

          {/* <View style={styles.bottom}/> */}
          <View style={styles.playerButtonContainer}>
            <TouchableHighlight style={styles.playerNameBox1} underlayColor='#6e6e6e' onPress={() => this.setState({displayPlayerSwitch: true})}>
              <Text style={[styles.playerNameBoxText]}>
                   {params.player1.player_name}
              </Text> 
            </TouchableHighlight>
            <TouchableHighlight style={styles.playerNameBox2} underlayColor='#6e6e6e' onPress={() => this.setState({displayPlayerSwitch: false})}>
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
                        style={{ width: backButtonWidth, height: backButtonHeight  }}
                    />
            </TouchableOpacity>
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
    },
    bottom: {
      position: 'absolute',
      width: wp('100'),
      height: hp('20'),
      top: hp('90'),
      backgroundColor:'#4B4A49'
    },
  });

