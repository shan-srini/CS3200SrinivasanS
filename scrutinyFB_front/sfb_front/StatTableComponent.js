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
            this.props.tableData.length < 1 ?
            <Text style={{top: hp(50), left: wp(40)}}> Loading </Text>
            :
            <View>
                <View style={styles(this.props).triangleBG}/>
                <View style={styles(this.props).tableContainer}>
                    <ScrollView horizontal={true} alwaysBounceVertical={false}>
                        <ScrollView alwaysBounceVertical={false}>      
                            <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
                                <Row data={this.props.tableHeaders} style={styles(this.props).columnConfig} textStyle={styles(this.props).columnText}/>
                            </Table>
                            <ScrollView alwaysBounceVertical={false}>
                            <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
                                <TableWrapper>
                                    {
                                        this.props.tableData.map((cellData, cellIndex) => (
                                            <Row data={cellData} style={styles(this.props).dataConfig} textStyle={styles(this.props).dataText} key={`${cellIndex}+${cellData}`}/>
                                        ))
                                    }
                                </TableWrapper>
                            </Table>
                            </ScrollView>
                        </ScrollView>
                    </ScrollView>    
                </View>  
                <View style={styles(this.props).header}>
                    <Text style={styles(this.props).playerName}>{this.props.player.player_name}</Text>
                </View>
                <View style={styles(this.props).bottom}/>
            </View>
        )}}

const columnHeaderColor = '#2e2e2e';
const columnHeaderHeight = hp('4');
const headerTextColor = 'white';
const columnFontSize = wp('3.5');
const columnWidth = wp('24');
const dataBackgroundColor = '#4B4A49';
const dataTextColor = 'white';
const dataFontSize = wp('5');
const stickTopHeader = hp('0')

const styles = (props) => StyleSheet.create({
    tableContainer: { 
        position: 'absolute',
        top: hp('14'),
        flex: 1, paddingTop: 0, backgroundColor: '#fff',
        height: hp('76'),
        backgroundColor: 'transparent'
    },
    columnConfig: { 
        height: columnHeaderHeight,
        width: props.tableHeaders.length * columnWidth,
        backgroundColor: columnHeaderColor,
        top: stickTopHeader
    },
    columnText: {
        fontWeight: '500',
        fontSize: columnFontSize,
        color: headerTextColor,
        textAlign: 'center'
    },
    dataConfig: {
        width: props.tableHeaders.length * columnWidth,
        backgroundColor: dataBackgroundColor,
    },
    dataText: {
        fontSize: dataFontSize,
        color: dataTextColor,
        textAlign: 'center'
    },
    playerName: {
        position: 'absolute',
        fontSize: wp('8.5'),
        top: hp('6'),
        color: 'white',
    },
    header: {
        borderBottomColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: props.chosenColor,
        width: wp('100'),
        height: hp('14')
    },
    triangleBG: {
        position: 'absolute',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        top: hp('14'),
        height: hp('78'),
        width: wp('100'),
        backgroundColor: props.chosenColor2
    },
    bottom: {
        position: 'absolute',
        width: wp('100'),
        height: hp('20'),
        top: hp('90'),
        backgroundColor: props.chosenColorBottom
      }
    });