import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const headerWidth = wp('150')
const headerHeight = hp('52')

const HomeScreenFormat = (props) => {
    return (
        <View>
            {/* <View style={[styles.triangle1]} />
                <View style={[styles.triangle2]} /> */}
            <View style={[styles.headerContainer]}>
                {/* <Image
                        source={require('./MainHeader.png')}  
                        style={{ width: headerWidth, height: headerHeight  }}
                        // resizeMode='contain'
                         /> */}
                <View style={[styles.inputContainer]} />
                <View style={[styles.inputContainerRect1]} />
                <View style={[styles.inputContainerRect2]} />
                <View style={[styles.inputContainerCirc1]} />
                <View style={[styles.inputContainerCirc2]} />
                <View style={[styles.inputContainerCirc3]} />
                <View style={[styles.inputContainerCirc4]} />
                <View style={[styles.rectangleDesign1]} />
                <View style={[styles.rectangleDesign2]} />
                <View style={[styles.rectangleDesign3]} />
                <View style={[styles.rectangleDesign4]} />
            </View>
            {/* <View style={[styles.titleBox]}>
                    <Text style={styles.title}>{ props.title }</Text>
                </View> */}
            {/* <Text style={styles.version}>{ props.version }</Text> */}
            <Text style={styles.version}>v 1.0.0</Text>
        </View>

    )
}

const mainThemeColor = '#6C8FCA'
const titleColor = '#40403F'

const styles = StyleSheet.create({
    titleBox: {
        height: hp('-30%')
    },
    title: {
        position: 'absolute',
        color: titleColor,
        fontFamily: 'Futura',
        top: hp('1%'),
        fontSize: wp('19%'), //85
        fontWeight: '500',
    },
    titleBox: {
        backgroundColor: 'transparent',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: hp('10%'),
        width: wp('100%'),
        height: hp('11%'),
    },
    headerContainer: {
        position: 'absolute',
        alignContent: 'center',
        alignItems: 'center',
        top: hp('-15'),
        left: wp('-3.5'),
        width: wp('100%'),
        height: hp('30'),
        backgroundColor: ('transparent')
    },
    inputContainer: {
        position: 'absolute',
        backgroundColor: mainThemeColor,
        top: hp('53.5'),
        left: wp('8'),
        width: wp('90.5%'),
        height: hp('54%'),
    },
    inputContainerCirc1: {
        position: 'absolute',
        width: wp('10'),
        height: hp('4.5'),
        borderRadius: 100 / 2,
        backgroundColor: mainThemeColor,
        top: hp('51.25'),
        left: wp('8'),
    },
    inputContainerCirc2: {
        position: 'absolute',
        width: wp('10'),
        height: hp('4.5'),
        borderRadius: 100 / 2,
        backgroundColor: mainThemeColor,
        top: hp('51.25'),
        left: wp('88.5'),
    },
    inputContainerCirc3: {
        position: 'absolute',
        width: wp('10'),
        height: hp('4.5'),
        borderRadius: 100 / 2,
        backgroundColor: mainThemeColor,
        top: hp('105'),
        left: wp('88.5'),
    },
    inputContainerCirc4: {
        position: 'absolute',
        width: wp('10'),
        height: hp('4.5'),
        borderRadius: 100 / 2,
        backgroundColor: mainThemeColor,
        top: hp('105'),
        left: wp('8'),
    },
    inputContainerRect1: {
        position: 'absolute',
        width: wp('82'),
        height: hp('4.5'),
        backgroundColor: mainThemeColor,
        top: hp('51.25'),
        left: wp('12.25'),
    },
    inputContainerRect2: {
        position: 'absolute',
        width: wp('82'),
        height: hp('4.5'),
        backgroundColor: mainThemeColor,
        top: hp('105'),
        left: wp('12.25'),
    },
    rectangleDesign1: {
        position: 'absolute',
        width: wp('40'),
        height: hp('2.25'),
        backgroundColor: '#40403F',
        top: hp('37'),
        left: wp('88'),
    },
    rectangleDesign2: {
        position: 'absolute',
        width: wp('40'),
        height: hp('2.25'),
        backgroundColor: '#EE3C24',
        top: hp('40.25'),
        left: wp('70'),
    },
    rectangleDesign3: {
        position: 'absolute',
        width: wp('40'),
        height: hp('2.25'),
        backgroundColor: '#40403F',
        top: hp('43.5'),
        left: wp('75'),
    },
    rectangleDesign4: {
        position: 'absolute',
        width: wp('40'),
        height: hp('2.25'),
        backgroundColor: '#40403F',
        top: hp('46.75'),
        left: wp('94'),
    },
    version: {
        position: 'absolute',
        fontSize: wp('4'),
        color: '#3b3a3a',
        top: hp('96'),
        left: wp('80')

    }
});

export default HomeScreenFormat;
