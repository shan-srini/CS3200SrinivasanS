import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Platform } from '@unimodules/core';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import InputBar from './components/InputBar'

export default class AddFavorites extends React.Component {
    constructor () {
        super();
        this.state= { 
            playerOptionList: []
        };
    }

    goToFavoritesPage() {
        const {navigate} = this.props.navigation;
        navigate('FavoritesPage');
      }

    filterPlayerOptionList(searchInput) {
        var {params} = this.props.navigation.state
        allList = params.allPlayerNames
        toReturn = allList.filter(name => (name[0].toLowerCase().search(searchInput.toLowerCase()) == -1) ? false : true )
        // console.log(toReturn) // works as expected
        this.state.searchInput == "" ? this.setState({playerOptionList: []}) : this.setState({playerOptionList: toReturn})
    }

    addFavPlayer(playerName) {
        var {params} = this.props.navigation.state
        var {navigate} = this.props.navigation
        fetch("https://scrutiny-fb-api.herokuapp.com/addPlayerForUser?userName="+params.userName+"&playerName="+playerName)
        .then(res => {})
        .catch((error) => {
            console.log(error)
        })
        //THIS NEEDS TO BE THE BACK PAGE THING
        navigate('FavoritesPage', {userName: params.userName, allPlayerNames: params.allPlayerNames, addedPlayer: playerName})
        
    }

    static navigationOptions = {
        header: null
      };

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.favoritesTitle}>
                        Add Favorites
                    </Text>
                </View>
                <View style={styles.backButtonSquare}/>
                <View style={styles.backButtonCircle}/>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => this.goToFavoritesPage()}>
                        <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                

                <InputBar 
            textChange={searchInput => {this.setState({ searchInput }); this.filterPlayerOptionList(searchInput)}}
            changePageSubmitted={submitRequest => {this.addFavPlayer()}}
            changePageFromButton={submitRequestButton => {this.addFavPlayer()}}
          />
          <View style={styles.playerListContainer}>
                <ScrollView >
                { this.state.playerOptionList.map((player, playerIndex) => (
                <TouchableOpacity key={playerIndex} style={styles.playerOption} onPress={() => this.addFavPlayer(player)}>
                   <Text style={styles.playerText}> {player} </Text>
                 </TouchableOpacity>
              ))
              }
                </ScrollView>
            </View>
        </View>
        )
    }
}

const lightGray = '#8E8E8E';
isXR = Platform.OS == 'ios' && Expo.Constants.platform.ios.model.toLowerCase().includes('iphone xr')
fontInput = isXR ? wp('4') : wp('5.75%')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c2c2c2'
    },  
    backButton : {
        alignContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: wp('28'),
        height: hp('8'),
        backgroundColor: 'transparent',
        top: hp('85'),
    },
    backButtonSquare: {
        position: 'absolute',
        width: wp('21'),
        height: hp('8'),
        backgroundColor: lightGray,
        top: hp('85'),
    },
    backButtonCircle: {
        width: wp('21'),
        height: hp('8'),
        borderRadius: 100/2,
        backgroundColor: lightGray,
        top: hp('85'),
        left: wp('7.4'),
    },
    backButtonText: {
        color: 'white',
        fontSize: wp('7.4'),
        top: hp('1.6'),
    },
    header: {
        position: 'absolute',
        alignItems: 'center',
        width: wp(60),
        height: hp('10'),
        alignSelf: "center",
        top: hp('8')
    },
    favoritesTitle: {
        color: '#608ebf',
        fontSize: wp('9'),
        fontWeight: '500'
    },
    playerListContainer: {
        top: hp('40'),
        left: wp('10.5'),
        height: hp('33%'),
      },
      playerOption: {
        height: hp("5"),
        width: wp("79.25"),
        backgroundColor: "white",
        alignContent: "center",
        backgroundColor: ('transparent')
        // backgroundColor: "",
        // alignItems: "center"
      },
      playerText: {
        top: hp(1),
        color: "black",
        fontSize: wp('6')
      },
})