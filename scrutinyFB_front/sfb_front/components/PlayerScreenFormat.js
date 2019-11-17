import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Picker, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Platform } from '@unimodules/core';

isX = Platform.OS == 'ios' && Expo.Constants.platform.ios.model.toLowerCase().includes('iphone x')
is7 = Platform.OS == 'ios' && Expo.Constants.platform.ios.model.toLowerCase().includes('iphone 7')
hemletWidth = (isX) ? wp('20.5') : wp('20.5')
hemletHeight = (isX) ? hp('8.5') : hp('8.5')
hemletWidth = (is7) ? wp('20.5') : hemletWidth
hemletHeight = (is7) ? hp('10.4') : hemletHeight
logoContainerHeight = (isX) ? hp('2') : hp('2%') 
logoContainerHeight = (is7) ? hp('1') : logoContainerHeight
fontSpecs = isXR ? wp('4') : wp('5.75%')

const PlayerScreenFormat = (props) => {
    return (
        
        <View style={styles(props).page}>
            <View style={styles(props).playerNameBox}> 
                <Text style={styles(props).playerName}>{props.displayPlayerName}</Text> 
            </View>    
            <View style={styles(props).triangleBG}>
                <View style={styles(props).tri1}/>
                <View style={styles(props).tri2}/>   
            </View>
            <View style={styles(props).boxAroundLogoContainer}>
                <View style={styles(props).teamLogoContainer}>
                    <View style ={styles(props).logoContainer}>
                        <Image 
                            source={props.helmetImage} 
                            style={{ width: hemletWidth, height: hemletHeight }}
                        />
                    </View>
                </View>
            </View>
            <View style={styles(props).statBoxContainer}>
                <View style={styles(props).ageContainer}> 
                    <Text style={styles(props).statNames}>Age: </Text>
                    <Text style={styles(props).agePlayerStat}>{props.p_age}</Text>
                </View>
                <View style={styles(props).posContainer}>
                    <Text style={styles(props).statNames}>Pos: </Text>
                    <Text style={styles(props).posPlayerStat}>{props.p_pos}</Text>
                </View>
                <View style={styles(props).htContainer}>
                    <Text style={styles(props).statNames}>Ht: </Text>
                    <Text style={styles(props).htPlayerStat}>{props.p_height}</Text>
                </View>
                <View style={styles(props).wtContainer}>
                     <Text style={styles(props).statNames}>Wt: </Text>
                     <Text style={styles(props).wtPlayerStat}>{props.p_weight}</Text>
                </View>
                {/* <View style={styles.wholeButtonContainer}>
                    <View style={styles.fullLogContainer}>
                        <TouchableHighlight onPress={()=>alert('pressed')} underlayColor='red' style={[styles.fullLog]}>
                            <Text style={[styles.dropTitleHeaders]}>
                                Full Game Log
                                </Text> 
                        </TouchableHighlight>
                    </View>
                    <View style={styles.homeLogContainer}>
                        <TouchableHighlight style={[styles.homeLog]}>
                            <Text style={[styles.dropTitleHeaders]}>
                                Home Game Log
                                </Text> 
                        </TouchableHighlight>
                    </View>
                    <View style={styles.awayLogContainer}>
                        <TouchableHighlight style={[styles.awayLog]}>
                            <Text style={[styles.dropTitleHeaders]}>
                                Away Game Log
                            </Text> 
                        </TouchableHighlight>
                    </View>
                </View> */}
            </View>
            <Text style={[styles(props).compareTitle]}>Compare</Text>
            <Text style={[styles(props).yearTitle]}>Year</Text>
            <Text style={[styles(props).comparisonTypeTitle]}>Comparison Type</Text>
            <View style={styles(props).backButtonSquare}/>
            <View style={styles(props).backButtonCircle}/>
            <View style={styles(props).goButtonSquare}/>
            <View style={styles(props).goButtonCircle}/>
            <TouchableOpacity style={styles(props).backButton}
                onPress={(backButtonPressed) => props.goBackHome(backButtonPressed)}>
                    <Text style={styles(props).backButtonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles(props).goButton}
                onPress={(goButtonPressed) => props.goStatPage(goButtonPressed)}>
                    <Text style={styles(props).goButtonText}>Go</Text>
            </TouchableOpacity>
        </View>
    )
}

// const color1 = '#6C8FCA'; //this is the main one
// const color1 = '#0A2343'; //this is the main one
const color2 = '#4B4A49';
// const color3 = '#577AAE'; //this is the other main one hehe
const color3 = '#C62032'; //this is the other main one hehe

const lightGray = '#8E8E8E';


const styles = (props) => StyleSheet.create({ 
    page: {
        backgroundColor: props.color1,
        width: wp('100%'),
        height: hp('100%'),
    },
    playerNameBox: {
        alignContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width: wp('100%'),
        height: hp('11.5%'),
        backgroundColor: color2
    },
    playerName: {
        position: 'absolute',
        fontSize: wp('7.5%'),
        color: 'white',//'#8E8E8E',
        alignSelf: 'center',  
        top: hp('5.5%')
    },
    triangleBG: {
        alignContent: 'center',
        alignItems: 'center',
        top: hp(0.1)
    },
    tri1: {
        width: wp('0%'),
        height: hp('0%'),
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: wp('100%'), //1500
        borderTopWidth: hp('20.5%'), //275
        borderLeftColor: 'transparent',
        borderTopColor: props.color3,
        position: 'absolute',
        top: hp('11.6%'),
        transform: [
            {rotate: '180deg'}
          ]
    },
    tri2: {
        width: wp('0%'),
        height: hp('0%'),
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: wp('100%'), //1500
        borderTopWidth: hp('20.5%'), //275
        borderLeftColor: 'transparent',
        borderTopColor: props.color1,
        position: 'absolute',
        top: hp('11.5%'),
    },
    statBoxContainer: {
        position: 'absolute',
        width: wp('58.5'),
        height: hp('14'),
        backgroundColor: color2,
        top: hp('14.75'),
        left: wp('37'),
        borderColor: 'black',
        borderWidth: 1,
    },
    ageContainer: {
        width: wp('27.5'),
        height: hp('6.90'),
        backgroundColor: color2,
        left: wp('0'),
        top: hp('0'),
        borderColor: 'black',
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0
    },
    posContainer: {
        width: wp('27.5'),
        height: hp('6.90'),
        backgroundColor: color2,
        left: wp('0'),
        bottom: hp('0'),
        borderColor: 'black',
        borderRightWidth: 1,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0
    },
    htContainer: {
        width: wp('30.75'),
        height: hp('6.85'),
        backgroundColor: color2,
        left: wp('27.25'),
        bottom: hp('13.75'),
        borderColor: 'black',
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 1
    },
    wtContainer: {
        width: wp('30'),
        height: hp('6.90'),
        backgroundColor: color2, 
        left: wp('27.6'),
        bottom: hp('13.75'),
        borderWidth: 0
    },
    statNames: {
        fontSize:wp(7),
        color: '#D2D2D1',
        fontWeight: '400',
        top: wp('3'),
        left: wp('2')
    },
    agePlayerStat: {
        //fontSize: wp('6.5'),
        fontSize: wp(6.5),
        color: 'white',
        fontWeight: '400',
        bottom: wp('5'),
        left: wp('16.2')
    },
    posPlayerStat: {
        fontSize: wp(6.5),
        color: 'white',
        fontWeight: '400',
        bottom: wp('5'),
        left: wp('15.5')
    },
    htPlayerStat: {
        fontSize: wp(6.5),
        color: 'white',
        fontWeight: '400',
        bottom: wp('4.9'),
        left: wp('11.5')
    },
    wtPlayerStat: {
        fontSize: wp(6.4),
        color: 'white',
        fontWeight: '400',
        bottom: wp('5'),
        left: wp('12.5')
    },
    wholeButtonContainer: {
        position: 'absolute',
        backgroundColor: 'red',
        height: hp('10'),
        width: wp('100'),
        top: hp('17.25'),
        right: wp('-4.7'),
        borderColor: 'black',
        borderWidth: 1,
    },
    fullLogContainer: {
        position: 'absolute',
        backgroundColor: 'transparent',
        height: hp('4.6'),
        width: wp('98.4'),
        top: hp('0.2'),
        left: wp('0.6'),
        borderColor: 'black',
        borderWidth: 1,
    },
    homeLogContainer: {
        position: 'absolute',
        backgroundColor: 'transparent',
        height: hp('4.6'),
        width: wp('49'),
        bottom: hp('0.2'),
        left: wp('0.6'),
        borderColor: 'black',
        borderWidth: 1,
    },
    awayLogContainer: {
        position: 'absolute',
        backgroundColor: 'transparent',
        height: hp('4.6'),
        width: wp('49'),
        bottom: hp('0.2'),
        left: wp('50'),
        borderColor: 'black',
        borderWidth: 1,
    },
    fullLog: {
        alignContent: 'center',
        alignItems: 'center',
        width: wp('98'),
        height: hp('4.4'),
        backgroundColor: lightGray
    },
    homeLog: {
        alignContent: 'center',
        alignItems: 'center',
        width: wp('49'),
        height: hp('4.4'),
        backgroundColor: lightGray
    },
    awayLog: {
        alignContent: 'center',
        alignItems: 'center',
        width: wp('49'),
        height: hp('4.4'),
        backgroundColor: lightGray
    },
    dropTitleHeaders: {
        color: 'white',
        top: hp('0.5'),
        fontSize: wp('5'),
        fontWeight: ('500')
    },
    compareTitle: {
        position: 'absolute',
        color: 'white',
        fontSize: wp('7.5'),
        top: hp('44'),
        alignSelf: 'center', 
        fontWeight: '600'
    },
    yearTitle: {
        position: 'absolute',
        color: 'white',
        fontSize: wp('7'),
        top: hp('61'),
        left: wp('15.5'),
        fontWeight: '500'
    },
    comparisonTypeTitle: {
        position: 'absolute',
        color: 'white',
        fontSize: wp('6'),
        top: hp('61.5'),
        left: wp('45'), 
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
        top: hp('85'),
        left: wp('7.4'),
    },
    backButtonText: {
        color: 'white',
        fontSize: wp('7.4'),
        top: hp('1.6'),
    },
    goButton : {
        alignContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: wp('30'),
        height: hp('8'),
        backgroundColor: 'transparent',
        left: wp('70'),
        top: hp('85'),
    },
    goButtonSquare: {
        position: 'absolute',
        width: wp('21'),
        height: hp('8'),
        backgroundColor: lightGray,
        left: wp('82'),
        top: hp('85'),
    },
    goButtonCircle: {
        position: 'absolute',
        width: wp('21'),
        height: hp('8'),
        borderRadius: 100/2,
        backgroundColor: lightGray,
        top: hp('85'),
        left: wp('73'),
    },
    goButtonText: {
        color: 'white',
        fontSize: wp('9'),
        top: hp('1'),
        left: wp('3.5')
    },
    teamLogoContainer: {
        alignContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: wp('27'),
        height: hp('12.67'),
        backgroundColor: lightGray,
        top: hp('0.55'),
        left: wp('1.25'),
        borderColor: 'black',
        borderWidth: 1,
    },
    teamLogo: {
        position: 'absolute',
        alignSelf: 'center', 
        width: wp('26'),
        height: hp('12.5'),
        backgroundColor: color2,
        top: hp('0.37'),
        borderColor: 'black',
        borderWidth: 1,
    },
    boxAroundLogoContainer: {
        alignContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: wp('30'),
        height: hp('14'),
        backgroundColor: color2,
        top: hp('14.75'),
        left: wp('3'),
        borderColor: 'black',
        borderWidth: 1,
    },
    logoContainer: {
        position: 'relative',
        display: "flex",
        alignItems: 'center',
        top: logoContainerHeight
    }
});

export default PlayerScreenFormat;