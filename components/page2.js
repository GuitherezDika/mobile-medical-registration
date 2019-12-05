import React, {Component } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Button } from 'native-base';


export default class page2 extends Component {

    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={styles2.container}>
                <Button title='Front' onPress={() => navigate('Home')}/>
                <Text>sdfghjk</Text>
            </View>
        )
    }
}

const styles2 = StyleSheet.create ({

    container : {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems:'center'
    },

    inputBox: {
        width: 300,
        backgroundColor:'rgba(255, 255, 255, 0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color:'#ffffff',
        marginVertical: 10
    },

    button: {

        width:300,
        
        backgroundColor:'#1c313a',
        
        borderRadius: 25,
        
        marginVertical: 10,
        
        paddingVertical: 13
        
    },
        
    buttonText: {
        
        fontSize:16,
        
        fontWeight:'500',
        
        color:'#ffffff',
        
        textAlign:'center'
        
    }
})
