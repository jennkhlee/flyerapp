import React from 'react';
import { TouchableHighlight, TouchableOpacity, StyleSheet, View, Text, Button} from 'react-native';

class Events extends React.PureComponent {

    render() {
        return (
              <TouchableOpacity onPress={() => this.goToScreen(this.props.doc.id)}
              style={styles.card}>
                      <Text style={styles.cardTitle}>{this.props.title}</Text>
                      <Text style={styles.cardText}>{this.props.desc}</Text>
                      <Text style={{color:'black'}}>{this.props.organization}</Text>
                  <View>
                      {this.props.complete && (
                          <Text>COMPLETE</Text>
                      )}
                  </View>
              </TouchableOpacity>
        );
    }


    goToScreen(id){

        console.log('clicked'+id)
        console.log('nav'+this.props.name)
        this.props.navigation.navigate('Event', {

            eventId:id,
            title: this.props.title,
            desc: this.props.desc,
            date: this.props.date,
            time: this.props.time,
            organization: this.props.organization,

        });


    }


}

const styles = StyleSheet.create({

      card: {
          backgroundColor: 'white',
          width: 350,
          height: 280,
          shadowColor: '#000',
          shadowOpacity: 0.1,
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




export default Events;