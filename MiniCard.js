import React from 'react';
import { Text, Image, Button, TouchableOpacity, StyleSheet, View } from 'react-native';

const testImg = 'http://www.geek-end.com/wp-content/uploads/2019/02/03.jpg';

export default class MiniCard extends React.Component {

render(){
        return (

        <View style ={styles.card}>

                <View style={styles.overlay}>
                    
                <Image style={styles.cardImage} source={{uri: testImg}}>
                </Image>

                </View>



            <View style={{justifyContent: 'space-evenly'}}>
                <View style={{marginLeft:20, top:40}}>

                <Text style={styles.cardTitle}>
title 

                            </Text>
                <Text style={styles.subText}>
                            This event starts in 2 hours
                            </Text>

            

                        <Text style={styles.bodyText}>
                        Posted by: Bull Street Labs
                        </Text>
                        
                        <Text style={styles.bodyText}>
                        15 min away (0.5 mi)
                        </Text>

            </View>
 </View>

</View>

            );
    }

}

const styles = StyleSheet.create({

    card: {
        backgroundColor: 'white',
        width: 278,
        height: 200,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset:{
            width:3,
            height:3
        },
        borderRadius: 8,
        marginLeft: 10,
        marginTop: 20
    },

    overlay: {
        
        backgroundColor: '#000',
        width: 278,
        height: 94,
        position: 'absolute'
      },

    cardTitle: {
        fontFamily: 'poppins-bold',
        fontSize: 20,
        color: 'white'
    },

    bodyText: {
        fontFamily: 'poppins',
        fontSize: 12,
        color: 'black',
        marginTop: 10
        
    },

    subText: {
        fontFamily: 'poppins',
        fontSize: 10,
        color: 'white'
        },

    cardImage: {
        width: '100%',
        height:94,
        position:'absolute',
        resizeMode:'cover',
        opacity: .75
    }



});

