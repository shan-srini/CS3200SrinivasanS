import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Platform } from '@unimodules/core';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class LoginPage extends React.Component {
    constructor () {
        super();
        this.state= { 
            userName: '',
            password: ''
        };
    }

    submitLogin() {
        
    }

    render() {
        return(
            <View style={[styles.inputBarContainer]}> 
                <TextInput 
                    placeholder='Enter Username' 
                    style={styles.input}
                    onChangeText={(usernameInput) => this.setState({userName: usernameInput})}
                    value={this.state.userName}
                    // onSubmitEditing={(submitRequest) => props.changePageSubmitted(submitRequest)}
                    // value={props.searchInput}
                />
                <TextInput 
                    placeholder='Enter Password' 
                    style={styles.input}
                    onChangeText={(passwordInput) => this.setState({password: passwordInput})}
                    value={this.state.password}
                    // onSubmitEditing={(submitRequest) => props.changePageSubmitted(submitRequest)}
                    // value={props.searchInput}
                />
                <TouchableOpacity style={styles.searchButton} onPress={(submitLogin) => this.submitLogin()}>
                    <Image
                        source={require('../sfb_front/components/lightningBoltLogo.png')}  
                        style={{ width: wp(5), height: hp(5)  }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

isXR = Platform.OS == 'ios' && Expo.Constants.platform.ios.model.toLowerCase().includes('iphone xr')
fontInput = isXR ? wp('4') : wp('5.75%')
const styles = StyleSheet.create({
    inputBarContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: wp('100%'),
        height: hp('10%'),
        backgroundColor: 'transparent',
        top: hp('40%')
    },
    inputContainer: {
        position: 'absolute',
        left: wp('9.5%'), //35
        top: hp('0'), //180
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#171717',
        shadowOpacity: .1,
        borderWidth: 3,
        borderColor: 'black',
        height: hp('6%'), //50
        width: wp('81%') //340
    },
    input: {
        backgroundColor: 'white',
        flex: 1,
        fontSize: fontInput, //30
        left: wp('2'),
        top: hp('0.09%'),
        height: hp('5%'), //44
        width: wp('90') //370
    },
    searchButton: {
        width: wp('13%'), //50
        borderLeftColor: 'black',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderWidth: 3,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
})