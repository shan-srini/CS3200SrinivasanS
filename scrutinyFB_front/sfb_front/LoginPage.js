import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import { Platform } from '@unimodules/core';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class LoginPage extends React.Component {
    constructor () {
        super();
        this.state= { 
            userName: '',
            password: '',
            newPassword: '',
            changePassword: false
        };
    }

    updatePassword(isPressed) {
        this.setState({changePassword: false})
        if(isPressed == 'ChangePassword') {
          this.setState({changePassword: true})
        }
    }

    submitLogin() {
        //Learn more about this, looks like you're creating a new object of HTML formdata and then just putting things
        //in that body
        if(this.state.changePassword) {
        var formData = new FormData()
        formData.append('username', this.state.userName)
        formData.append('password', this.state.password)
        fetch('https://scrutiny-fb-api.herokuapp.com/login', {
            method: 'POST',
            body: formData
        })
        .then(res => {})
        .then(content => {})
        .catch((error) => {
            console.log(error)
          })
        }
        else {
            var formData = new FormData()
            formData.append('username', this.state.userName)
            formData.append('password', this.state.password)
            formData.append('newPassword', this.state.newPassword)
            fetch('https://scrutiny-fb-api.herokuapp.com/login', {
                method: 'POST',
                body: formData
            })
            .then(res => {})
            .then(content => {})
            .catch((error) => {
                console.log(error)
            })
        }
        }

    goHome() {
        const {navigate} = this.props.navigation;
        navigate('Home');
    }

    goToFavorites() {
        const {navigate} = this.props.navigation;
        const {params} = this.props.navigation.state
        navigate('FavoritesPage', {userName: this.state.userName, allPlayerNames: params.allPlayerNames});
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
                {this.state.changePassword == true ?
                <View>
                     <View style={[styles.newPasswordContainer]}> 
                        <TextInput 
                        placeholder='Enter New Password' 
                        style={styles.newPasswordInput}
                        onChangeText={(newPasswordInput) => this.setState({newPassword: newPasswordInput})}
                        value={this.state.newPassword}
                        />
                    </View>
                    <View style={styles.instructionContainer}>
                        <Text style={styles.instructionText}> 
                            Enter username and current password in textboxes above, enter new password in textbox below
                            and hit submit when ready to change password. 
                        </Text>
                    </View>
                </View>
                    :
                null}
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
                    <TouchableHighlight 
                        onPress={()=>this.updatePassword('ChangePassword')} 
                        underlayColor='#6e6e6e' 
                        style={(this.state.changePassword) ? [styles.changePasswordHighlight] : [styles.changePasswordContainer]}>
                        <Text style={[styles.changePasswordText]}>
                            Change Password
                        </Text> 
                    </TouchableHighlight>
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
    },
    changePasswordContainer: {
        alignContent: 'center',
        alignItems: 'center',
        top: hp('47'),
        left: wp('53'),
        width: wp('43'),
        height: hp('4.4'),
        backgroundColor: lightGray,
        borderColor: 'black'
    },
    changePasswordHighlight: {
        alignContent: 'center',
        alignItems: 'center',
        top: hp('47'),
        left: wp('53'),
        width: wp('43'),
        height: hp('4.4'),
        backgroundColor: lightGray,
        borderColor: 'black'
    },
    changePasswordText: {
        color: 'white',
        fontSize: wp('4.5'),
        top: hp('0.8'),
        fontWeight: ('500')
    },
    newPasswordContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: wp('96%'),
        height: hp('4%'),
        backgroundColor: 'transparent',
        top: hp('65%'),
    },
    newPasswordInput: {
        backgroundColor: 'white',
        flex: 1,
        fontSize: fontInput, //30
        left: wp('2'),
        top: hp('0.09%'),
        height: hp('5%'), //44
        width: wp('90') //370
    },
    instructionContainer: {
        position: 'absolute',
        alignItems: 'center',
        width: wp('68'),
        height: hp('12'),
        top: hp('72'),
        alignSelf: 'center',
    },
    instructionText: {
        color: '#454545',
        fontSize: wp('4')
    }
})