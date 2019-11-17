import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Constants from 'expo-constants';
import { Platform } from '@unimodules/core';


const InputBar = (props) => {
    
    const boltHeight = hp('5')
    const boltWidth = wp('5')
    return (
        <View style={[styles.inputBarContainer]}>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Select a player or team ...' 
                    style={styles.input}
                    onChangeText={(searchInput) => props.textChange(searchInput)}
                    onSubmitEditing={(submitRequest) => props.changePageSubmitted(submitRequest)}
                    value={props.searchInput}
                />
                <TouchableOpacity style={styles.searchButton}
                onPress={(submitRequestButton) => props.changePageFromButton(submitRequestButton)}>
                    <Image
                        source={require('./lightningBoltLogo.png')}  
                        style={{ width: boltWidth, height: boltHeight  }}
                    />
                </TouchableOpacity>
                    
            </View>
        </View>
    )  
}
isXR = Platform.OS == 'ios' && Expo.Constants.platform.ios.model.toLowerCase().includes('iphone xr')
fontInput = isXR ? wp('4') : wp('5.75%')
const styles = StyleSheet.create({
    inputBarContainer: {
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

export default InputBar;