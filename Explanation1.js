import React from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity, Image} from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';



export default class Explanation1 extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return(
      <View style={{flex:1, backgroundColor: '#F8F3E7'}}>
     

<View style={{marginLeft:30, marginTop:30}}>

        <Text style={{fontFamily: 'poppins', color:'#422F00', fontSize:20}}>
        What does Flyer do?
        </Text>

        <Text style={{marginTop:10,fontFamily: 'poppins', color:'black', fontSize:15}}>
        Discover charitable opportunities around your local community!
        </Text>


</View>
       

        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Third')}>

          <Text style={{marginLeft: 30,marginTop:10,fontFamily: 'poppins', color:'black', fontSize:15}}>
          Next
          </Text>
        </TouchableOpacity>




<View style={{justifyContent:'center', alignItems:'center', marginTop:10}}>
            <Image style={{resizeMode:'contain', width: 280, height:530}}
              source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/onboarding/onboarding1_img.png')}
            />
        </View>

</View>
   );
  }
}