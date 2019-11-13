import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const HomeScreenFormat = (props) => {
    return (
        <View>

                <View style={[styles.triangle1_under]} />
                <View style={[styles.triangle2_under]} />
                <View style={[styles.triangle1]} />
                <View style={[styles.triangle2]} />
                <View style={[styles.titleBox]}>
                    <Text style={styles.title}>{ props.title }</Text>
                </View>
                <View style={[styles.triangle3_under]} />
                <View style={[styles.triangle3]} />
                <Text style={styles.version}>{ props.version }</Text>
            
        </View>
        
    )
}

const mainThemeColor = '#566347'
const subThemeColor = '#292828'
const titleColor = '#d3d3d3'

const styles = StyleSheet.create({ 
    titleBox: {
        height: hp('-30%')
    },
    title: { 
        position: 'absolute',
        color: titleColor,
        textShadowColor: 'black',
        textShadowRadius: 9,
        textShadowOffset: { width: 2, height: 2 },
        top: hp('1%'),
        fontSize: wp('14%'), //85
        fontWeight: '500',
    },
    titleBox: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: hp('2%'),
        width: wp('100%'),
        height: hp('11%'),
    },
    version: {
        position: 'absolute',
        color: 'white',
        fontWeight: '300',
        fontSize: hp('2%'),
        top: hp('88%'),
        left: wp('80%'),
    },
    header: {
        //flex: 1,
        width: wp('100%'),
        height: hp('14%'),
        //height: hp('100%'),
        //height: 140, 
        backgroundColor: '#e82e2e',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottom: {
        //flex: 1, 
        width: wp('100%'),
        height: hp('-20%'),
        backgroundColor: '#e82e2e',
        alignItems: 'center',
        justifyContent: 'center'
    },
    middle: {
        //flex: 1,
        backgroundColor: 'tan'
    },
    triangle1_under: {
        width: wp('0%'),
        height: hp('0%'),
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: wp('65%'), //260
        borderTopWidth: wp('48%'),
        borderRightColor: 'transparent',
        borderTopColor: subThemeColor,
        position: 'absolute',
        left: wp('0%'),
        top: hp('0%')
    },
    triangle2_under: {
        width: wp('0%'),
        height: hp('0%'),
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: wp('274%'), //1320
        borderTopWidth: wp('45%'),
        borderLeftColor: 'transparent',
        borderTopColor: subThemeColor,
        position: 'absolute',
        right: wp('0%'),
        top: hp('0%')
    },
    triangle3_under: {
        width: wp('0%'),
        height: hp('0%'),
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: wp('330%'), //1650
        borderTopWidth: wp('65.5%'), //275
        borderLeftColor: 'transparent',
        borderTopColor: subThemeColor,
        borderStyle: 'solid',
        position: 'absolute',
        left: wp('-115%'),
        bottom: hp('-88.5%'), //-731
        transform: [
            {rotate: '180deg'}
          ]
    },
    triangle1: {
        width: wp('0%'),
        height: hp('0%'),
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: wp('66%'), //265
        borderTopWidth: hp('20.5%'), //185
        borderRightColor: 'transparent',
        borderTopColor: mainThemeColor,
        position: 'absolute',
        left: wp('0%'),
        top: hp('0%')
    },
    triangle2: {
        width: wp('0%'),
        height: hp('0%'),
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: wp('270%'), //1200
        borderTopWidth: hp('20%'), //180
        borderLeftColor: 'transparent',
        borderTopColor: mainThemeColor,
        position: 'absolute',
        right: wp('0%'),
        top: hp('0%')
    },
    triangle3: {
        width: wp('0%'),
        height: hp('0%'),
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: wp('310%'), //1500
        borderTopWidth: hp('30.5%'), //275
        borderLeftColor: 'transparent',
        borderTopColor: mainThemeColor,
        borderStyle: 'solid',
        position: 'absolute',
        //left: wp('0%'),
        bottom: hp('-100%'),//-740,
        transform: [
            {rotate: '180deg'}
          ]
    }
});

export default HomeScreenFormat;
