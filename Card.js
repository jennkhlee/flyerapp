import React from 'react';
import { Text, Image, Button, TouchableOpacity, StyleSheet, View } from 'react-native';

const testImg = 'http://www.geek-end.com/wp-content/uploads/2019/02/03.jpg';

export default class Card extends React.Component {

render(){
        return (

    <View style ={styles.card}>
                
        <View style={styles.overlay}>
        <Image style={styles.cardImage} source={{uri: testImg}}>
        </Image>
        </View>

        <Text style={styles.titleText}>Savannh Geekend 2019</Text>


            <View style={{marginTop:30, marginLeft: 20}}>

                <View style={{flexDirection: 'row'}}>

                    <Image style={{borderRadius: 10, width: 17, height: 17, marginTop:2, marginLeft: 5}}
                        source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/organizations/stepup.png')}
                        />
                        <Text style={styles.orgText}>By: Bull Street Labs</Text>
                </View>

                <Text style={styles.cardText}>
                Geekend! Bringing together entrepreneurs, technologists, creatives, makers, leaders and change agents from Savannah and beyond.
                </Text>

                <Text style={styles.cardText}>Date: July 12</Text>

            </View>

    </View>


            );
    }

}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'poppins-bold',
        marginLeft: 20,
        marginTop:50
      },
    
    
    
      card: {
          backgroundColor: 'white',
          width: 300,
          height: 280,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowRadius: 5,
          shadowOffset:{
              width:3,
              height:3
          },
          marginBottom: 10,
          marginTop: 10,
          marginLeft: 10
      },
    
      cardTitle: {
          fontFamily: 'poppins-bold',
          fontSize: 16,
          color: '#584421',
          padding: 25,
          marginBottom: 1
      },
    
      cardText: {
          marginTop: 10,
          fontFamily: 'poppins',
          fontSize: 12,
          color: 'black',
      },
    
      orgText: {
          fontFamily: 'poppins',
          fontSize: 12,
          color: '#666666',
          marginLeft: 5
      },
    
      redText:{
        fontFamily: 'poppins',
        fontSize: 12,
        color: '#fe8e7a',
    
      },
    
      cardImage: {
          width: '100%',
          height:90,
          resizeMode:'cover',
          opacity: .75,
          position: 'absolute'
      },
    
      overlay:{
    
        width: '100%',
          height:90,
          backgroundColor:'black',
          position: 'absolute'
      }
    

});

