import React from 'react';
import {View} from 'react-native'
import StatTableComponent from './StatTableComponent'

// This screen is an actual independent screen verses another StatPage which is a component

export default class statTableScreen extends React.PureComponent {
    constructor (props) {
        super(props);
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

    // fetches one players game log data
    componentDidMount() {
        this.fetchData()
      }

      fetchData() {
        var {params} = this.props.navigation.state
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
        var {params} = this.props.navigation.state
        if(params.player.player_position == 'RB') {
            this.setState({tableKeys: [`week`, 'rushing_yds', 'rushing_att', 'rushing_yds_per_att', 'rushing_td', 'receiving_targets', 'catch_percentage', 'receiving_yds_per_tgt'],
        tableHeaders: ["Week", "Rushing Yards", "Rushing Attempts", "Yards/attempt", "Rushing TDs", "Targets", "Catch %", 'Yds/Tgt']})
        }
        if(params.player.player_position == 'WR' || params.player.player_position == 'TE') {
            this.setState({tableKeys: [`week`, 'receiving_yds', 'receiving_tgts', 'catch_percentage', 'receiving_tds'],
        tableHeaders: ["Week", "Receiving Yards", "Targets", "Catch %", "Receiving TDs"]})
        }
        if(params.player.player_position == 'QB') {
            this.setState({tableKeys: [`week`, 'passing_yds', 'passing_completions', 'passing_yds_per_att', 'passing_tds', 'rushing_yds', 'rushing_att', 'rushing_td'],
        tableHeaders: ["Week", "Passing Yards", "Passing Completions", "Passing Yards/attempt", "Passing TDs", "Rushing Yards", "Rushing Attempts", "Rushing TDs"]})
        }
      }

      // sets the data according to the keys
      setData() {
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
        // console.log(this.state.tableData)  //Working correctly
      }

    render() {
        var {params} = this.props.navigation.state
        return (
            <View>
                <StatTableComponent player={params.player} logStatus={params.logStatus} tableHeaders={this.state.tableHeaders} tableData={this.state.tableData} />
            </View>
        )
    }
}
