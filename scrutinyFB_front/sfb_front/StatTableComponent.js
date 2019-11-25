import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, ScrollView } from 'react-native';
import { Platform } from '@unimodules/core';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

// This screen is an the component for stat Table, update for future should fix the statPage to call this component

export default class StatTableComponent extends React.PureComponent {
    constructor (props) {
        super(props);
    }

      componentDidUpdate(prevProps) {
          if (prevProps.tableData != this.props.tableData) {
            // this.fetchData()
            // this.chooseKeys()
            // this.setData()
          }
      }

      render() {
        return (
            <View>
                <View style={styles.tableContainer}>
                    <ScrollView horizontal={true}>
                        <ScrollView >      
                            <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
                                <Row data={this.props.tableHeaders} style={styles.columnConfig} textStyle={styles.columnText}/>
                                <TableWrapper>
                                    {
                                        this.props.tableData.map((cellData, cellIndex) => (
                                            <Row data={cellData} style={styles.dataConfig} textStyle={styles.dataText} key={`${cellIndex}+${cellData}`}/>
                                        ))
                                    }
                                </TableWrapper>
                            </Table>
                    </ScrollView>
                    </ScrollView>    
                </View>
                <View style={styles.header}>
                                <Text style={styles.playerName}>{this.props.player.player_name}</Text>
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