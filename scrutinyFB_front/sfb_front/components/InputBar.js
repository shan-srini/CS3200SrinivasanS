import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
 
const InputBar = (props) => {
    
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder='Select a player...' 
                style={styles.input}
                onChangeText={(searchInput) => props.textChange(searchInput)}
                onSubmitEditing={(submitRequest) => props.changePageSubmitted(submitRequest)}
                value={props.searchInput}
            />
            {/* <Button 
                title="GO"
                color="green"
                onPress={(submitRequestButton) => props.changePageFromButton(submitRequestButton)}
            /> */}

            <TouchableOpacity style={styles.searchButton}
            onPress={(submitRequestButton) => props.changePageFromButton(submitRequestButton)}>
                <Text style={styles.searchButtonText}>GO</Text>
            </TouchableOpacity>
        </View>
    )  
}

const styles = StyleSheet.create({
    inputContainer: {
        left: 35,
        top: 180,
        backgroundColor: '#F3F3F3',
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#171717',
        shadowOpacity: .1,
        borderWidth: 3,
        borderColor: '#a9a9a9',
        height: 50,
        width: 340
    },
    input: {
        backgroundColor: '#F3F3F3',
        flex: 1,
        fontSize: 30,
        height: 44,
        width: 370
    },
    searchButton: {
        width: 50,
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
        left: 3,
        fontSize: 25,
        fontWeight: '500'
    },
    inputPlaceholder: {
        top: 7,
        right: 80,
        height: 36,
        backgroundColor: 'transparent',
        color: '#a9a9a9',
        fontSize: 25,
        fontWeight: '500'
    }
})

export default InputBar;