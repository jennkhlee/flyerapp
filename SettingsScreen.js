import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  ActivityIndicator,
  FlatList,
  View,
} from 'react-native';
import MiniCard from '../components/MiniCard';
import firebase from 'firebase';

export default class Profile extends React.Component {

    constructor(props){
        super(props)
        /* create references to both paths we will need to access */
  
        this.ref = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).collection('rsvp')
        this.eventRef = firebase.firestore().collection('events')
  
        /* establish states to hold the event data and if we are done loading  */
  
        this.state = {
          events: [],
          loaded: false,
        }
      }
  
      /* start the process when the screen is loading */
  
      componentWillMount(){
        this.grabCards()
      }
      /* finish the process when the screen is done loading */
  
      componentDidMount(){
        this.setState({loaded: true})
      }

      


    grabCards(){
        var test = []; /*  set up an empty array to store our stuff in */
        /*  grab a snapshot of what the user's rsvps are currently and begin to cycle through them */
  
        this.ref.get().then(snapshotBoi => { snapshotBoi.forEach((docs) => {
  
            /* grab  the eventid from this rsvp instance using a where query, then look at the snap shot of it */
  
            this.eventRef.where('eventId', '==', docs.data().eventId).get().then( snapshot => {
              console.log(snapshot+ " snapshot boi")
  
              /* a catch just in case the doc couldn't be found  */
              if (snapshot.empty) {
                console.log('No matching documents.');
                return;
              }
  
              /* for each doc that is returned (should be just one... but just incase there are more)  */
              snapshot.forEach(doc => {
  
                console.log(doc.data().eventId+" new event id")
  
                const {contact, eventId, desc, email, name} = doc.data(); {/* this doesn't do anything  */}
                console.log('here')
  
                /* add the data from this rsvp into test by concating the array  */
  
                test = test.concat(doc.data())
  
                console.log('test-1'+test)
                
              });
  
  
              /* update our state with test/the data from that doc */
              this.setState({events: test})
              console.log(this.state.events+' test-2')
              console.log(this.state.events[0].desc+" <- <- <-")
            })
        })})
        console.log('test0'+test)
        console.log('test1'+this.state.events)
        console.log("shytboi"+this.eventCards)
      }

      


  render(){

    console.log("meow "+this.state.events)


        const eventCards = this.state.events.map((info)=> <MiniCard title={info.title}/>)
        /* load the data from our events into the cards and store them in an JSX object!  */
        /* ^^^^ you'll have to go into the minicard component and add in the stuff you wanna pass in  */



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



          <TouchableHighlight style={{top:30,marginLeft:30, height:30, width:30, position: 'absolute'}}
          onPress={() => this.props.navigation.navigate('Profile')}>
                <Image style={{resizeMode:'contain'}}
                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/icons/backArrow_white.png')}
                  />
        </TouchableHighlight>


            <View style={{top: 230, marginLeft: 10, position: 'absolute'}}>
                    <TouchableOpacity style={styles.card}>
                        <Text style={{fontFamily:'poppins', fontSize: 20, color:'black'}}>
                            Monica Ruiz
                        </Text>

                    </TouchableOpacity>
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
                    
                    {eventCards} 


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


