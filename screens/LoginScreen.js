import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, TextInput, Image} from 'react-native';
import HomeScreen from './HomeScreen';

export default class LoginScreen extends React.Component {

    static navigationOptions = {
        header: null
      };

    render(){
        return(
            <View style={styles.container}>
            <Image style={styles.logoContainer}
          source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/images/flyerlogo.png')}
        />
                <Text style={styles.cardTitle}>
                    Flyer
                </Text>

                <TextInput style={styles.inputBar}
        placeholder="What's your email?"
        />
        <TextInput style={styles.inputBar}
        placeholder="Password"
        secureTextEntry

        />
                
        <Button style={styles.buttonText}
                    title="Login"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
        </View>
        );
    }
}



const styles = StyleSheet.create({

    logoContainer:{
        flex: 1,
        width: 100,
        height: 100,
        resizeMode: 'contain',
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
        borderRadius: 20,
        fontSize: 16,
        fontFamily: 'poppins',
        color: '#584421',
        backgroundColor: 'white',
        padding: 5,
        marginTop: 10,
        marginLeft: 10
      },

    buttonBacking: {
        backgroundColor: '#F5EBD2',
        width: 112,
        height: 33,
        marginLeft: 250,
        marginTop: -20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        fontFamily: 'poppins',
        fontSize: 12,
        color: 'black'

    }

});