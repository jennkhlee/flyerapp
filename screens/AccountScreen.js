import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import Card from '../components/Card';
import MiniCard from '../components/MiniCard';

export default class AccountScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  

  render() {
    return(

      <ScrollView style={styles.mainContainer}>
       
      <View style={styles.topContainer}>

          <TouchableOpacity style={styles.floatingCard}
          onPress={()=> this.props.navigation.navigate('Settings')}>


                <Image style={{marginLeft: 20,width: 40,height:40, borderRadius: 20, padding: 10}} source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/users/lady5.png')}/>

                <Text style={styles.subHeaderText}> 
                  Hello, Monica
                </Text>

                  <Image style={{marginLeft: 40,width: 100,height:64, resizeMode: 'stretch'}} source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/images/pattern1.png')}/>


          </TouchableOpacity>



          <View style={{marginTop: -40,flexDirection: 'column', justifyContent: 'space-between'}}>


          <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Image style={{resizeMode: 'contain', marginLeft:35}}
                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/icons/msg.png')}/>
                <Text style={styles.navText} onPress={()=> this.props.navigation.navigate('Profile')}>
                  Messages
                </Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Image style={{resizeMode: 'contain', marginLeft:35}}
                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/icons/people.png')}/>
                <Text style={styles.navText} onPress={()=> this.props.navigation.navigate('Profile')}>
                  Following
                </Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Image style={{resizeMode: 'contain', marginLeft:35}}
                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/icons/settings.png')}/>
                <Text style={styles.navText} onPress={()=> this.props.navigation.navigate('Settings')}>
                  Settings
                </Text>
            </View>
            

          </View>



      </View>



<View style={{marginTop: 35}}>

        <Text style={styles.darkHeaderText}>
         Upcoming events
         </Text>

         



<View style={{flexDirection: 'row', marginLeft:20, justifyContent: 'flex-start',marginTop:10}}>

  <MiniCard />
  <MiniCard />

</View>


<View style={{marginTop: 20}}>

<Text style={styles.darkHeaderText}>
         Challenges
         </Text>


            <Image style={{resizeMode:'contain'}}
            source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/challenges/challenge1.png')}/>

</View>
         


</View>

        </ScrollView> 
      
   );
  }

};


const styles = StyleSheet.create({

  mainContainer:{
    backgroundColor: '#f8f8f8',

  },

  subHeaderText:{
    fontFamily: 'poppins',
    color: 'black',
    fontSize: 18,
    marginLeft: 20

  },

  floatingCard:{

    width: 350,
    height: 64,
    marginTop: 40,
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
justifyContent: 'flex-start',
alignItems: 'center',
flexDirection: 'row'

},




  topContainer:{


    width: '100%',
    height: 250,
    backgroundColor: '#F8F3E7',
    justifyContent: 'space-between'


  },




  navText:{
    fontFamily: 'poppins',
    fontSize: 15,
    color: '#AC8E5B',
    marginLeft: 15,
    padding: 10
  },

  darkHeaderText:{
    fontFamily: 'poppins',
    fontSize: 20,
    color: 'black',
    marginLeft: 20

},


  imageHold:{
      flex: 1,
      width: 100,
      height: 100,
      resizeMode: 'contain',
  },

  headerText: {
    fontFamily: 'poppins-bold',
    fontSize: 16,
    color: 'black',
    padding: 25,
    marginBottom: -10
    

},

});