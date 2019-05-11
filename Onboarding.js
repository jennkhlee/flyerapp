import React from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity, Image} from 'react-native';

export default class Onboarding extends React.Component {

  static navigationOptions = {
    header: null
  };

  render() {
    return(
      <View style={styles.container}>
        <Image style={{resizeMode:'cover', width: '100%', height:300, opacity:.75}}
          source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/images/sqpattern3.png')}
        />


<View style={{marginTop:20, flexDirection: 'row', maxWidth:280, justifyContent:'flex-start'}}>

        <Text style={{marginLeft: 20,color:'black', fontFamily: 'poppins-bold', fontSize: 26}}>
        Flyer
        </Text>
        <Text style={styles.headerText}>
        , a new way to get involved
        </Text>

</View>
      
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Second')}>
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
    fontFamily: 'poppins',
        fontSize: 26,
        color: 'black'
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