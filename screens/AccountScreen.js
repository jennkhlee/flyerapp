import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { ExpoConfigView } from '@expo/samples';
const image = '/Users/jennkhlee/Desktop/flyervolapp/assets/images/accountTop.png';


export default class AccountScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return(

        <Image source={{image}}>
        </Image>
   );
  }
};


const styles = StyleSheet.create({

  imageHold:{
      flex: 1,
      width: 100,
      height: 100,
      resizeMode: 'contain',
  }

});