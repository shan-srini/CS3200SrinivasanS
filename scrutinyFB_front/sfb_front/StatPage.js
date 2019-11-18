import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, ScrollView } from 'react-native';
import { Platform } from '@unimodules/core';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class statTableScreen extends React.Component {
    constructor () {
        super();
        this.state= { 
          year : '',
          comparisonType : '',
          nameState : '',
          tableKeys: [],
          tableHeaders: [],
          tableData: [],
          jsonResponse: []
        };
    }

    

    // fetches one players full game log data
    componentDidMount() {
        var {params} = this.props.navigation.state;
        // this.setState({year: params.year,
        //             comparisonType: tparams.comparisonType,
        //             nameState: params.comparisonType});

        if(params.logStatus == 'full')
        fetch('https://scrutiny-fb-api.herokuapp.com/getStatsById?playerID='+params.player.player_id)
        .then((response) => response.json())
        .then(stats => {
          this.setState({jsonResponse: JSON.parse(stats),})
                        // tableHeaders: JSON.parse(stats).keys()})
                        this.chooseKeys()
                        this.setData()
                        //  console.log((JSON.parse(stats)[0])["rushing_yds"])
        })
        .catch((error) => {
          console.log(error)
        });
        if(params.logStatus == 'away')
        fetch('https://scrutiny-fb-api.herokuapp.com/getStatsByIdAway?playerID='+params.player.player_id)
        .then((response) => response.json())
        .then(stats => {
          this.setState({jsonResponse: JSON.parse(stats),})
                        // tableHeaders: JSON.parse(stats).keys()})
                        this.chooseKeys()
                        this.setData()
                        //  console.log((JSON.parse(stats)[0])["rushing_yds"])
        })
        .catch((error) => {
          console.log(error)
        });
        if(params.logStatus == 'home')
        fetch('https://scrutiny-fb-api.herokuapp.com/getStatsByIdHome?playerID='+params.player.player_id)
        .then((response) => response.json())
        .then(stats => {
          this.setState({jsonResponse: JSON.parse(stats),})
                        // tableHeaders: JSON.parse(stats).keys()})
                        this.chooseKeys()
                        this.setData()
                        //  console.log((JSON.parse(stats)[0])["rushing_yds"])
        })
        .catch((error) => {
          console.log(error)
        });
      }

      // Chooses keys order depending on position
      chooseKeys() {
        var {params} = this.props.navigation.state;
        if(params.player.player_position == 'RB') {
            this.setState({tableKeys: [`week`, 'rushing_yds', 'rushing_att', 'rushing_yds_per_att', 'rushing_td', 'receiving_targets', 'catch_percentage', 'receiving_yds_per_tgt'],
        tableHeaders: ["Week", "Rushing Yards", "Rushing Attempts", "Yards/attempt", "Rushing TDs", "Targets", "Catch %", 'Yds/Tgt']})
        }
        if(params.player.player_position == 'WR' || params.player.player_position == 'TE') {
            this.setState({tableKeys: [`week`, 'receiving_yds', 'receiving_targets', 'catch_percentage', 'receiving_tds'],
        tableHeaders: ["Week", "Receiving Yards", "Targets", "Catch %", "Receiving TDs"]})
        }
        if(params.player.player_position == 'QB') {
            this.setState({tableKeys: [`week`, 'passing_yds', 'passing_completions', 'passing_yds_per_att', 'passing_tds', 'rushing_yds', 'rushing_att', 'rushing_td'],
        tableHeaders: ["Week", "Passing Yards", "Passing Completions", "Passing Yards/attempt", "Passing TDs", "Rushing Yards", "Rushing Attempts", "Rushing TDs"]})
        }
      }

      // sets the data according to the keys
      setData() {
        var {params} = this.props.navigation.state;
        toReturn = []
            // this.state.jsonResponse.forEach((dataRow) => 
            for (i in this.state.jsonResponse) {
                // console.log(this.state.jsonResponse[i]["rushing_yds"]) // working correctly
                innerAppend = [];
                this.state.tableKeys.map((header) => {
                    innerAppend.push(this.state.jsonResponse[i][header])
                })
                toReturn.push(innerAppend)
            }
        this.setState({tableData: toReturn})
        console.log(this.state.tableData)  //Working correctly
      }

      render() {
        return (
            
            <View>
                <ScrollView  horizontal={true}>
                    <ScrollView>      
                        <Table>
                            <Row data={this.state.tableHeaders}> </Row>
                            <TableWrapper>
                                {
                                    this.state.tableData.map((cellData, cellIndex) => (
                                        <Row data={cellData} key={`${cellIndex}+${cellData}`}>  </Row>
                                    ))
                                }
                            </TableWrapper>
                        </Table>
                 </ScrollView>
                </ScrollView>    
            </View>  
        )}}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 28  },
    text: { textAlign: 'center' }
    });