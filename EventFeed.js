import React, {Component} from 'react';
import {Modal, Text,FlatList, TouchableHighlight, TextInput,Button, View, Alert} from 'react-native';
import * as firebase from 'firebase';
import Events from './EventsCards';

// Required for side-effectsUs
require("firebase/firestore");

var db = firebase.firestore();


export default class EventFeed extends Component {

    constructor() {
        super();
        this.ref = firebase.firestore().collection('events');
        this.unsubscribe = null;
    
        this.state = {
            loading: true,
            events: [],
        };
    }

    componentDidMount() {

        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate) 

        console.log("TESTETSETESTEST");

        var results2 = db.collection('events').get().then(snapshot => {
          snapshot.forEach(doc => {
            console.log(doc.id+' => '+doc.data())
          })
        }).catch(err => {
          console.log('i made an oopsie whoopsi')
        })
        
    }
    
    componentWillUnmount() {
        this.unsubscribe();
    }

    onCollectionUpdate = (querySnapshot) => {
        const events = [];

        querySnapshot.forEach((doc) => {
          const { title, date, desc, time, organization } = doc.data();
           events.push({
            key: doc.id,
            doc, // DocumentSnapshot
            title,
            desc,
            date,
            time,
            organization
            
          });
        });
      
        this.setState({ 
          events,
          loading: false,
       });

      }

  render() {
    return (
      <View style={{marginTop: 50,backgroundColor:'white'}}>

      <FlatList style={{alignContent:'center'}}
          data={this.state.events}
          renderItem={({ item }) => <Events navigation={this.props.navigation} {...item} />}
      />

      </View>
    );
  }
}