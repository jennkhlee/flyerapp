import React from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity, Image} from 'react-native';
import { ExpoConfigView } from '@expo/samples';


export default class Explanation5 extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return(
      <View style={{flex:1, backgroundColor: '#1D5E54'}}>
     

<View style={{marginLeft:30, marginTop:30}}>

        <Text style={{fontFamily: 'poppins', color:'white', fontSize:20}}>
        What does Flyer do?
        </Text>

        <Text style={{marginTop:10,fontFamily: 'poppins', color:'white', fontSize:15}}>
        Get rewarded for your contributions! Embrace the feeling of giving back to your surroundings. 
                </Text>


</View>
       

        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Seventh')}>

          <Text style={{marginLeft: 30,marginTop:10,fontFamily: 'poppins', color:'white', fontSize:15}}>
          Next
          </Text>
        </TouchableOpacity>




<View style={{justifyContent:'center', alignItems:'center', marginTop:10}}>
            <Image style={{resizeMode:'contain', width: 280, height:530}}
              source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/onboarding/onboarding5_img.png')}
            />
        </View>

</View>
   );
  }
}