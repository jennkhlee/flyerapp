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
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import Card from '../components/Card';
import Feed from '../components/Feed'



export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
};

render(){

return(

  <View style={styles.container}>

    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

       <View style={styles.welcomeContainer}>
         <Image
           source={
             __DEV__
               ? require('../assets/images/shapes1.png')
               : require('../assets/images/shapes1.png')
           }
           style={styles.welcomeImage}
         />

         <Text style={styles.welcomeText}>
         Good morning, Monica
         </Text>
         
         <View style={styles.welcomeCardBacking}>
         <Text style={styles.developmentModeText}>
         You have one event coming up today.
         </Text>
         </View>

        <Feed />

      </View>

    </ScrollView>
  </View>

);
}}

const styles = StyleSheet.create({

  welcomeCardBacking: {

    backgroundColor: 'white',
    width: 270,
    height: 40,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset:{
        width:1,
        height:1
    },
    borderRadius: 8,
    marginLeft: 30,
    marginBottom: 10

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
    marginBottom: 3,
},

cardTitle: {
    fontFamily: 'poppins-bold',
    fontSize: 16,
    color: 'black',
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


  container: {
    flex: 1,
    backgroundColor: '#f8f3e7',
  },

  developmentModeText: {
    padding: 20,
    color: 'black',
    fontSize: 12,
    lineHeight: 12,
    textAlign: 'center',
    fontFamily: 'poppins'
  },

  contentContainer: {
    paddingTop: 30,
    backgroundColor: '#f8f3e7'
  },




  welcomeContainer: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#f8f3e7'
  },



  welcomeImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 0,
    marginLeft: 200,
  },

  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },

  homeScreenFilename: {
    marginVertical: 7,
  },


  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },





  welcomeText: {
    marginTop: -150,
    fontSize: 20,
    color: 'black',
    lineHeight: 20,
    textAlign: 'left',
    padding: 20,
    fontFamily: 'poppins-bold'

  },






  // Tab info container thing
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),

    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
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
