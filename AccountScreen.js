import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import Card from '../components/Card';
import MiniCard from '../components/MiniCard';
import firebase from 'firebase';

var db = firebase.firestore();


export default class AccountScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

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




  
  render() {


    console.log("meow "+this.state.events)

    const eventCards = this.state.events.map((info)=> <MiniCard title={info.title}/>)
    /* load the data from our events into the cards and store them in an JSX object!  */

    const {navigation} = this.props;
    const title = navigation.getParam('title', 'failed')


    return(

      <ScrollView style={styles.mainContainer}>
       
      <View style={styles.topContainer}>

            <TouchableOpacity style={styles.floatingCard}
            onPress={()=> this.props.navigation.navigate('Settings')}>

                  <Image style={{marginLeft: 20,width: 40,height:40, borderRadius: 20, padding: 10}} source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/users/lady5.png')}/>

                    <Text style={styles.subHeaderText}> 
                      Hello, Monica
                    </Text>

                  <Image style={{marginLeft: 40,width: 100,height:64, resizeMode: 'stretch'}} source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/images/pattern1.png')}/>

            </TouchableOpacity>

          <View style={{marginTop: -40,flexDirection: 'column', justifyContent: 'space-between'}}>

          <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Image style={{resizeMode: 'contain', marginLeft:35}}
                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/icons/msg.png')}/>
                <Text style={styles.navText} onPress={()=> this.props.navigation.navigate('Profile')}>
                  Messages
                </Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Image style={{resizeMode: 'contain', marginLeft:35}}
                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/icons/people.png')}/>
                <Text style={styles.navText} onPress={()=> this.props.navigation.navigate('Profile')}>
                  Following
                </Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
            
                <Image style={{resizeMode: 'contain', marginLeft:35}}
                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/icons/settings.png')}/>
                <Text style={styles.navText} onPress={()=> this.props.navigation.navigate('Settings')}>
                  Settings
                </Text>
            </View>
            
        </View>



      </View>



<View style={{marginTop: 35}}>

        <Text style={styles.darkHeaderText}>
         Upcoming events
         </Text>

         

<View style={{flexDirection: 'row', marginLeft:20, justifyContent: 'flex-start',marginTop:10}}>

                    {eventCards} 

</View>


<View style={{marginTop: 20}}>

<Text style={styles.darkHeaderText}>
         Challenges
         </Text>

          <Image style={{resizeMode:'contain'}}
            source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/challenges/challenge1.png')}/>

          </View>
        
    </View>

</ScrollView> 
      
   );
  }

};


const styles = StyleSheet.create({

  mainContainer:{
    backgroundColor: '#f8f8f8',

  },

  subHeaderText:{
    fontFamily: 'poppins',
    color: 'black',
    fontSize: 18,
    marginLeft: 20

  },

  floatingCard:{

    width: 350,
    height: 64,
    marginTop: 40,
    backgroundColor: 'white',
    shadowColor: '#000',
shadowOpacity: 0.09,
shadowRadius: 5,
shadowOffset:{
    width:1,
    height:1
},
marginLeft: 10,
borderRadius: 8,
justifyContent: 'flex-start',
alignItems: 'center',
flexDirection: 'row'

},




  topContainer:{


    width: '100%',
    height: 250,
    backgroundColor: '#F8F3E7',
    justifyContent: 'space-between'


  },




  navText:{
    fontFamily: 'poppins',
    fontSize: 15,
    color: '#AC8E5B',
    marginLeft: 15,
    padding: 10
  },

  darkHeaderText:{
    fontFamily: 'poppins',
    fontSize: 20,
    color: 'black',
    marginLeft: 20

},


  imageHold:{
      flex: 1,
      width: 100,
      height: 100,
      resizeMode: 'contain',
  },

  headerText: {
    fontFamily: 'poppins-bold',
    fontSize: 16,
    color: 'black',
    padding: 25,
    marginBottom: -10
    

},

});