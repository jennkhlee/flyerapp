import React from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity, Image} from 'react-native';
import { ExpoConfigView } from '@expo/samples';



export default class Onboarding extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return(
      <View style={styles.container}>
        <Image
          source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/images/patterns.png')}
        />
        <Text style={styles.headerText}>
          Flyer, a new way to get involved
        </Text>
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Onboard2')}>

        <Text style={styles.buttonText}>Get started</Text>

        </TouchableOpacity>
</View>
   );
  }
}

const styles = StyleSheet.create({

  container:{
      flex: 1,
      backgroundColor: '#f8f3e7'
  },

  headerText:{
    fontFamily: 'poppins-bold',
        fontSize: 26,
        color: 'black',
        padding: 25,
        marginBottom: 1
  },

  buttonText:{
    fontFamily: 'poppins',
    fontSize: 20,
    color: '#584421',
    padding: 25,
    marginTop: 120,
    marginLeft: 10

  }

});