import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';
import EventScreen from '../screens/EventScreen';
import SearchScreen from '../screens/SearchScreen';

export default class Playlist extends React.Component {

    constructor(props){
        super(props)
     
      }

    render(){
        return (
        
        <TouchableOpacity style={{marginLeft:10, marginTop:10}}>        

        <Image style={{height:128,width:128}}
                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/images/sqpattern1.png')}
                />
        <View style={styles.card}>
        </View>

        <Text style={{marginTop: 80, marginLeft:10,fontFamily: 'poppins', color: 'white', position:'absolute'}}>Feeling green</Text>

         </TouchableOpacity>


    );
    }

}



const styles = StyleSheet.create({

    card: {
        width: 128,
        height: 128,
        borderRadius: 8,
        backgroundColor: '#175B54',
        opacity: .85,
        position: 'absolute'

    },

    buttonText: {
        fontFamily: 'poppins',
        fontSize: 12,
        color: 'black'

    }

});