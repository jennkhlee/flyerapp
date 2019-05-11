import React, {Component} from 'react';
import {Modal, Text,FlatList, TouchableHighlight, TextInput,Button, View, Alert} from 'react-native';
import * as firebase from 'firebase';
import Orgs from './OrgCards';


// Required for side-effectsUs
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA1NtGfUqZQrvan6J3pJz8XbrEyKCGLIyE",
  authDomain: "flyerapp-test.firebaseapp.com",
  databaseURL: "https://flyerapp-test.firebaseio.com",
  projectId: "flyerapp-test",
  storageBucket: "flyerapp-test.appspot.com",

};

firebase.initializeApp({
    apiKey: 'AIzaSyA1NtGfUqZQrvan6J3pJz8XbrEyKCGLIyE',
    authDomain: 'flyerapp-test.firebaseapp.com',
    projectId: 'flyerapp-test'
  });
  
  var db = firebase.firestore();




export default class OrgFeed extends Component {

    constructor() {
        super();
        this.ref = firebase.firestore().collection('organizations');
        this.unsubscribe = null;
    
        this.state = {
            nameInput: '',
            contactInput: '',
            addressInput: '',
            descInput: '',

            loading: true,
            orgs: [],
        };

    }


    
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate) 

        console.log("TESTETSETESTEST");
        var results2 = db.collection('organizations').get().then(snapshot => {
          snapshot.forEach(doc => {
            console.log(doc.id+' => '+doc.data())
          })
        }).catch(err => {
          console.log('i made an oopsie whoopsi')
        })
 
        var results = db.collection("organizations").doc('foncCDNEgYT7jFjQUZE8').get().then(doc => {
          if(!doc.exists){
            console.log("mewoewmoewowo")
          }else{
            console.log("doc data: "+doc.data());
          }
        }).catch(err =>{
          console.log('error');
        })
        
    }
    
    componentWillUnmount() {
        this.unsubscribe();
    }

    onCollectionUpdate = (querySnapshot) => {
        const orgs = [];

        querySnapshot.forEach((doc) => {
          const { name, phone, website, mission, desc } = doc.data();
           orgs.push({
            key: doc.id,
            doc, // DocumentSnapshot
            name,
            desc,
            mission,
            phone,
            website
          });
        });
      
        this.setState({ 
          orgs,
          loading: false,
       });

      }



    addTodo() {
        this.ref.add({
          name: this.state.nameInput,
          desc: this.state.descInput,
          contact: this.state.contactInput,

          email: false,

        });
      
        this.setState({
          nameInput: '',
          descInput: '',
          contactInput:''

        });
      }


      



  render() {
    return (
      <View style={{marginTop: 50,backgroundColor:'white'}}>



        <FlatList
          data={this.state.orgs}
          renderItem={({ item }) => <Orgs navigation={this.props.navigation} {...item} />}
        />

      </View>
    );
  }
}