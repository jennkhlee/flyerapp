import React from 'react';
import {View, Text, StyleSheet, Alert, TouchableOpacity, Button, TextInput, Image} from 'react-native';
import HomeScreen from './HomeScreen';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {

  constructor(props){
    super(props)
    this.state = ({
      email: '',
      password:''
    })
  }


  loginUser = (email,password) =>{

      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('Home')
    
    }, (error)=> {

        alert(error.message);
      }
      
      )
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
                    Welcome back!
                </Text>
                <Text style={styles.buttonText}>
                   👋
                </Text>


        <TextInput style={styles.inputBar}
        placeholder="Email"
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
        onPress={() => this.loginUser(this.state.email,this.state.password)}
        >

        <Text style={styles.ctaButtonText}>Login</Text>

         </TouchableOpacity>

</View>


        );
    }
}



const styles = StyleSheet.create({

   

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
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 30
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