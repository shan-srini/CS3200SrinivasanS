import React from 'react';
import { StyleSheet, Dimensions, PixelRatio, Text, View, TextInput, TouchableOpacity, Button, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Constants from 'expo-constants';
import { Platform } from '@unimodules/core';

// For iPad detection
windowSize = Dimensions.get('window');
PR = PixelRatio.get();
width = windowSize.width;
height = windowSize.height;
adjustedWidth = width * PR;
adjustedHeight = height * PR;
isIPad = false;
if (PR < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    isIPad = true;
} else if (PR === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)) {
    isIPad = true;
}
const boltHeight = hp('5')
boltWidth = wp('5')
boltWidth = (isIPad) ? wp('3') : boltWidth

const InputBar = (props) => {



    return (
        <View style={[styles.inputBarContainer]}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Select a player ...'
                    style={styles.input}
                    onChangeText={(searchInput) => props.textChange(searchInput)}
                    onSubmitEditing={(submitRequest) => props.changePageSubmitted(submitRequest)}
                    value={props.searchInput}
                />
                <TouchableOpacity style={styles.searchButton}
                    onPress={(submitRequestButton) => props.changePageFromButton(submitRequestButton)}>
                    <Image
                        source={require('./lightningBoltLogo.png')}
                        style={{ width: boltWidth, height: boltHeight }}
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