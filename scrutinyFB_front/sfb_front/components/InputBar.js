import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
 
const InputBar = (props) => {
    
    return (
        <View style={[styles.inputBarContainer]}>
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
                    {/* <Image
                      style={{width: 50, height: 50}}
                      source={{uri: 'https://imgur.com/9An5ON3'}}
                    /> */}
                </TouchableOpacity>
            </View>
        </View>
    )  
}

const styles = StyleSheet.create({
    inputBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: widthPercentageToDP('100%'),
        height: heightPercentageToDP('10%'),
        backgroundColor: 'transparent',
        top: heightPercentageToDP('40%')
    },
    inputContainer: {
        position: 'absolute',
        left: widthPercentageToDP('8%'), //35
        top: heightPercentageToDP('2%'), //180
        backgroundColor: '#F3F3F3',
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#171717',
        shadowOpacity: .1,
        borderWidth: 3,
        borderColor: '#a9a9a9',
        height: heightPercentageToDP('6%'), //50
        width: widthPercentageToDP('85%') //340
    },
    input: {
        backgroundColor: '#F3F3F3',
        flex: 1,
        fontSize: widthPercentageToDP('7.5%'), //30
        top: heightPercentageToDP('0.25%'),
        height: heightPercentageToDP('5%'), //44
        width: widthPercentageToDP('90') //370
    },
    searchButton: {
        width: widthPercentageToDP('13%'), //50
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
        left: widthPercentageToDP('0.5'), //3
        fontSize: widthPercentageToDP('6.5'), //25
        fontWeight: '500'
    }
})

export default InputBar;