import React from 'react';
import { ScrollView, FlatList, ActivityIndicator, StyleSheet, TextInput, Dimensions, Text, View, Image } from 'react-native';
import Card from '../components/Card'
import { ListItem, SearchBar } from 'react-native-elements';

export default class SearchScreen_temp extends React.Component {

    static navigationOptions = {
      header: null
    };

    constructor(props){
        super(props);
    
        this.state = {
          textInputValue: '',
          loading: false,
          data: [],
          error: null
        };
      
        this.arrayholder =[];
      }



    searchFilterFunction = text => {

        const newData = this.arrayholder.filter(item => {
    
          const itemData = `${item.event_name.toUpperCase()} ${item.org_name.toUpperCase()} ${item.description.toUpperCase()}`;
    
          const textData = text.toUpperCase();
    
          return itemData.indexOf(textData) > -1;
    
        });
    
        this.setState({ data : newData });
    
      };



      


render(){
    return( 

        <View style={styles.container}>
        
        <View style={styles.topContainer}>

        <Text style={styles.headerText}>

            Search
            
        </Text>

        <View style={{alignContent: 'center'}}>

        <TextInput style={styles.inputBar}

            placeholder= 'Search for events, organizations, or posts...'
            autoCorrect = { false }
        />
        </View>

        </View>

            


        </View>
    );
}




}

const styles = StyleSheet.create({
    container: {
      flex: 1,
       backgroundColor: '#f8f8f8'
    },

    topContainer:{
        width: '100%',
        height: 250,
        backgroundColor: '#F8F3E7'

    },
  
    resultsContainer:{
      backgroundColor: '#f8f3e7',
  
      flex: 1,
      marginTop: 100
    },

    headerText:{

        fontFamily: 'poppins',
        fontSize: 20,
        color: 'black',
        marginTop: 50,
        marginLeft: 30
    },
  
    card: {
      backgroundColor: 'white',
      width: '100%',
      height: 100,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 1,
      shadowOffset:{
          width:3,
          height:3
      },
      marginBottom: 10,
      fontFamily: 'poppins',
      fontSize: 12,
      color: 'black',
      padding: 25
      
  },
  
    cardText: {
      fontFamily: 'poppins',
      fontSize: 12,
      color: 'black'
  },
  
  subtitleText:{
    fontFamily: 'poppins',
      fontSize: 12,
      color: 'black'
    },
  




    inputBar: {
      width: 340,
      height: 45,
      borderRadius: 20,
      fontSize: 16,
      fontFamily: 'poppins',
      color: 'black',
      backgroundColor: '#F8F3E7',
      padding: 10,
      marginTop: 10,
      textAlignVertical: 'top',
      shadowColor: '#000',
    shadowOpacity: 0.09,
    shadowRadius: 5,
    shadowOffset:{
        width:1,
        height:1
    },


    }
  });
   