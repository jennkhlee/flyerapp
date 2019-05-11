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

import Card from '../components/Card';
import Playlist from '../components/Playlist';



export default class Discover extends React.Component {

  static navigationOptions = {
    header: null,
};

render(){

return(


    <ScrollView style={styles.container}>


                <View style={{backgroundColor:'#F8F3E7', height:200}}>

                <Image style={{opacity: 0.75, height: 200, marginLeft:100,resizeMode:'cover', position: 'absolute'}}
                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/images/patterns.png')}
                />

                <View style={{marginTop: 70, marginLeft:20}}>

                    <Text style={styles.welcomeText}>
                        Discover
                    </Text>
                    
                    <View style={styles.welcomeCardBacking}>
                            <Text style={styles.bodyCopyText}>
                            You have one event coming up today.
                            </Text>
                    </View>

                </View>





</View>





      <View style={styles.homeNav}>
        <Text style={styles.navText}
        onPress={() => this.props.navigation.navigate('Home')}>
        Feed
        </Text>

        <Text style={styles.navText}>
        Discover
        </Text>

        <Text style={styles.navText}>
        Map
        </Text>
        </View>




        <View style={{marginLeft: 30, marginTop: 20}}>

                  <Text style={styles.headerText}>
                    Weekly Mix
                  </Text>

                        

                  <ScrollView style={{flexDirection: 'row'}}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>


                  <TouchableOpacity style={{marginLeft:10, marginTop:10}}>        

<Image style={{height:128,width:128}}
        source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/images/sqpattern1.png')}
        />
<View style={styles.card}>
</View>

<Text style={{marginTop: 80, marginLeft:10,fontFamily: 'poppins', color: 'white', position:'absolute'}}>Feeling green</Text>

 </TouchableOpacity>





 <TouchableOpacity style={{marginLeft:10, marginTop:10}}>        

<Image style={{height:128,width:128}}
        source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/images/sqpattern3.png')}
        />
<View style={styles.card2}>
</View>

<Text style={{marginTop: 80, marginLeft:10,fontFamily: 'poppins', color: 'white', position:'absolute'}}>Animal week</Text>

 </TouchableOpacity>







 <TouchableOpacity style={{marginLeft:10, marginTop:10}}>        

<Image style={{height:128,width:128}}
        source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/images/sqpattern2.png')}
        />
<View style={styles.card3}>
</View>

<Text style={{marginTop: 80, marginLeft:10,fontFamily: 'poppins', color: 'white', position:'absolute'}}>City development</Text>

 </TouchableOpacity>


                  </ScrollView>



                  <Text style={styles.headerText}>
                    Challenges
                  </Text>


                  <ScrollView style={{flexDirection: 'row'}}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>

            

                  <View style={{flexDirection: 'row'}}>
                          <Image
                        source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/challenges/challenge1.png')}
                        />
                        <Image
                        source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/challenges/challenge1.png')}
                        />
                  </View>

</ScrollView>


                  <Text style={styles.headerText}>
                    Recommended events
                  </Text>

                  <ScrollView style={{flexDirection: 'row'}}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>

                      <Card />
                      <Card />
                  </ScrollView>



                 

        </View>



    </ScrollView>

);
}}

const styles = StyleSheet.create({


  card: {
    width: 128,
    height: 128,
    borderRadius: 8,
    backgroundColor: '#175B54',
    opacity: .85,
    position: 'absolute',
    shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowRadius: 5,
          shadowOffset:{
              width:3,
              height:3
          },

},

card2: {
  width: 128,
  height: 128,
  borderRadius: 8,
  backgroundColor: '#CC891A',
  opacity: .85,
  position: 'absolute',
  shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowRadius: 5,
          shadowOffset:{
              width:3,
              height:3
          },

},

card3: {
  width: 128,
  height: 128,
  borderRadius: 8,
  backgroundColor: '#C32129',
  opacity: .85,
  position: 'absolute',
  shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowRadius: 5,
          shadowOffset:{
              width:3,
              height:3
          },

},


  headerText:{

    fontFamily: 'poppins',
    color: 'black',
    fontSize: 20
  },

  homeNav:{
    backgroundColor: '#F8F3E7',
    height: 63,
    width: '100%',
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignContent: 'space-between'
  },

  navText:{
    fontFamily: 'poppins',
    color:'#AC8E5B',
    fontSize:20,
    padding: 20,
    marginLeft:10

  },

  welcomeCardBacking: {

    backgroundColor: 'white',
    width: 270,
    height: 38,
    shadowColor: '#000',
    shadowOpacity: 0.09,
    shadowRadius: 5,
    shadowOffset:{
        width:1,
        height:1
    },
    borderRadius: 8,
    marginTop:10,
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 30

},


  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },

  bodyCopyText: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'poppins'
  },




  welcomeText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'left',
    fontFamily: 'poppins-bold'

  },


});
