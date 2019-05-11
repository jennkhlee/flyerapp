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
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';
import Card from '../components/Card';
import Feed from '../components/Feed';
import OrgFeed from './OrgFeed';
import EventFeed from './EventFeed';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };


  constructor(props){
    /* reference in the navigation prop so we can move around */
    super(props)
    const navi = this.props.navigation
    this.state = ({

    })
  }


  changeScreen(screen){
    console.log('going to screen: '+screen)
    this.props.navigation.navigate(screen)
  }



render(){

return(

    <ScrollView style={styles.container}>
       <View style={{backgroundColor:'#F8F3E7', height:200}}>
            <Image style={{opacity: 0.75, height: 200, marginLeft:100,resizeMode:'cover', position: 'absolute'}}
                      source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/images/sqpattern1.png')}
            />
          <View style={{marginTop: 70, marginLeft:20}}>

              <Text style={styles.welcomeText}>
                Good morning, Monica
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

        <Text style={styles.navText}
        onPress={() => this.props.navigation.navigate('Discover')}>
          Discover
        </Text>

        <Text style={styles.navText}>
          Map
        </Text>
        </View>



    <EventFeed navigation={this.props.navigation}/>
    
    <OrgFeed navigation={this.props.navigation}/>




    </ScrollView>

);
}}

const styles = StyleSheet.create({


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
    marginLeft: 10

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

  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
    fontFamily: 'poppins'

  },

  navigationFilename: {
    marginTop: 5,
  },

  helpContainer: {
    marginTop: 15,
    alignItems: 'center',

  },

  helpLink: {
    paddingVertical: 15,
    fontFamily: 'poppins'

  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
    fontFamily: 'poppins'

  },
});
