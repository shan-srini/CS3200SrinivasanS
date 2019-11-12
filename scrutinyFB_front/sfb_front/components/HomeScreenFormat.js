import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
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

const mainThemeColor = '#2a4b69'
const subThemeColor = '#292828'
const titleColor = '#d3d3d3'

const styles = StyleSheet.create({ 
    titleBox: {
        height: heightPercentageToDP('-30%')
    },
    title: { 
        position: 'absolute',
        color: titleColor,
        textShadowColor: 'black',
        textShadowRadius: 9,
        textShadowOffset: { width: 2, height: 2 },
        top: heightPercentageToDP('1%'),
        fontSize: widthPercentageToDP('14%'), //85
        fontWeight: '500',
    },
    titleBox: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: heightPercentageToDP('2%'),
        width: widthPercentageToDP('100%'),
        height: heightPercentageToDP('11%'),
    },
    version: {
        position: 'absolute',
        color: 'white',
        fontWeight: '300',
        fontSize: heightPercentageToDP('2%'),
        top: heightPercentageToDP('74%'),
        left: widthPercentageToDP('80%'),
    },
    header: {
        //flex: 1,
        width: widthPercentageToDP('100%'),
        height: heightPercentageToDP('14%'),
        //height: heightPercentageToDP('100%'),
        //height: 140, 
        backgroundColor: '#e82e2e',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottom: {
        //flex: 1, 
        width: widthPercentageToDP('100%'),
        height: heightPercentageToDP('-20%'),
        backgroundColor: '#e82e2e',
        alignItems: 'center',
        justifyContent: 'center'
    },
    middle: {
        //flex: 1,
        backgroundColor: 'tan'
    },
    triangle1_under: {
        width: widthPercentageToDP('0%'),
        height: heightPercentageToDP('0%'),
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: widthPercentageToDP('65%'), //260
        borderTopWidth: widthPercentageToDP('48%'),
        borderRightColor: 'transparent',
        borderTopColor: subThemeColor,
        position: 'absolute',
        left: widthPercentageToDP('0%'),
        top: heightPercentageToDP('0%')
    },
    triangle2_under: {
        width: widthPercentageToDP('0%'),
        height: heightPercentageToDP('0%'),
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: heightPercentageToDP('140%'), //1320
        borderTopWidth: widthPercentageToDP('45%'),
        borderLeftColor: 'transparent',
        borderTopColor: subThemeColor,
        position: 'absolute',
        right: widthPercentageToDP('0%'),
        top: heightPercentageToDP('0%')
    },
    triangle3_under: {
        width: widthPercentageToDP('0%'),
        height: heightPercentageToDP('0%'),
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: widthPercentageToDP('330%'), //1650
        borderTopWidth: heightPercentageToDP('31%'), //275
        borderLeftColor: 'transparent',
        borderTopColor: subThemeColor,
        borderStyle: 'solid',
        position: 'absolute',
        left: widthPercentageToDP('-115%'),
        bottom: heightPercentageToDP('-88.5%'), //-731
        transform: [
            {rotate: '180deg'}
          ]
    },
    triangle1: {
        width: widthPercentageToDP('0%'),
        height: heightPercentageToDP('0%'),
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: widthPercentageToDP('66%'), //265
        borderTopWidth: heightPercentageToDP('20.5%'), //185
        borderRightColor: 'transparent',
        borderTopColor: mainThemeColor,
        position: 'absolute',
        left: widthPercentageToDP('0%'),
        top: heightPercentageToDP('0%')
    },
    triangle2: {
        width: widthPercentageToDP('0%'),
        height: heightPercentageToDP('0%'),
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: widthPercentageToDP('270%'), //1200
        borderTopWidth: heightPercentageToDP('20%'), //180
        borderLeftColor: 'transparent',
        borderTopColor: mainThemeColor,
        position: 'absolute',
        right: widthPercentageToDP('0%'),
        top: heightPercentageToDP('0%')
    },
    triangle3: {
        width: widthPercentageToDP('0%'),
        height: heightPercentageToDP('0%'),
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: widthPercentageToDP('310%'), //1500
        borderTopWidth: heightPercentageToDP('30.5%'), //275
        borderLeftColor: 'transparent',
        borderTopColor: mainThemeColor,
        borderStyle: 'solid',
        position: 'absolute',
        //left: widthPercentageToDP('0%'),
        bottom: heightPercentageToDP('-100%'),//-740,
        transform: [
            {rotate: '180deg'}
          ]
    }
});

export default HomeScreenFormat;
