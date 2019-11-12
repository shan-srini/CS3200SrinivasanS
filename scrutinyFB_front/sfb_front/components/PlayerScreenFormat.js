import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Picker } from 'react-native';

const PlayerScreenFormat = (props) => {

    return (
        <View style={styles.header}>
            <View style={[styles.formatHeader1]} />
            <View style={[styles.formatHeader2]} />
            <View style={[styles.playerPictureBox]} />
            <Text style={[styles.displayPlayerName]}>{ props.displayPlayerName }</Text>
            <Text style={[styles.playerInfo]}>
                {"\n"}{"\n"}
                AGE: {"\n"}
                HEIGHT: {"\n"}
                WEIGHT: {"\n"}
                POS: 
            </Text>
            <Text style={[styles.teamInfo]}>{props.p_team}</Text>
            <Text style={[styles.ageInfo]}>{props.p_age}</Text>
            <Text style={[styles.weightInfo]}>{props.p_weight}</Text>
            <Text style={[styles.heightInfo]}>{props.p_height}</Text>
            <Text style={[styles.posInfo]}>{props.p_pos}</Text>
            <TouchableOpacity style={[styles.fullLog]}>
               <Text style={[styles.dropTitleHeaders]}>Full Game Log</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={[styles.homeLog]}>
               <Text style={[styles.dropTitleHeaders]}>Home Game Log</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={[styles.awayLog]}>
               <Text style={[styles.dropTitleHeaders]}>Away Game Log</Text> 
            </TouchableOpacity>
        </View>
    )
}
// 2017, 2018, 2019
// Home Game Log
// Away Game Log

const styles = StyleSheet.create({ 
    playerPictureBox: {
        position: 'absolute',
        backgroundColor: '#d3d3d3',
        borderColor: 'black',
        borderWidth: 2,
        width: 150,
        height: 150,
        top: 20,
        left: 20,
    },
    displayPlayerName: {
        position: 'absolute',
        fontSize: 21,
        color: 'black',
        fontWeight: '600',
        top: 180,
        left: 20
    },
    teamInfo: {
        position: 'absolute',
        top: 20,
        left: 205,
        fontSize: 22,
        fontWeight: '700',
        color: 'blue'
    },
    weightInfo: {
        position: 'absolute',
        fontSize: 20,
        fontWeight: '500',
        top: 115,
        left: 283,
        color: 'black'
    },
    heightInfo: {
        position: 'absolute',
        fontSize: 20,
        fontWeight: '500',
        top: 93,
        left:279,
        color: 'black'
    },
    posInfo: {
        position: 'absolute',
        fontSize: 20,
        fontWeight: '500',
        top: 138,
        left: 249,
        color: 'black'
    },
    ageInfo: {
        position: 'absolute',
        fontSize: 20,
        fontWeight: '500',
        top: 70,
        left: 247,
        color: 'black'
    },
    playerInfo: {
        position: 'absolute',
        fontSize: 19,
        fontWeight: '600',
        color: 'white',
        left: 200,
        top: 25
    },
    formatHeader1: {
        position: 'absolute',
        backgroundColor: '#add8e6',
        height: 40,
        width: 500,
        top: 172,
        left: 0
    },
    formatHeader2: {
        position: 'absolute',
        backgroundColor: '#add8e6',
        width: 190,
        height: 200,
        top: 0,
        left: 0
    },
    fullLog: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d3d3d3',
        borderWidth: 2,
        width: 138,
        height: 30,
        position: 'absolute',
        top: 212,
        left:0,
        color: 'blue'
    },
    homeLog: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d3d3d3',
        borderWidth: 2,
        width: 138,
        height: 30,
        position: 'absolute',
        top: 212,
        left:138,
        color: 'blue'
    },
    awayLog: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d3d3d3',
        borderWidth: 2,
        width: 138,
        height: 30,
        position: 'absolute',
        top: 212,
        left:276,
        color: 'blue'
    },
    dropTitleHeaders: {
        fontSize: 15,
        fontWeight: '600'
    }
});

export default PlayerScreenFormat;