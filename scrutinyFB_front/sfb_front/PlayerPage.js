import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class PlayerScreen extends React.Component {
    static navigationOptions = {
      title: 'Player Screen',
    };
    render() {

        const {navigate} = this.props.navigation;
        return (
        <View>
            <Text>This is screen 2</Text>
            <Text>{params.name}</Text>
        </View>
      );
    }
  }