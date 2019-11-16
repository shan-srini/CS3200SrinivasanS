import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Picker } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage as rf, RFValue } from "react-native-responsive-fontsize";
import { TouchableHighlight } from 'react-native-gesture-handler';


const PlayerScreenFormat = (props) => {

    return (
        <View style={styles.page}>
            <View style={styles.teamNameBox}> 
                <Text style={styles.teamName}>{props.displayPlayerName}</Text> 
            </View>    
            <View style={styles.triangleBG}>
                <View style={styles.tri1}/>
                <View style={styles.tri2}/>   
            </View>
            <View style={styles.teamLogoContainer}>
                <View style={styles.teamLogo}/>
            </View>
            <View style={styles.statBoxContainer}>
                <View style={styles.ageContainer}> 
                    <Text style={styles.statNames}>Age: </Text>
                    <Text style={styles.agePlayerStat}>{props.p_age}</Text>
                </View>
                <View style={styles.posContainer}>
                    <Text style={styles.statNames}>Pos: </Text>
                    <Text style={styles.posPlayerStat}>{props.p_pos}</Text>
                </View>
                <View style={styles.htContainer}>
                    <Text style={styles.statNames}>Ht: </Text>
                    <Text style={styles.htPlayerStat}>{props.p_height}</Text>
                </View>
                <View style={styles.wtContainer}>
                     <Text style={styles.statNames}>Wt: </Text>
                     <Text style={styles.wtPlayerStat}>{props.p_weight}</Text>
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
            <Text style={[styles.compareTitle]}>Compare</Text>
            <Text style={[styles.yearTitle]}>Year</Text>
            <Text style={[styles.comparisonTypeTitle]}>Comparison Type</Text>
            <View style={styles.backButtonSquare}/>
            <View style={styles.backButtonCircle}/>
            <View style={styles.goButtonSquare}/>
            <View style={styles.goButtonCircle}/>
            <TouchableOpacity style={styles.backButton}
                onPress={(backButtonPressed) => props.goBackHome(backButtonPressed)}>
                    <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.goButton}
                onPress={(goButtonPressed) => props.goStatPage(goButtonPressed)}>
                    <Text style={styles.goButtonText}>Go</Text>
            </TouchableOpacity>
        </View>
    )
}

const color1 = '#6C8FCA'; //this is the main one
const color2 = '#4B4A49';
const color3 = '#577AAE'; //this is the other main one hehe

const lightGray = '#8E8E8E';

const styles = StyleSheet.create({ 
    page: {
        backgroundColor: color1,
        width: wp('100%'),
        height: hp('100%'),
    },
    teamNameBox: {
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
    teamName: {
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
        borderTopColor: color3,
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
        borderTopColor: color1,
        position: 'absolute',
        top: hp('11.5%'),
    },
    teamLogoContainer: {
        alignContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: wp('28.5'),
        height: hp('13.5'),
        backgroundColor: lightGray,
        top: hp('15'),
        left: wp('4'),
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
        borderRightWidth: 1,
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
        width: wp('30.25'),
        height: hp('6.90'),
        backgroundColor: color2,
        left: wp('27.7'),
        bottom: hp('13.75'),
        borderColor: 'black',
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0
    },
    wtContainer: {
        width: wp('30.25'),
        height: hp('6.90'),
        backgroundColor: color2,
        left: wp('27.7'),
        bottom: hp('13.75'),
        borderWidth: 0
    },
    statNames: {
        fontSize: rf(3.5),
        color: '#D2D2D1',
        fontWeight: '400',
        top: wp('3'),
        left: wp('2')
    },
    agePlayerStat: {
        //fontSize: wp('6.5'),
        fontSize: rf(3.4),
        color: 'white',
        fontWeight: '400',
        bottom: wp('5'),
        left: wp('16.2')
    },
    posPlayerStat: {
        fontSize: rf(3.4),
        color: 'white',
        fontWeight: '400',
        bottom: wp('5'),
        left: wp('15.5')
    },
    htPlayerStat: {
        fontSize: rf(3.4),
        color: 'white',
        fontWeight: '400',
        bottom: wp('4.9'),
        left: wp('11.5')
    },
    wtPlayerStat: {
        fontSize: rf(3.2),
        color: 'white',
        fontWeight: '400',
        bottom: wp('5'),
        left: wp('12.5')
    },
    wholeButtonContainer: {
        position: 'absolute',
        backgroundColor: color2,
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
        backgroundColor: 'lightGray'
    },
    homeLog: {
        alignContent: 'center',
        alignItems: 'center',
        width: wp('49'),
        height: hp('4.4'),
        backgroundColor: 'lightGray'
    },
    awayLog: {
        alignContent: 'center',
        alignItems: 'center',
        width: wp('49'),
        height: hp('4.4'),
        backgroundColor: 'lightGray'
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
    }
});

export default PlayerScreenFormat;