import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Platform } from '@unimodules/core';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class LoginPage extends React.Component {
    constructor () {
        super();
        this.state= { 
            userName: '',
            password: ''
        };
    }

    submitLogin() {
        fetch('https://scrutiny-fb-api.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                'userName': this.state.userName,
                'password': this.state.password
            })
        })
        .catch((error) => {
            console.log(error)
          })
        }

    goHome() {
        const {navigate} = this.props.navigation;
        navigate('Home');
    }

    goToFavorites() {
        const {navigate} = this.props.navigation;
        navigate('FavoritesPage', {userName: this.state.userName});
      }

    static navigationOptions = {
        header: null
      };

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.logInText}>
                        Log in
                    </Text>
                    <Text style={styles.signUpText}>
                        Sign up
                    </Text>
                </View>
                <View style={styles.paragraph}>
                    <Text style={styles.paragraphText}>
                        Enter your username and password. If you do not already have an
                        account, one will be created for you.
                    </Text>
                </View>
                <View style={[styles.usernameContainer]}> 
                    <TextInput 
                        placeholder='Enter Username' 
                        style={styles.input}
                        onChangeText={(usernameInput) => this.setState({userName: usernameInput})}
                        value={this.state.userName}
                        // onSubmitEditing={(submitRequest) => props.changePageSubmitted(submitRequest)}
                        // value={props.searchInput}
                    />
                </View>
                <View style={[styles.passWordContainer]}> 
                    <TextInput 
                        placeholder='Enter Password' 
                        style={styles.input}
                        onChangeText={(passwordInput) => this.setState({password: passwordInput})}
                        value={this.state.password}
                        secureTextEntry={true}
                        // onSubmitEditing={(submitRequest) => props.changePageSubmitted(submitRequest)}
                        // value={props.searchInput}
                    />
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.submitButton} onPress={() => {this.goToFavorites(); this.submitLogin()}}>
                            <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.backButtonSquare}/>
                <View style={styles.backButtonCircle}/>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => this.goHome()}>
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
    usernameContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: wp('96%'),
        height: hp('4%'),
        backgroundColor: 'transparent',
        top: hp('40%'),
        
    },
    passWordContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: wp('96%'),
        height: hp('4%'),
        backgroundColor: 'transparent',
        top: hp('46%'),
        
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
        width: wp('70%'), //340,
        borderWidth: 2
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
    submitButton: {
        width: wp('70'),
        height: hp('4'),
        backgroundColor: 'grey',
        alignSelf: 'center',
        borderWidth: 1, 
        borderColor: '#484848',
        alignItems: 'center',
        top: hp('52')
    },
    submitText: {
        color: 'white',
        fontSize: wp('6'),
        fontWeight: '500'
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
        top: hp('81'),
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
    logInText: {
        color: '#608ebf',
        fontSize: wp('14'),
        fontWeight: '500'
    },
    signUpText: {
        color: '#73a7de',
        fontSize: wp('14'),
        fontWeight: '500'
    },
    paragraph: {
        position: 'absolute',
        alignItems: 'center',
        width: wp('68'),
        height: hp('12'),
        top: hp('28'),
        alignSelf: 'center'
    },
    paragraphText: {
        color: '#454545',
        fontSize: wp('4')
    }
})