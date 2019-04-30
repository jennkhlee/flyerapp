import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, TextInput, Image} from 'react-native';
import HomeScreen from './HomeScreen';
import firebase from 'firebase';

export default class SignupScreen extends React.Component {


  constructor(props){
    super(props)
    this.state = ({
      email: '',
      password:''
    })
  }


  signUpUser = (email,password) =>{
    try{

      if(this.state.password.length<6)
      {
        alert("Please enter at least 6 characters")
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password)

    }
    catch(error){
      console.log(error.toString())
    }

  }

  loginUser = (email,password) =>{

    try {
      firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){

        console.log(user)
      })

    }
    catch(error){

      console.log(error.toString())
    }
  }


  
    static navigationOptions = {
        header: null
      };





    render(){
        return(
            <View style={styles.container}>
            <Image style={styles.logoContainer}
          source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/images/flyerlogo.png')}
        />

        <View style={styles.inputFieldContainer}>
                <Text style={styles.buttonText}>
                    Nice to meet you,
                </Text>
                <Text style={styles.buttonText}>
                   👋
                </Text>

        <TextInput style={styles.inputBar}
        placeholder="What's your email?"
        onChangeText={(email) => this.setState({email})}
        />

        <TextInput style={styles.inputBar}
        placeholder="Password"
        secureTextEntry
        onChangeText={(password) => this.setState({password})}
        />

        </View>
                
        <TouchableOpacity
        style ={styles.ctaButtonBacking}
        onPress={() => this.signUpUser(this.state.email,this.state.password)}
        >

        <Text style={styles.ctaButtonText}>Sign up</Text>

         </TouchableOpacity>



        </View>
        );
    }
}



const styles = StyleSheet.create({

    inputFieldContainer:{

        flex: 1
    },

      buttonText:{
        fontFamily: 'poppins',
        fontSize: 20,
        color: '#584421',
        marginLeft: 7
    
      },

      ctaButtonText:{
        fontFamily: 'poppins-bold',
        fontSize: 16,
        color: 'white',
        marginLeft: 7
    
      },

    logoContainer:{
        width: 100,
        height: 100,
        marginTop: 50,
        resizeMode: 'contain',
        marginBottom: 10
    },

    ctaButtonBacking: {
        backgroundColor: '#175B54',
        width: 300,
        height: 50,
        marginTop: -20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 100
    },


    cardTitle: {
        fontFamily: 'poppins-bold',
        fontSize: 26,
        color: 'black',
        padding: 25,
        marginBottom: 1
    },

    container: {
        flex: 1,
        backgroundColor: '#f8f3e7',
        alignItems: 'center'
      },

      inputBar: {
        width: 300,
        height: 45,
        fontSize: 16,
        fontFamily: 'poppins',
        color: '#584421',
        padding: 5,
        marginTop: 10,
        marginLeft: 10
      }

});