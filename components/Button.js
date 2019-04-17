import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import EventScreen from '../screens/EventScreen';
import SearchScreen from '../screens/SearchScreen';

export default class Button extends React.Component {

    render(){
        return (
        
        <TouchableOpacity
       // onPress={() => console.log('pressed')
            //this.props.navigation.navigate('Details')}
        style ={styles.buttonBacking}>
        <Text style={styles.buttonText}>Learn More</Text>

         </TouchableOpacity>

        );
    }

}



const styles = StyleSheet.create({

    buttonBacking: {
        backgroundColor: '#F5EBD2',
        width: 112,
        height: 33,
        marginLeft: 250,
        marginTop: -20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        fontFamily: 'poppins',
        fontSize: 12,
        color: 'black'

    }

});