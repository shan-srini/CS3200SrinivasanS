import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Platform } from '@unimodules/core';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class FavoritesPage extends React.Component {
    constructor () {
        super();
        this.state= { 

        };
    }

    goToLogin() {
        const {navigate} = this.props.navigation;
        navigate('LoginPage');
      }

    static navigationOptions = {
        header: null
      };

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.favoritesTitle}>
                        Favorites
                    </Text>
                </View>
                <View style={styles.backButtonSquare}/>
                <View style={styles.backButtonCircle}/>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => this.goToLogin()}>
                        <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
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
        fontSize: wp('14'),
        fontWeight: '500'
    },
})