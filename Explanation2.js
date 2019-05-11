import React from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity, Image} from 'react-native';
import { ExpoConfigView } from '@expo/samples';


export default class Explanation2 extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return(
      <View style={{flex:1, backgroundColor: '#4A8AF3'}}>
     

<View style={{marginLeft:30, marginTop:30}}>

        <Text style={{fontFamily: 'poppins', color:'white', fontSize:20}}>
        What does Flyer do?
        </Text>

        <Text style={{marginTop:10,fontFamily: 'poppins', color:'white', fontSize:15}}>
        Discuss causes with people that are just as passionate as you.
        </Text>


</View>
       

        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Fourth')}>

          <Text style={{marginLeft: 30,marginTop:10,fontFamily: 'poppins', color:'white', fontSize:15}}>
          Next
          </Text>
        </TouchableOpacity>




<View style={{justifyContent:'center', alignItems:'center', marginTop:10}}>
            <Image style={{resizeMode:'contain', width: 280, height:530}}
              source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/onboarding/onboarding2_img.png')}
            />
        </View>

</View>
   );
  }
}