import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
 
const InputBar2 = (props) => {
    return (
        <View style={[styles.inputBarContainer]}>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Select a player...' 
                    style={styles.input}
                    onChangeText={(searchInput) => props.textChange(searchInput)}
                    //onSubmitEditing={(submitRequest) => props.changePageSubmitted(submitRequest)}
                    value={props.searchInput}
                />
            </View>
        </View>
    )  
}

const styles = StyleSheet.create({
    inputBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: wp('100%'),
        height: hp('10%'),
        backgroundColor: 'transparent',
        top: hp('48.5%')
    },
    inputContainer: {
        position: 'absolute',
        left: wp('8%'), //35
        top: hp('2%'), //180
        backgroundColor: '#F3F3F3',
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#171717',
        shadowOpacity: .1,
        borderWidth: 3,
        borderColor: '#a9a9a9',
        height: hp('6%'), //50
        width: wp('85%') //340
    },
    input: {
        backgroundColor: '#F3F3F3',
        flex: 1,
        fontSize: wp('7.5%'), //30
        top: hp('0.25%'),
        height: hp('5%'), //44
        width: wp('90') //370
    },
    searchButton: {
        width: wp('13%'), //50
        borderLeftColor: '#a9a9a9',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderWidth: 3,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchButtonText: {
        color: '#228C22',
        left: wp('0.5'), //3
        fontSize: wp('6.5'), //25
        fontWeight: '500'
    }
})

export default InputBar2;