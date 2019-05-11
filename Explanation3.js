import React from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity, Image} from 'react-native';
import { ExpoConfigView } from '@expo/samples';


export default class Explanation3 extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return(
      <View style={{flex:1, backgroundColor: '#D0E6E2'}}>
     

<View style={{marginLeft:30, marginTop:30}}>

        <Text style={{fontFamily: 'poppins', color:'#235C41', fontSize:20}}>
        What does Flyer do?
        </Text>

        <Text style={{marginTop:10,fontFamily: 'poppins', color:'#235C41', fontSize:15}}>
        Volunteer and donate your time to lend a helping hand to organizations and causes in your local community.
    
        </Text>


</View>
       

        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Fifth')}>

          <Text style={{marginLeft: 30,marginTop:10,fontFamily: 'poppins', color:'#235C41', fontSize:15}}>
          Next
          </Text>
        </TouchableOpacity>




<View style={{justifyContent:'center', alignItems:'center', marginTop:10}}>
            <Image style={{resizeMode:'contain', width: 280, height:530}}
              source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/onboarding/onboarding3_img.png')}
            />
        </View>

</View>
   );
  }
}