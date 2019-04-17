import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, View } from 'react-native';

const testImg = 'http://www.savannah.com/wp-content/uploads/Savannah-Doggie-Carnival-Races-700x350.jpg';

export default class Card extends React.Component {

render(){
        return (

        <TouchableOpacity style ={styles.card}>
                
            <Image style={styles.cardImage} source={{uri: testImg}}>
            </Image>

            <Text style={styles.cardTitle}>fuck</Text>

            <Text style={styles.orgText}>
            Posted by: Savannah
            </Text>
            
            <Text style={styles.cardText}>
            Hello here is my text!
            </Text>

         </TouchableOpacity>

            );
    }

}

const styles = StyleSheet.create({

    card: {
        backgroundColor: 'white',
        width: '100%',
        height: 300,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset:{
            width:3,
            height:3
        },
        marginBottom: 3,
    },

    cardTitle: {
        fontFamily: 'poppins-bold',
        fontSize: 16,
        color: '#584421',
        padding: 25,
        marginBottom: 1
    },

    cardText: {
        fontFamily: 'poppins',
        fontSize: 12,
        color: 'black',
        padding: 25,
        marginTop: -45

    },

    orgText: {
        fontFamily: 'poppins-bold',
        fontSize: 12,
        color: 'black',
        padding: 25,
        lineHeight: 10,
        marginTop: -45
    },

    cardImage: {
        marginTop: 5,
        width: '100%',
        height:150,
        resizeMode:'cover'
    }

/*

	// cardImage:{
//		width, height, resizeMode
	// }

//	cardText:{
	//	padding, fontSize…
//	}

} */

});

