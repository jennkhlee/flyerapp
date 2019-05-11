import React from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity, Image} from 'react-native';
import { ExpoConfigView } from '@expo/samples';


export default class Explanation4 extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return(
      <View style={{flex:1, backgroundColor: '#FE8E7A'}}>
     

<View style={{marginLeft:30, marginTop:30}}>

        <Text style={{fontFamily: 'poppins', color:'white', fontSize:20}}>
        What does Flyer do?
        </Text>

        <Text style={{marginTop:10,fontFamily: 'poppins', color:'white', fontSize:15}}>
        Develop your own charitable events and find community members to join you.      
        </Text>


</View>
       

        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Sixth')}>

          <Text style={{marginLeft: 30,marginTop:10,fontFamily: 'poppins', color:'white', fontSize:15}}>
          Next
          </Text>
        </TouchableOpacity>




<View style={{justifyContent:'center', alignItems:'center', marginTop:10}}>
            <Image style={{resizeMode:'contain', width: 280, height:530}}
              source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/onboarding/onboarding4_img.png')}
            />
        </View>

</View>
   );
  }
}