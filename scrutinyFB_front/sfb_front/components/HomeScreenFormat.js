import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const HomeScreenFormat = (props) => {
    return (
        <View>
            <View style={styles.header}>
                <View style={[styles.triangle1_under]} />
                <View style={[styles.triangle2_under]} />
                <View style={[styles.triangle1]} />
                <View style={[styles.triangle2]} />
                <Text style={styles.title}>{ props.title }</Text>
            </View>
            <View style={[styles.middle]}/>
            <View style={styles.bottom}>
                <View style={[styles.triangle3_under]} />
                <View style={[styles.triangle3]} />
                <Text style={styles.version}>{ props.version }</Text>
            </View>
        </View>
        
    )
}

const mainThemeColor = '#40e0d0'
const subThemeColor = '#292828'
const titleColor = '#d3d3d3'

const styles = StyleSheet.create({ 
    titleBox: {
        height: heightPercentageToDP('-30%')
    },
    title: { 
        color: titleColor,
        textShadowColor: 'black',
        textShadowRadius: 9,
        textShadowOffset: { width: 5, height: 2 },
        top: 15,
        fontSize: widthPercentageToDP('19%'), //85
        fontWeight: '500',
    },
    version: {
        position: 'absolute',
        color: 'white',
        fontWeight: '300',
        fontSize: 20,
        top: 670,
        left: 340
    },
    header: {
        //flex: 1,
        width: widthPercentageToDP('100%'),
        height: heightPercentageToDP('14'),
        //height: heightPercentageToDP('100%'),
        //height: 140, 
        backgroundColor: '#e82e2e',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottom: {
        //flex: 1, 
        width: widthPercentageToDP('100%'),

        backgroundColor: '#e82e2e',
        alignItems: 'center',
        justifyContent: 'center'
    },
    middle: {
        //flex: 1,
        backgroundColor: 'tan'
    },
    triangle1_under: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 260,
        borderTopWidth: 199,
        borderRightColor: 'transparent',
        borderTopColor: subThemeColor,
        position: 'absolute',
        left: 0,
        top: 0
    },
    triangle2_under: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 1320,
        borderTopWidth: 184,
        borderLeftColor: 'transparent',
        borderTopColor: subThemeColor,
        position: 'absolute',
        right: 0,
        top: 0
    },
    triangle3_under: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 1650,
        borderTopWidth: 275,
        borderLeftColor: 'transparent',
        borderTopColor: subThemeColor,
        borderStyle: 'solid',
        position: 'absolute',
        bottom: -731,
        transform: [
            {rotate: '180deg'}
          ]
    },
    triangle1: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 265,
        borderTopWidth: 185,
        borderRightColor: 'transparent',
        borderTopColor: mainThemeColor,
        position: 'absolute',
        left: 0,
        top: 0
    },
    triangle2: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 1200,
        borderTopWidth: 180,
        borderLeftColor: 'transparent',
        borderTopColor: mainThemeColor,
        position: 'absolute',
        right: 0,
        top: 0
    },
    triangle3: {
        width: 0, 
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 1500,
        borderTopWidth: 275,
        borderLeftColor: 'transparent',
        borderTopColor: mainThemeColor,
        borderStyle: 'solid',
        position: 'absolute',
        bottom: -740,
        transform: [
            {rotate: '180deg'}
          ]
    }
});

export default HomeScreenFormat;
