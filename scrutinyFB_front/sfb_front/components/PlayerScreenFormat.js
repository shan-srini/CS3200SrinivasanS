import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, PixelRatio, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Platform } from '@unimodules/core';

isX = Platform.OS == 'ios' && Expo.Constants.platform.ios.model.toLowerCase().includes('iphone x')
is7 = Platform.OS == 'ios' && Expo.Constants.platform.ios.model.includes('7')
is8 = Platform.OS == 'ios' && Expo.Constants.platform.ios.model.includes('8')
is6 = Platform.OS == 'ios' && Expo.Constants.platform.ios.model.includes('6')
is5 = Platform.OS == 'ios' && Expo.Constants.platform.ios.model.includes('5')
playerNameSize = (isX) ? wp('6') : wp('7.5')
hemletWidth = (isX) ? wp('20.5') : wp('20.5')
hemletHeight = (isX) ? hp('8.5') : hp('8.5')
hemletWidth = (is7) ? wp('20.5') : hemletWidth
hemletHeight = (is7) ? hp('10.4') : hemletHeight
logoContainerHeight = (isX) ? hp('2') : hp('2%')
logoContainerHeight = (is7) ? hp('1') : logoContainerHeight
fontStatNames = isXR ? wp('5') : wp(7)
fontAgeStat = isXR ? wp('5') : wp(6.5)
fontPosStat = isXR ? wp('5') : wp(6.5)
fontHtStat = isXR ? wp('5') : wp(6.5)
fontWtStat = isXR ? wp('4.8') : wp(6.4)
fontYrTitle = isXR ? wp('6') : wp('7')
fontComparisonTypeTitle = isXR ? wp('5') : wp('6')
leftMesYearTitle = isXR ? wp('14.5') : wp('15.5')
leftComparisonTypeTitle = isXR ? wp('42') : wp('45')
teamNameFontSize = isXR ? wp(5) : wp(5)

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

// isIPad ? console.log("isipad") : console.log("not ipad")
playerNameSize = (isIPad) ? wp('6') : playerNameSize
hemletWidth = (isIPad) ? wp('16') : hemletWidth
hemletHeight = (isIPad) ? hp('5') : hemletHeight
logoContainerHeight = (isIPad) ? hp('1') : logoContainerHeight
fontStatNames = isIPad ? wp('5') : fontStatNames
fontAgeStat = isIPad ? wp('6') : fontAgeStat
fontPosStat = isIPad ? wp('6') : fontPosStat
fontHtStat = isIPad ? wp('6') : fontHtStat
fontWtStat = isIPad ? wp('6') : fontWtStat
fontYrTitle = isIPad ? wp('6') : fontYrTitle
fontComparisonTypeTitle = isIPad ? wp('5') : fontComparisonTypeTitle
leftMesYearTitle = isIPad ? wp('17') : leftMesYearTitle
leftComparisonTypeTitle = isIPad ? wp('50') : leftComparisonTypeTitle
teamNameFontSize = isIPad ? wp(4) : teamNameFontSize

const PlayerScreenFormat = (props) => {
    return (

        <View style={styles(props).page}>
            <View style={styles(props).playerNameBox}>
                <Text style={styles(props).playerName}>{props.displayPlayerName}</Text>
            </View>
            <View style={styles(props).triangleBG}>
                <View style={styles(props).tri1} />
                <View style={styles(props).tri2} />
                <View style={styles(props).teamNameContainer}>
                    <Text style={styles(props).teamNameText}>
                        {props.p_team}
                    </Text>
                </View>
            </View>
            <View style={styles(props).boxAroundLogoContainer}>
                <View style={styles(props).teamLogoContainer}>
                    <View style={styles(props).logoContainer}>
                        <Image
                            source={props.helmetImage}
                            style={{ flex: 1, resizeMode: 'contain', width: hemletWidth, height: hemletHeight }}
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
            </View>
            <Text style={[styles(props).compareTitle]}>Compare</Text>
            <Text style={[styles(props).yearTitle]}>Year</Text>
            <Text style={[styles(props).comparisonTypeTitle]}>Comparison Type</Text>
            <View style={styles(props).backButtonSquare} />
            <View style={styles(props).backButtonCircle} />
            <View style={styles(props).goButtonSquare} />
            <View style={styles(props).goButtonCircle} />
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

const color2 = '#4B4A49';
const lightGray = '#8E8E8E';
compareHeaderPositioning = hp('44')
compareHeaderPositioning = (isIPad) ? hp('42.5') : compareHeaderPositioning
playerNamePositioning = hp('5.5%')
playerNamePositioning = (isIPad) ? hp('2.5') : playerNamePositioning
statNamesPositioning = (isIPad) || (is8) || (is7) || (is6) ? wp('1.5') : wp('3')
//statNamesPositioning = (isIPad) ? wp('1.5') : wp('3')
heightContainerLeft = wp('27.25') //27.3 pro max
heightContainerLeft = (isIPad) ? wp('27.37') : heightContainerLeft
heightContainerBottom = hp('13.7')
heightContainerBottom = (isIPad) ? hp('13.72') : heightContainerBottom
weightContainerBottom = hp('13.7')
weightContainerBottom = (isIPad) ? hp('13.7') : weightContainerBottom
ageBottom = (is8) || (is7) || (is6) || (is5) ? wp('6.5') : wp('5')
htBottom = (is8) || (is7) || (is6) || (is5) ? wp('6.4') : wp('4.9')
wtBottom = (is8) || (is7) || (is6) || (is5) ? wp('6.5') : wp('5')
posBottom = (is8) || (is7) || (is6) || (is5) ? wp('6.5') : wp('5')



const styles = (props) => StyleSheet.create({
    page: {
        backgroundColor: props.color1,
        width: wp('100%'),
        height: hp('130%'),
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
        fontSize: playerNameSize,
        color: 'white',//'#8E8E8E',
        alignSelf: 'center',
        top: playerNamePositioning
    },
    teamNameContainer: {
        top: hp('12.25'),
        height: hp('3.5'),
        width: wp('70'),
    },
    teamNameText: {
        color: "#E4E4E4",
        fontSize: teamNameFontSize,
        fontWeight: '700',
        alignSelf: 'center'
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
            { rotate: '180deg' }
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
        top: hp('16.5'),
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
        height: hp('6.8'),
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
        height: hp('6.9'),
        backgroundColor: color2,
        left: heightContainerLeft,
        bottom: heightContainerBottom,
        borderColor: 'black',
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 1
    },
    wtContainer: {
        width: wp('30'),
        height: hp('6.7'),
        backgroundColor: color2,
        left: wp('27.6'),
        bottom: weightContainerBottom,
        borderWidth: 0
    },
    statNames: {
        fontSize: fontStatNames,
        color: '#D2D2D1',
        fontWeight: '400',
        top: statNamesPositioning,
        left: wp('2')
    },
    agePlayerStat: {
        fontSize: fontAgeStat,
        color: 'white',
        fontWeight: '400',
        bottom: ageBottom,
        left: wp('16.2')
    },
    posPlayerStat: {
        fontSize: fontPosStat,
        color: 'white',
        fontWeight: '400',
        bottom: posBottom,
        left: wp('15.5')
    },
    htPlayerStat: {
        fontSize: fontHtStat,
        color: 'white',
        fontWeight: '400',
        bottom: htBottom,
        left: wp('11.5')
    },
    wtPlayerStat: {
        fontSize: fontWtStat,
        color: 'white',
        fontWeight: '400',
        bottom: wtBottom,
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
        top: compareHeaderPositioning,
        alignSelf: 'center',
        fontWeight: '600'
    },
    yearTitle: {
        position: 'absolute',
        color: 'white',
        fontSize: fontYrTitle,
        top: hp('61'),
        left: leftMesYearTitle,
        fontWeight: '500'
    },
    comparisonTypeTitle: {
        position: 'absolute',
        color: 'white',
        fontSize: fontComparisonTypeTitle,
        top: hp('61.5'),
        left: leftComparisonTypeTitle,
        fontWeight: '500'
    },
    backButton: {
        justifyContent: 'center',
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
        position: 'absolute',
        width: wp('21'),
        height: hp('8'),
        borderRadius: 100 / 2,
        backgroundColor: lightGray,
        top: hp('85'),
        left: wp('7.4'),
    },
    backButtonText: {
        position: 'relative',
        color: 'white',
        fontSize: wp('7.4'),
    },
    goButton: {
        justifyContent: 'center',
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
        borderRadius: 100 / 2,
        backgroundColor: lightGray,
        top: hp('85'),
        left: wp('73'),
    },
    goButtonText: {
        color: 'white',
        fontSize: wp('9'),
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
        top: hp('16.5'),
        left: wp('3'),
        borderColor: 'black',
        borderWidth: 1,
    },
    logoContainer: {
        position: 'relative',
        display: "flex",
        alignItems: 'center',
        alignContent: 'center',
    }
});

export default PlayerScreenFormat;