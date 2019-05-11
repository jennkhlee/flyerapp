import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  View,
} from 'react-native';
import MiniCard from '../components/MiniCard';

export default class ProfileScreen extends React.Component {

    render(){

        return(
            <ScrollView style={{backgroundColor: '#f8f8f8'}}>

                    <View style={styles.overlay}>

                    <Image style={styles.imgContainer}
                    source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/users/lady5.png')}/>
                    </View>

        

                <View style={styles.infoContainer}>


                        <View style={{marginLeft:25, marginTop: 40, maxWidth: 330}}>

                                        <Text style={styles.bodyText}>
                                            I'm a SCAD student passionate about making a difference in my local community through discussion. Involved in Georgia Coastal Foundation and Open Savannah!
                                        </Text>

                                <View style={{marginTop: 10, flexDirection: 'row'}}>


                                <Image
                                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/icons/location.png')}/>


                                        <Text style={styles.brownText}>
                                            Midtown, Savannah GA
                                        </Text>

                                </View>

                        </View>
                
                
                </View>




                <Image style={{position: 'absolute', top: 30, marginLeft: 30}}
                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/icons/backArrow_white.png')}/>


                <View style={{top: 230, marginLeft: 10, position: 'absolute'}}>
                        <View style={styles.card}>

                            <Text style={{fontFamily:'poppins', fontSize: 20, color:'black'}}>
                                Monica Ruiz
                            </Text>

                        </View>
                </View>


                <View style={{marginLeft:30}}>

                    <Text style={styles.headerText}>
                    Achievements
                    </Text>

                    <Image
                    source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/badges/badges.png')}/>


                    <Text style={styles.headerText}>
                    Past activity
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <MiniCard />
                        <MiniCard />

                    </View>

                </View>

            </ScrollView>

        )
    }

}

const styles = StyleSheet.create({


    infoContainer:{
        width: '100%',
        height: 190,
        backgroundColor: '#F8F3E7'

    },

    headerText:{

        fontFamily: 'poppins',
        fontSize: 20,
        color:'black',
        marginTop: 30
    },

    bodyText:{

        fontFamily: 'poppins',
        fontSize: 12,
        color:'black'
    },

    brownText:{

        fontFamily: 'poppins',
        fontSize: 12,
        color:'#AC8E5B',
        marginLeft: 10
    },

    card: {
        width: 190,
        height: 50,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset:{
            width:3,
            height:3
        },
        borderRadius: 8,
        marginLeft: 10,
        position: 'absolute',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    overlay: {
        width: '100%',
        height: 262,
        backgroundColor: 'black'

    },

    imgContainer: {
        width: '100%',
        height: 262,
        resizeMode: 'cover',
        opacity: 0.75
       
    }

});


