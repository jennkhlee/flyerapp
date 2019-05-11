import React from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity, TextInput, Image} from 'react-native';


export default class Onboarding2 extends React.Component {

  constructor(props){
    super(props)
    this.state = ({
      name: '',
    })
  }

  static navigationOptions = {
    header: null
  };


  render() {
    return(
      <View style={styles.container}>

        <View style={styles.textContainer}>

        <Text style={styles.headerText}>
          Thank you for getting
        </Text>
        <Text style={styles.headerText}>
          to know us!
        </Text>
        </View>


        <View style={styles.bodyContainer}>
        <Text style={styles.bodyText}>
         We'd love to get to know you a bit better.
        </Text>
        <Text style={styles.bodyText}>
          What's your name?
        </Text>

        <TextInput style={styles.inputBar}
        placeholder="name"
        onChangeText={(name) => this.setState({name})}
        />
        </View>


        

        <Text style={styles.buttonText}
        onPress={() => this.props.navigation.navigate('SignIn')}>
        Continue
        </Text>


        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Login')}>

        <Text style={styles.buttonText}>Have an account? Login here.</Text>

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

  inputContainer:{
    backgroundColor: '#f8f3e7',
    marginTop: -300
},


  textContainer:{
    flex: 1,
    marginTop: 100,
    marginLeft: 10,
    marginBottom: 75
  },

  bodyContainer:{
    flex: 1,
    marginLeft: 7,
    marginTop:-230
  },




  buttonText:{
    fontFamily: 'poppins',
    fontSize: 20,
    color: '#584421',
    marginLeft: 15,
    marginBottom: 100
  },





  headerText:{
    fontFamily: 'poppins',
    fontSize: 20,
    color: '#584421',
    marginLeft: 10
  },

  bodyText:{
    fontFamily: 'poppins',
    fontSize: 14,
    color: 'black',
    marginLeft: 10

  },
  inputBar: {
    width: 300,
    height: 45,
    borderRadius: 20,
    fontSize: 16,
    fontFamily: 'poppins',
    color: '#584421',
    padding: 5,
    marginTop: 10,
    marginLeft: 10,
  }

});