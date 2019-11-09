import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const InputBar = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        left: 40,
        top: 180,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#171717',
        shadowOpacity: .1,
        borderWidth: 3,
        borderColor: '#a9a9a9',
        height: 50,
        width: 330
    },
    input: {
        backgroundColor: '#F3F3F3',
        flex: 1,
        fontSize: 30,
        height: 44,
        width: 330
    }
})

export default InputBar;