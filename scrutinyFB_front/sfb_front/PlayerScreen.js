import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import PlayerScreenFormat from './components/PlayerScreenFormat';

export default class PlayerScreen extends React.Component {
  
  constructor () {
    super();
    this.state= { 
      year : '',
      nameState : '',
      jsonResponse: []
    };

    updateYear = (year) => {
      this.setState({ year: year })
    }
  }

    static navigationOptions = {
      title: "Player Information"
    };

    componentDidMount() {
      var {params} = this.props.navigation.state;

      this.setState({nameState : params.name});
      fetch('https://scrutiny-fb-api.herokuapp.com/getPlayerByName?playerName='+params.name)
      .then((response) => response.json())
      .then(player => {
        this.setState({jsonResponse: JSON.parse(player)})
      })
      .catch((error) => {
        console.log(error)
      });
    }

    render() {

        var {params} = this.props.navigation.state;

        return (
        <View style={styles.container}>
            <PlayerScreenFormat 
              displayPlayerName={this.state.jsonResponse.player_name}
              p_team={this.state.jsonResponse.player_team}
              p_age='69'
              p_weight={this.state.jsonResponse.player_weight}
              p_height={this.state.jsonResponse.player_height}
              p_pos={this.state.jsonResponse.player_position}
            />
            <Picker
              selectedValue={this.state.year}
              style={{height: 50, width: 100}}

              onValueChange={updateYear}
              
              itemStyle={styles.yearStyle}
            >
                    <Picker.Item label="2019" value="2017" />
                    <Picker.Item label="2018" value="2018" />
                    <Picker.Item label="2017" value="2019" />
            </Picker>

        {/* <Text style={styles.pls}> {this.keyToValue("player_weight")} </Text> */}
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    pls: {
      top: 100,
      left: 100,
      color: 'red'
      
    },
    container: {
      backgroundColor: 'gray',
      flex: 1
    },
    yearStyle: {
      position: 'absolute',
      top: 225,
      color: 'black',
      width: 100,
      fontSize: 20,
      fontWeight: '600'
    }
  });