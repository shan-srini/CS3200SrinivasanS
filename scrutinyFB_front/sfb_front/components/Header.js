import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <View style={[styles.triangle1_under]} />
            <View style={[styles.triangle2_under]} />
            <View style={[styles.triangle3_under]} />
            <View style={[styles.triangle1]} />
            <View style={[styles.triangle2]} />
            <View style={[styles.triangle3]} />
            <Text style={styles.title}>{ props.title }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#d3d3d3',
        fontSize: 50,
        fontWeight: '500',
    },
    version: {
        position: 'absolute',
        color: '#d3d3d3',
        fontSize: 20,
        fontWeight: '100',
    },
    header: {
        backgroundColor: '#3E505B',
        height: 130,
        alignItems: 'center',
        justifyContent: 'center'
    },
    triangle1_under: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 260,
        borderTopWidth: 199,
        borderRightColor: 'transparent',
        borderTopColor: '#8AB0AB',
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
        borderTopColor: '#8AB0AB',
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
        borderTopColor: '#8AB0AB',
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
        borderTopColor: '#3E505B',
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
        borderTopColor: '#3E505B',
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
        borderTopColor: '#3E505B',
        borderStyle: 'solid',
        position: 'absolute',
        bottom: -740,
        transform: [
            {rotate: '180deg'}
          ]
    }
});

export default Header;
