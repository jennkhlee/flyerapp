import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Events from './Events';
import Button from './Button';
import EventScreen from '../screens/EventScreen';
import Card from '../components/Card';
const testImg = 'http://www.savannah.com/wp-content/uploads/Savannah-Doggie-Carnival-Races-700x350.jpg';


const Feed = props => (

  <View>
    {props.items.map(item => (

      <View style={styles.card} key={item.id}>
      <Image style={styles.cardImage} source={{uri: testImg}}>
      </Image>


        <Text style={styles.cardTitle}>{item.event_name}</Text>


        <Text style={styles.orgText}>By {item.org_name}</Text>
        <Text style={styles.cardText}>Date: {item.date}</Text>
        <Text style={styles.cardText}>{item.description}</Text>
        <Button onPress={() => this.props.navigation.navigate('Event')}/>

      </View>

      ))}
  </View>
);

export default Events(Feed);





const styles = StyleSheet.create({

  textTest: {
    fontSize: 20,
    color: '#584421',
    textAlign: 'left',
    padding: 20,
    fontFamily: 'poppins'
  },

  welcomeCardBacking: {

    backgroundColor: 'white',
    width: 270,
    height: 30,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset:{
        width:1,
        height:1
    },
    borderRadius: 8,
    marginLeft: 10,
    marginTop: -12

},

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
      marginBottom: 10
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
      height:90,
      resizeMode:'cover'
  }


});