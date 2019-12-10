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
      allStats: []
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
    const { navigate } = this.props.navigation;
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
        this.setState({ allStats: JSON.parse(stats), })
        // tableHeaders: JSON.parse(stats).keys()})
        if (this.state.allStats.length < 1) {
          alert("Unable to find stats for " + params.player.player_name)
          navigate("Player")
        }
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    var { params } = this.props.navigation.state
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <StatTableComponent
          player={params.player}
          allStats={this.state.allStats}
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
