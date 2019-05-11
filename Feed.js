import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Events from './Events';
import EventScreen from '../screens/EventScreen';
import Card from '../components/Card';
import Button from '../components/Button';
const testImg = 'http://www.savannah.com/wp-content/uploads/Savannah-Doggie-Carnival-Races-700x350.jpg';


const Feed = props => (

  <View>
    {props.items.map(item => (

      <View style={styles.card} key={item.id}>

      <View style={styles.overlay}>
      <Image style={styles.cardImage} source={{uri: testImg}}>
      </Image>
      </View>

      <Text style={styles.titleText}>{item.event_name}</Text>


<View style={{marginTop:30, marginLeft: 20}}>

      <View style={{flexDirection: 'row'}}>

             <Image style={{borderRadius: 10, width: 17, height: 17, marginTop:2, marginLeft: 5}}
                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/organizations/stepup.png')}
                />
              <Text style={styles.orgText}>By {item.org_name}</Text>
      </View>

        <Text style={styles.cardText}>{item.description}</Text>
        <Text style={styles.cardText}>Date: {item.date}</Text>

      </View>

      <Button />


</View>



      ))}

  </View>
);

export default Events(Feed);





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
      width: '100%',
      height: 280,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 5,
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