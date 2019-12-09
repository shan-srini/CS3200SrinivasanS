import React from 'react';
import { StyleSheet, StatusBar, Image, View } from 'react-native';
import StatTableComponent from './StatTableComponent';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';

const backButtonHeight = hp('4')
const backButtonWidth = wp('5.2')

// This screen is an actual independent screen verses another StatPage which is a component
export default class statTableScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      year: '',
      comparisonType: '',
      nameState: '',
      tableKeys: [],
      tableHeaders: [],
      tableData: [],
      jsonResponse: []
    };
  }

  goBackToPlayer() {
    const { navigate } = this.props.navigation;
    navigate('Player');
  }

  static navigationOptions = {
    header: null
  };

  // fetches one players game log data
  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    var { params } = this.props.navigation.state
    var formData = new FormData()
    formData.append('playerID', params.player.player_id)
    formData.append('home_or_away', params.logStatus)
    formData.append('year', params.year)

    //?playerID='+params.player.player_id)
    fetch('https://scrutiny-fb-api.herokuapp.com/getStats', {
      method: 'POST',
      body: formData
    })
      .then((response) => response.json())
      .then(stats => {
        this.setState({ jsonResponse: JSON.parse(stats), })
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
    var { params } = this.props.navigation.state
    if (params.player.player_position == 'RB') {
      this.setState({
        tableKeys: [`week`, 'rushing_yds', 'rushing_att', 'rushing_yds_per_att', 'rushing_td', 'catch_percentage', 'receiving_yds_per_tgt'],
        tableHeaders: ["Wk", "Rush Yds", "Rush Atts", "Yds/Att", "Rush TDs", "Catch %", 'Yds/Tgt']
      })
    }
    if (params.player.player_position == 'WR' || params.player.player_position == 'TE') {
      this.setState({
        tableKeys: [`week`, 'receiving_yds', 'receiving_tgts', 'catch_percentage', 'receiving_tds', 'receiving_yds_per_tgt'],
        tableHeaders: ["Wk", "Rec Yds", "Tgts", "Catch %", "Rec TDs", 'Yds/Tgt']
      })
    }
    if (params.player.player_position == 'QB') {
      this.setState({
        tableKeys: [`week`, 'passing_yds', 'passing_completions', 'passing_yds_per_att', 'passing_tds', 'rushing_yds', 'rushing_att', 'rushing_td'],
        tableHeaders: ["Wk", "Pass Yds", "Pass Comps", "Yds/Att", "Pass TDs", "Rush yds", "Rush atts", "Rush TDs"]
      })
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
    this.setState({ tableData: toReturn })
    // console.log(this.state.tableData)  //Working correctly
  }

  render() {
    var { params } = this.props.navigation.state
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <StatTableComponent
          player={params.player}
          logStatus={params.logStatus}
          tableHeaders={this.state.tableHeaders}
          tableData={this.state.tableData}
          chosenColor={params.chosenColor}
          chosenColor2={params.chosenColor2}
          chosenColorBottom={params.chosenColor2} />
        <View style={styles.backButtonContainer}>
          <TouchableOpacity style={styles.backButton}
            onPress={() => this.goBackToPlayer()}>
            <Image
              source={require('./components/backButtonArrow.png')}
              style={{ width: backButtonWidth, height: backButtonHeight }}
            />
          </TouchableOpacity>
        </View>
        {/* <View style={styles.bottom}/> */}
      </View>
    )
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
});
