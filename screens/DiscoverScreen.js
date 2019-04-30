import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  View,
} from 'react-native';

import Card from '../components/Card';



export default class Discover extends React.Component {

  static navigationOptions = {
    header: null,
};

render(){

return(


    <ScrollView style={styles.container}>


                <View style={{backgroundColor:'#F8F3E7', height:200}}>

                <Image style={{opacity: 0.75, height: 200, marginLeft:100,resizeMode:'cover', position: 'absolute'}}
                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/images/patterns.png')}
                />

                <View style={{marginTop: 70, marginLeft:20}}>

                    <Text style={styles.welcomeText}>
                        Discover
                    </Text>
                    
                    <View style={styles.welcomeCardBacking}>
                            <Text style={styles.bodyCopyText}>
                            You have one event coming up today.
                            </Text>
                    </View>

                </View>





</View>





      <View style={styles.homeNav}>
        <Text style={styles.navText}
        onPress={() => this.props.navigation.navigate('Home')}>
        Feed
        </Text>

        <Text style={styles.navText}>
        Discover
        </Text>

        <Text style={styles.navText}>
        Map
        </Text>
        </View>




        <View style={{marginLeft: 30, marginTop: 20}}>

                  <Text style={styles.headerText}>
                    Weekly Mix
                  </Text>

                  <View style={{flexDirection: 'row'}}>
                          <Image
                        source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/playlists/weeklymix1.png')}
                        />
                        <Image
                        source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/playlists/weeklymix2.png')}
                        />
                  </View>




                  <Text style={styles.headerText}>
                    Challenges
                  </Text>

                  <View style={{flexDirection: 'row'}}>
                          <Image
                        source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/challenges/challenge1.png')}
                        />
                        <Image
                        source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/challenges/challenge1.png')}
                        />
                  </View>



                  <Text style={styles.headerText}>
                    Recommended events
                  </Text>

                  <View style={{flexDirection: 'row'}}>
                      <Card />
                      <Card />
                  </View>



                 

        </View>



    </ScrollView>

);
}}

const styles = StyleSheet.create({

  headerText:{

    fontFamily: 'poppins',
    color: 'black',
    fontSize: 20
  },

  homeNav:{
    backgroundColor: '#F8F3E7',
    height: 63,
    width: '100%',
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignContent: 'space-between'
  },

  navText:{
    fontFamily: 'poppins',
    color:'#AC8E5B',
    fontSize:20,
    padding: 20,
    marginLeft:10

  },

  welcomeCardBacking: {

    backgroundColor: 'white',
    width: 270,
    height: 38,
    shadowColor: '#000',
    shadowOpacity: 0.09,
    shadowRadius: 5,
    shadowOffset:{
        width:1,
        height:1
    },
    borderRadius: 8,
    marginTop:10,
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 30

},


  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },

  bodyCopyText: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'poppins'
  },




  welcomeText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'left',
    fontFamily: 'poppins-bold'

  },


});
