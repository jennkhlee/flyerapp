import React from 'react';
import {View, Image, FlatList,TouchableOpacity, Text, ScrollView, StyleSheet} from 'react-native';
const testImg = 'https://stepupsavannah.org/site/assets/uploads/2018/11/DSC_3342.jpg';

import * as firebase from 'firebase';
import Users from './OrgCards';
import Organization from './OrganizationScreen';

// Required for side-effects
require("firebase/firestore");

  var db = firebase.firestore();
  // var stepupRef = db.collection('organizations').doc('information');
  // console.log(stepupRef);


  

class OrgContent extends React.Component {

constructor() {
        super();
        this.ref = firebase.firestore().collection('organizations');
        this.unsubscribe = null;
        this.state = {
            loading: true,
            orgs: [],
        };
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate) 
    }
    
    componentWillUnmount() {
        this.unsubscribe();
    }

    onCollectionUpdate = (querySnapshot) => {
        const orgs = [];
        querySnapshot.forEach((doc) => {
          const { name, address, contact, desc } = doc.data();
           orgs.push({
            key: doc.id,
            doc, // DocumentSnapshot
            name,
            address,
            contact,
            desc
          });
        });
      
        this.setState({ 
          orgs,
          loading: false,
       });
      }

    
    render() {
        return(

        <FlatList
        data={this.state.orgs}
        renderItem={({ item }) => <Organization {...item} />}></FlatList>

       );
      }
}



const styles = StyleSheet.create({

  

    scheduleCard:{
        width: 236,
        height: 90,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: '#000',
    shadowOpacity: 0.09,
    shadowRadius: 5,
    shadowOffset:{
        width:1,
        height:1
    },
    justifyContent: 'center',
    marginLeft: 5,
    marginTop: 10,
    flexDirection: 'row'
    },




    timeText:{
        fontFamily: 'poppins',
        fontSize: 12,
        color: 'black',
        marginTop: 10,

    },

    imgContainer:{

        height: 35,
        width: 35,
        borderRadius: 18,
        resizeMode:'cover',
        shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset:{
        width:1,
        height:1
    },
      

    },

    teamCards:{
        width: 115,
        height: 152,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: '#000',
    shadowOpacity: 0.09,
    shadowRadius: 5,
    shadowOffset:{
        width:1,
        height:1
    },
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5   

    },

    darkBodyCopy:{
        fontFamily: 'poppins',
        color: '#004020',
        fontSize:12,

    },

    whiteHeaderText:{
        fontFamily: 'poppins',
        color: 'white',
        fontSize:20,

    },



    headerText:{
        fontFamily: 'poppins-bold',
        fontSize: 20,
        color: 'white',

    },



    darkHeaderText:{
        fontFamily: 'poppins',
        fontSize: 20,
        color: 'black',

    },
      
    orgText:{
        fontFamily: 'poppins-bold',
        fontSize: 14,
        color: 'white',
        marginTop: 5,
      },

      descText:{
        fontFamily: 'poppins',
        fontSize: 12,
        color: 'white',
    
      },

      mainDescText:{
        fontFamily: 'poppins',
        fontSize: 12,
        color: 'black',
    
      },







    followButton: {
        backgroundColor: '#175B54',
        width: 148,
        height: 34,
        shadowColor: '#000',
    shadowOpacity: 0.09,
    shadowRadius: 5,
    shadowOffset:{
        width:1,
        height:1
    },
    marginLeft: 10,
    borderRadius: 8,
    position: 'absolute',
    top: 20,
    left: 200,
    justifyContent: 'center',
    alignItems: 'center'


    },





    buttonText:{

        fontFamily: 'poppins-bold',
        fontSize:12,
        color:'black',
        alignSelf: 'center'
    
    },






    aboutBacking:{

        backgroundColor: '#3783FF',
        width: '100%',
        height: 175,
        marginTop:20,
        padding: 30,
        justifyContent: 'center'
        

    },



    missionBacking:{

        backgroundColor: '#C8E8E4',
        width: '100%',
        height: 175,
        marginTop:20,
        justifyContent: 'center'

        

    },






    floatingCard:{

        width: 350,
        height: 64,
        backgroundColor: 'white',
        shadowColor: '#000',
    shadowOpacity: 0.09,
    shadowRadius: 5,
    shadowOffset:{
        width:1,
        height:1
    },
    marginLeft: 10,
    borderRadius: 8,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
    },


    




    orgInfoContainer: {
width: '100%',
backgroundColor: '#F8F3E7'
    },





    eventInfoSubContainer:{
        width: 100

    },






    eventInfoText: {

        fontFamily: 'poppins',
        fontSize: 12,
        color: '#666666',
        padding: 20
    },






    dateText: {

        fontFamily: 'poppins',
        fontSize: 19,
        color: '#FE8E7A',
        padding: 20
    },






    topContainer:{
        marginLeft:20,
        top: 10,
        justifyContent: 'space-between'

    },



    











    overlay: {
        left: 0,
        top: 0,
        backgroundColor: 'black',
        width: '100%',
        height: 300,
        opacity: 0.45,
        position: 'absolute'
      },







    container:{
        backgroundColor: '#F8F8F8'
    },






    cardImage:{

        width: '100%',
        height:225,
        resizeMode:'cover',
        backgroundColor: 'rgba(0,0,0,50)',

    },




  
    inputContainer:{
      backgroundColor: '#f8f3e7',
      marginTop: -300
  },
  
  
    textContainer:{
      flex: 1,
      marginTop: 100,
      marginLeft: 10,
      marginBottom: 75
    },


  
    bodyContainer:{
      flex: 1,
      marginLeft: 7,
      marginTop: -350
    },
  
  
  



  
  });

  export default OrgContent;