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

    static navigationOptions = {
        header: null
      };

    // fetches one players full game log data
    componentDidMount() {
        var {params} = this.props.navigation.state;
        // this.setState({year: params.year,
        //             comparisonType: tparams.comparisonType,
        //             nameState: params.comparisonType});

        fetch('https://scrutiny-fb-api.herokuapp.com/getStatsById?playerID='+params.player1.player_id)
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
        if(params.player1.player_position == 'RB') {
            this.setState({tableKeys: [`week`, 'game_num', 'rushing_yds', 'rushing_att', 'rushing_yds_per_att', 'rushing_td'],
        tableHeaders: ["Week", "Game #", "Rush Yrds", "Rush Attempts", "Yrds/attempt", "Rush TDs"]})
        }
      }

      // sets the data according to the keys
      setData() {
        var {params} = this.props.navigation.state;
        toReturn = []
        if(params.player1.player_position == 'RB') {
            // this.state.jsonResponse.forEach((dataRow) => 
            for (i in this.state.jsonResponse) {
                // console.log(this.state.jsonResponse[i]["rushing_yds"]) // working correctly
                innerAppend = [];
                this.state.tableKeys.map((header) => {
                    innerAppend.push(this.state.jsonResponse[i][header])
                })
                toReturn.push(innerAppend)
            }
        }
        this.setState({tableData: toReturn})
        console.log(this.state.tableData)  //Working correctly
      }

      render() {
        var {params} = this.props.navigation.state;
        return (
            <View>
                <View style={styles.tableContainer}>
                    <ScrollView horizontal={true}>
                        <ScrollView >      
                            <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
                                <Row data={this.state.tableHeaders} style={styles.columnConfig} textStyle={styles.columnText}/>
                                <TableWrapper>
                                    {
                                        this.state.tableData.map((cellData, cellIndex) => (
                                            <Row data={cellData} style={styles.dataConfig} textStyle={styles.dataText} key={`${cellIndex}+${cellData}`}/>
                                        ))
                                    }
                                </TableWrapper>
                            </Table>
                    </ScrollView>
                    </ScrollView>    
                </View>
                <View style={styles.header}>
                    {/* <Text style={styles.playerName}>{params.player1.playerName}</Text> */}
                    <Text style={styles.playerName}>Saquon Barkley</Text>
                </View>  
            </View>
        )}}

const columnHeaderColor = '#d3d3d3';
const columnHeaderHeight = hp('4');
const headerTextColor = 'black';
const columnFontSize = wp('3.5');
const dataBackgroundColor = 'white';
const columnWidth = wp('170');
const dataTextColor = 'black';
const dataFontSize = wp('5');



const styles = StyleSheet.create({
    tableContainer: { 
        position: 'absolute',
        top: hp('10'),
        flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff',
        height: hp('80')
        // flex: 1, 
        // padding: 16, 
        // paddingTop: 30, 
        // backgroundColor: '#c2c2c2',
        // head: {  height: 40,  backgroundColor: '#f1f8ff'  },
        // wrapper: { flexDirection: 'row' },
        // title: { flex: 1, backgroundColor: '#f6f8fa' },
        // row: {  height: 28  },
        // text: { textAlign: 'center' 
    },
    columnConfig: { 
        height: columnHeaderHeight,
        width: columnWidth,
        backgroundColor: columnHeaderColor,
    },
    columnText: {
        fontWeight: '500',
        fontSize: columnFontSize,
        color: headerTextColor,
        textAlign: 'center'
    },
    dataConfig: {
        width: columnWidth,
        backgroundColor: dataBackgroundColor,
    },
    dataText: {
        fontSize: dataFontSize,
        color: dataTextColor,
        textAlign: 'center'
    },
    playerName: {
        position: 'absolute',
        fontSize: wp('10'),
        top: hp('3'),
    },
    header: {
        top: hp('4'),
        alignItems: 'center',
        alignContent: 'center'
    }
    });