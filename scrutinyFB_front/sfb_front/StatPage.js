import React from 'react';
import {View} from 'react-native'
import StatTableComponent from './StatTableComponent'

// This screen is an actual independent screen verses another StatPage which is a component

export default class statTableScreen extends React.PureComponent {
    constructor() {
        super();
    }

    render() {
        var {params} = this.props.navigation.state
        return (
            <View>
                <StatTableComponent player={params.player} logStatus={params.logStatus} />
            </View>
        )
    }
}

// export default class statTableScreen extends React.Component {
//     constructor () {
//         super();
//         this.state= { 
//           year : '',
//           comparisonType : '',
//           nameState : '',
//           tableKeys: [],
//           tableHeaders: [],
//           tableData: [],
//           jsonResponse: []
//         };
//     }

//     static navigationOptions = {
//         header: null
//       };

//     // fetches one players full game log data
//     componentDidMount() {
//         var {params} = this.props.navigation.state;
//         // this.setState({year: params.year,
//         //             comparisonType: tparams.comparisonType,
//         //             nameState: params.comparisonType});

//         if(params.logStatus == 'full')
//         fetch('https://scrutiny-fb-api.herokuapp.com/getStatsById?playerID='+params.player.player_id)
//         .then((response) => response.json())
//         .then(stats => {
//           this.setState({jsonResponse: JSON.parse(stats),})
//                         // tableHeaders: JSON.parse(stats).keys()})
//                         this.chooseKeys()
//                         this.setData()
//                         //  console.log((JSON.parse(stats)[0])["rushing_yds"])
//         })
//         .catch((error) => {
//           console.log(error)
//         });
//         if(params.logStatus == 'away')
//         fetch('https://scrutiny-fb-api.herokuapp.com/getStatsByIdAway?playerID='+params.player.player_id)
//         .then((response) => response.json())
//         .then(stats => {
//           this.setState({jsonResponse: JSON.parse(stats),})
//                         // tableHeaders: JSON.parse(stats).keys()})
//                         this.chooseKeys()
//                         this.setData()
//                         //  console.log((JSON.parse(stats)[0])["rushing_yds"])
//         })
//         .catch((error) => {
//           console.log(error)
//         });
//         if(params.logStatus == 'home')
//         fetch('https://scrutiny-fb-api.herokuapp.com/getStatsByIdHome?playerID='+params.player.player_id)
//         .then((response) => response.json())
//         .then(stats => {
//           this.setState({jsonResponse: JSON.parse(stats),})
//                         // tableHeaders: JSON.parse(stats).keys()})
//                         this.chooseKeys()
//                         this.setData()
//                         //  console.log((JSON.parse(stats)[0])["rushing_yds"])
//         })
//         .catch((error) => {
//           console.log(error)
//         });
//       }

//       // Chooses keys order depending on position
//       chooseKeys() {
//         var {params} = this.props.navigation.state;
//         if(params.player.player_position == 'RB') {
//             this.setState({tableKeys: [`week`, 'rushing_yds', 'rushing_att', 'rushing_yds_per_att', 'rushing_td', 'receiving_tgts', 'catch_percentage', 'receiving_yds_per_tgt'],
//         tableHeaders: ["Week", "Rushing Yards", "Rushing Attempts", "Yards/attempt", "Rushing TDs", "Targets", "Catch %", 'Yds/Tgt']})
//         }
//         if(params.player.player_position == 'WR' || params.player.player_position == 'TE') {
//             this.setState({tableKeys: [`week`, 'receiving_yds', 'receiving_targets', 'catch_percentage', 'receiving_tds'],
//         tableHeaders: ["Week", "Receiving Yards", "Targets", "Catch %", "Receiving TDs"]})
//         }
//         if(params.player.player_position == 'QB') {
//             this.setState({tableKeys: [`week`, 'passing_yds', 'passing_completions', 'passing_yds_per_att', 'passing_tds', 'rushing_yds', 'rushing_att', 'rushing_td'],
//         tableHeaders: ["Week", "Passing Yards", "Passing Completions", "Passing Yards/attempt", "Passing TDs", "Rushing Yards", "Rushing Attempts", "Rushing TDs"]})
//         }
//       }

//       // sets the data according to the keys
//       setData() {
//         var {params} = this.props.navigation.state;
//         toReturn = []
//             // this.state.jsonResponse.forEach((dataRow) => 
//             for (i in this.state.jsonResponse) {
//                 // console.log(this.state.jsonResponse[i]["rushing_yds"]) // working correctly
//                 innerAppend = [];
//                 this.state.tableKeys.map((header) => {
//                     innerAppend.push(this.state.jsonResponse[i][header])
//                 })
//                 toReturn.push(innerAppend)
//             }
//         this.setState({tableData: toReturn})
//         // console.log(this.state.tableData)  //Working correctly
//       }

//       render() {
//         var {params} = this.props.navigation.state;
//         return (
//             <View>
//                 <View style={styles.tableContainer}>
//                     <ScrollView horizontal={true}>
//                         <ScrollView >      
//                             <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
//                                 <Row data={this.state.tableHeaders} style={styles.columnConfig} textStyle={styles.columnText}/>
//                                 <TableWrapper>
//                                     {
//                                         this.state.tableData.map((cellData, cellIndex) => (
//                                             <Row data={cellData} style={styles.dataConfig} textStyle={styles.dataText} key={`${cellIndex}+${cellData}`}/>
//                                         ))
//                                     }
//                                 </TableWrapper>
//                             </Table>
//                     </ScrollView>
//                     </ScrollView>    
//                 </View>
//                 <View style={styles.header}>
//                                 <Text style={styles.playerName}>{params.player.player_name}</Text>
//                 </View>  
//             </View>
//         )}}

// const columnHeaderColor = '#d3d3d3';
// const columnHeaderHeight = hp('4');
// const headerTextColor = 'black';
// const columnFontSize = wp('3.5');
// const dataBackgroundColor = 'white';
// const columnWidth = wp('170');
// const dataTextColor = 'black';
// const dataFontSize = wp('5');



// const styles = StyleSheet.create({
//     tableContainer: { 
//         position: 'absolute',
//         top: hp('10'),
//         flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff',
//         height: hp('80')
//         // flex: 1, 
//         // padding: 16, 
//         // paddingTop: 30, 
//         // backgroundColor: '#c2c2c2',
//         // head: {  height: 40,  backgroundColor: '#f1f8ff'  },
//         // wrapper: { flexDirection: 'row' },
//         // title: { flex: 1, backgroundColor: '#f6f8fa' },
//         // row: {  height: 28  },
//         // text: { textAlign: 'center' 
//     },
//     columnConfig: { 
//         height: columnHeaderHeight,
//         width: columnWidth,
//         backgroundColor: columnHeaderColor,
//     },
//     columnText: {
//         fontWeight: '500',
//         fontSize: columnFontSize,
//         color: headerTextColor,
//         textAlign: 'center'
//     },
//     dataConfig: {
//         width: columnWidth,
//         backgroundColor: dataBackgroundColor,
//     },
//     dataText: {
//         fontSize: dataFontSize,
//         color: dataTextColor,
//         textAlign: 'center'
//     },
//     playerName: {
//         position: 'absolute',
//         fontSize: wp('10'),
//         top: hp('3'),
//     },
//     header: {
//         top: hp('4'),
//         alignItems: 'center',
//         alignContent: 'center'
//     }
//     });