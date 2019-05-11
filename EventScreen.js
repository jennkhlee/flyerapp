import React from 'react';
import {View, Image, Button,TouchableHighlight,TouchableOpacity, Text, ScrollView, StyleSheet} from 'react-native';
const testImg = 'http://www.savannah.com/wp-content/uploads/Savannah-Doggie-Carnival-Races-700x350.jpg';
import firebase from 'firebase';

export default class EventScreen extends React.Component {


    constructor(props){
        super(props)
        this.ref = firebase.firestore().collection('events');

        const {navigation} = this.props

        console.log('auth: '+firebase.auth().currentUser.uid)
  
        this.state = {
          /* reference for the user as well as the information for the event*/
          currentUser: null,
          title: "",
          time: "",
          org: "",
          desc: "",
          date: "",
          /* grab the event id that has either been passed in from props or from navigation your choice */
  
          eventId: this.props.eventId || navigation.getParam('eventId', 'failed3')
        }
        console.log(this.state.eventId)
      }
  
      componentDidMount(){
        /* once it is loaded in query the database for the event and set all of the states for the event info accordingly */
        this.ref.doc(this.state.eventId).onSnapshot((doc) => {
          console.log('title: '+doc.data().title)

          this.setState({title: doc.data().title})
          this.setState({time: doc.data().time})
          this.setState({org: doc.data().org})
          this.setState({desc: doc.data().desc})
          this.setState({date: doc.data().date})
        })
      }


    rsvpEvent(){
      /* go to the event id and add in a reference saying that the logged in user rsvped for the event */
      this.ref.doc(this.state.eventId).collection('rsvp').add({
        id: firebase.auth().currentUser.uid,
      });
      
      /* go to the logged in user's db reference and add to their rsvp collection a reference to the event id */
      firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).collection('rsvp').add({
        eventId: this.state.eventId
      })
    }


    changeScreen(screen){
        console.log('going to screen: '+screen)
        this.props.navigation.navigate(screen)
      }


    render() {
        const {navigation} = this.props;
        const title = navigation.getParam('title', 'failed')
        const date = navigation.getParam('event')
        const time = navigation.getParam('time')
        const desc = navigation.getParam('desc')
        const organization = navigation.getParam('organization')

        const id = navigation. getParam('eventId', 'failed2')

        return(

         <ScrollView style={styles.container}>

            <View>


                <Image style={styles.cardImage} source={{uri: testImg}}>
                </Image>


                <View style={styles.overlay}>
                </View>

                <Button title='back' onPress={() => this.changeScreen('Home')}>
                </Button>

                <Image style={{marginTop:15, marginLeft: 5, position: 'absolute'}}
                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/icons/backArrow_white.png')}
                />
                                    

                <TouchableOpacity style={styles.RSVPbutton}
                onPress={() => this.rsvpEvent()}>
                <Text style={styles.buttonText}> RSVP for this event</Text>
                </TouchableOpacity>


                <View style={{position: 'absolute', marginLeft:20, marginTop: 110}}>
                    <Text style={styles.headerText}>

                    {JSON.stringify(title)}
                    
                    </Text>

                    <Text style={styles.orgText}>
                    {JSON.stringify(organization)}
                    </Text>

                    <Text style={styles.descText}>
                    {JSON.stringify(desc)}
                    </Text>
                </View>




            </View>





        <View style={styles.eventInfoContainer}>

            <View style={styles.eventInfoSubContainer}>
                <Text style={styles.dateText}>
                {JSON.stringify(date)}
                </Text>
            </View>

            <View style={styles.eventInfoSubContainer}>
                <Text style={styles.eventInfoText}>
                {JSON.stringify(time)}
                </Text>
            </View>

            <View style={styles.eventInfoSubContainer}>
                <Text style={styles.eventInfoText}>
                    15 min. away
                </Text>
            </View>

        </View>



        <View style={styles.floatingCard}>

            <View style={{flex:1, flexDirection: 'row', marginLeft:10}}>
                <Image style={{height: 35, width: 35, borderRadius: 18, resizeMode:'cover'}}
                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/users/lady3.png')}
                />
                <Image style={{height: 35, width: 35, borderRadius: 18, resizeMode:'cover'}}
                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/users/lady1.png')}
                />
                <Image style={{height: 35, width: 35, borderRadius: 18, resizeMode:'cover'}}
                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/users/lady6.png')}
                />
            </View>

            <View style={{maxWidth: 140, flex:3}}>
                <Text style={{fontFamily: 'poppins', fontSize: 10, color: 'black'}}>
                78 volunteers are volunteering for this event
                </Text>
            </View>


        </View>





<View style={{marginTop: 20, marginBottom:30}}>

            <View style={{marginLeft:20}}>
                        <Text style={styles.darkHeaderText}>
                            About
                        </Text>

                        <View style={{width: '100%'}}>

                        <Text style={styles.mainDescText}>
                            Your four-legged guest can partake in the doggie derby, doggie agility equipment, paw print art, pet paint, doggie pools, tests to see if they would do as well as emotional support dogs, doggie and me photo booths, dog treat decorating... read more
                        </Text>

                        </View>



            </View>



            <View style={styles.aboutBacking}>

                            <Image style={{height: 175, opacity: 0.1, resizeMode:'cover'}}
                            source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/images/patterns.png')}
                            />

                            <View style={{marginLeft: 20, width: '100%', position: 'absolute'}}>

                            <Text style={styles.whiteHeaderText}>
                            Our Goal
                            </Text>

                            <Text style={styles.descText}>
                            {JSON.stringify(desc)}
                            </Text>

                            </View>

            </View>


            



            <View style={styles.missionBacking}>
                <Image style={{height: 175, opacity: 0.1, resizeMode:'contain'}}
                                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/images/patterns.png')}
                                />


                                <View style={{marginLeft: 20, width: '100%', position: 'absolute'}}>

                                <Text style={styles.darkHeaderText}>

                                    Our Mission
                                </Text>

                                <Text style={styles.darkBodyCopy}>
                                    All funding for the Humane Society for Greater Savannah is by private donations from indivduals, businesses, trusts, and foundations. With your support we can continue the incredible work of our staff and volunteers here at HSGS.
                                </Text>

                                </View>

            </View>




            <View style={{marginLeft:20, marginTop: 20}}>
                        <Text style={styles.darkHeaderText}>
                            Organizers
                        </Text>

                        <View style={{flexDirection: 'row'}}>



                            <View style={styles.teamCards}>

                            <Image style={{height: 50, width: 115, resizeMode:'cover', position: 'absolute', top:1, opacity: 0.5}}
                                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/images/patterns.png')}
                                />



                            <Image style={{height: 69, width: 69, borderRadius: 30, resizeMode:'cover', marginTop: -10}}
                                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/users/dude4.png')}
                                />

                                <Text style={{fontFamily: 'poppins', fontSize: 12, color: 'black', marginTop:5}}>
                                    Mike Furtak
                                </Text>
                                <Text style={{fontFamily: 'poppins', fontSize: 10, color: '#6B6B6B'}}>
                                    Lead Event Coordinator
                                </Text>

                            </View>




                            <View style={styles.teamCards}>

                            <Image style={{height: 50, width: 115, resizeMode:'cover', position: 'absolute', top:1, opacity: 0.5}}
                                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/images/pattern1.png')}
                                />
                            <Image style={{height: 69, width: 69, borderRadius: 30, resizeMode:'cover', marginTop: -10}}
                                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/users/lady1.png')}
                                />

                                <Text style={{fontFamily: 'poppins', fontSize: 12, color: 'black', marginTop:5}}>
                                    Coco Papy
                                </Text>
                                <Text style={{fontFamily: 'poppins', fontSize: 10, color: '#6B6B6B'}}>
                                    Event Supervisor
                                </Text>

                            </View>





                            <View style={styles.teamCards}>

                            <Image style={{height: 50, width: 115, resizeMode:'cover', position: 'absolute', top:1, opacity: 0.5}}
                                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/images/patterns.png')}
                                />



                            <Image style={{height: 69, width: 69, borderRadius: 30, resizeMode:'cover', marginTop: -10}}
                                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/users/lady7.png')}
                                />

                                <Text style={{fontFamily: 'poppins', fontSize: 12, color: 'black', marginTop:5}}>
                                    Craig Kwong
                                </Text>
                                <Text style={{fontFamily: 'poppins', fontSize: 10, color: '#6B6B6B'}}>
                                    Outreach Director
                                </Text>

                            </View>


                        </View>
            </View>





            <View style={{marginLeft:20, marginTop: 30}}>
                        <Text style={styles.darkHeaderText}>
                            Event Schedule
                        </Text>




                <View style={{flexDirection: 'row'}}>

                                <View style={{justifyContent: 'space-between', flex:1}}>
                                    <Text style={styles.timeText}>
                                        07:00am
                                    </Text>
                                    <Text style={styles.timeText}>
                                        08:00am
                                    </Text>
                                    <Text style={styles.timeText}>
                                        09:00am
                                    </Text>
                                
                                    <Text style={styles.timeText}>
                                        10:00am
                                    </Text>
                                    <Text style={styles.timeText}>
                                        11:00am
                                    </Text>
                                    <Text style={styles.timeText}>
                                        12:00pm
                                    </Text>
                                    <Text style={styles.timeText}>
                                        01:00pm
                                    </Text>
                                    <Text style={styles.timeText}>
                                        02:00pm
                                    </Text>
                                    <Text style={styles.timeText}>
                                        03:00pm
                                    </Text>
                                    <Text style={styles.timeText}>
                                        04:00pm
                                    </Text>
                                    <Text style={styles.timeText}>
                                        05:00pm
                                    </Text>
                                </View>




                                    <View style={{flex:2.5, flexDirection: 'column'}}>

                                        <View style={styles.scheduleCard}>

                                            <View style={{backgroundColor:'#1D5E54', width: 8, height:90, marginLeft:-80}}></View>

                                            <View style={{marginLeft:20}}>
                                                <Text style={{fontFamily: 'poppins', fontSize: 15, color: 'black', marginTop:20}}>
                                                    Set up
                                                </Text>
                                                <Text style={{fontFamily: 'poppins', fontSize: 12, color: '#1D5E54'}}>
                                                    18 volunteers needed
                                                </Text>

                                            </View>

                                        </View>





                                        <View style={styles.scheduleCard2}>

                                            <View style={{backgroundColor:'#FE8E7A', width: 8, height:154, marginLeft:-80}}></View>

                                            <View style={{marginLeft:20}}>
                                                <Text style={{fontFamily: 'poppins', fontSize: 15, color: 'black', marginTop:20}}>
                                                    Main event
                                                </Text>
                                                <Text style={{fontFamily: 'poppins', fontSize: 12, color: '#FE8E7A'}}>
                                                    30 volunteers needed
                                                </Text>

                                            </View>

                                        </View>





                                        <View style={styles.scheduleCard3}>

                                            <View style={{backgroundColor:'#6299F5', width: 8, height:49, marginLeft:-80}}></View>

                                            <View style={{marginLeft:20}}>
                                                <Text style={{fontFamily: 'poppins', fontSize: 15, color: 'black', marginTop:3}}>
                                                    Teardown
                                                </Text>
                                                <Text style={{fontFamily: 'poppins', fontSize: 12, color: '#6299F5'}}>
                                                    10 volunteers needed
                                                </Text>

                                            </View>

                                        </View>





                                    </View>




                    </View>


                </View>



        <View style={{marginLeft:20, marginTop: 30}}>
                        <Text style={styles.darkHeaderText}>
                            Badges
                        </Text>

                        <Image style={{resizeMode:'cover', marginLeft: 30, marginTop:10}}
                                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/badges/badges.png')}
                        />


        </View>


    </View>


    



</ScrollView>


       );
      }
}



const styles = StyleSheet.create({

    scheduleCard3:{
        width: 236,
        height: 49,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: '#000',
    shadowOpacity: 0.09,
    shadowRadius: 5,
    shadowOffset:{
        width:1,
        height:1
    },
    justifyContent: 'center',
    marginLeft: 5,
    marginTop: 10,
    flexDirection: 'row'
    },


    scheduleCard2:{
        width: 236,
        height: 154,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: '#000',
    shadowOpacity: 0.09,
    shadowRadius: 5,
    shadowOffset:{
        width:1,
        height:1
    },
    justifyContent: 'center',
    marginLeft: 5,
    marginTop: 10,
    flexDirection: 'row'
    },

    scheduleCard:{
        width: 236,
        height: 90,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: '#000',
    shadowOpacity: 0.09,
    shadowRadius: 5,
    shadowOffset:{
        width:1,
        height:1
    },
    justifyContent: 'center',
    marginLeft: 5,
    marginTop: 10,
    flexDirection: 'row'
    },




    timeText:{
        fontFamily: 'poppins',
        fontSize: 12,
        color: 'black',
        marginTop: 10,

    },

    teamCards:{
        width: 115,
        height: 152,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: '#000',
    shadowOpacity: 0.09,
    shadowRadius: 5,
    shadowOffset:{
        width:1,
        height:1
    },
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5   

    },

    darkBodyCopy:{
        fontFamily: 'poppins',
        color: '#004020',
        fontSize:12,

    },

    whiteHeaderText:{
        fontFamily: 'poppins',
        color: 'white',
        fontSize:20,

    },



    headerText:{
        fontFamily: 'poppins-bold',
        fontSize: 20,
        color: 'white',

    },



    darkHeaderText:{
        fontFamily: 'poppins',
        fontSize: 20,
        color: 'black',

    },
      
    orgText:{
        fontFamily: 'poppins-bold',
        fontSize: 14,
        color: 'white',
        marginTop: 5,
      },

      descText:{
        fontFamily: 'poppins',
        fontSize: 12,
        color: 'white',
    
      },

      mainDescText:{
        fontFamily: 'poppins',
        fontSize: 12,
        color: 'black',
    
      },







    RSVPbutton: {
        backgroundColor: 'white',
        width: 148,
        height: 34,
        shadowColor: '#000',
    shadowOpacity: 0.09,
    shadowRadius: 5,
    shadowOffset:{
        width:1,
        height:1
    },
    marginLeft: 10,
    borderRadius: 8,
    position: 'absolute',
    top: 20,
    left: 200,
    justifyContent: 'center'


    },





    buttonText:{

        fontFamily: 'poppins-bold',
        fontSize:12,
        color:'black',
        alignSelf: 'center'
    
    },






    aboutBacking:{

        backgroundColor: '#3783FF',
        width: '100%',
        height: 175,
        marginTop:20,
        padding: 30,
        justifyContent: 'center'
        

    },



    missionBacking:{

        backgroundColor: '#C8E8E4',
        width: '100%',
        height: 175,
        marginTop:20,
        justifyContent: 'center'

        

    },






    floatingCard:{

        width: 350,
        height: 64,
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
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
    },


    




    eventInfoContainer: {
width: '100%',
height: 80,
backgroundColor: '#F8F3E7',
flexDirection: 'row',
justifyContent: 'space-between'

    },





    eventInfoSubContainer:{
        width: 100

    },






    eventInfoText: {

        fontFamily: 'poppins',
        fontSize: 12,
        color: '#666666',
        padding: 20
    },






    dateText: {

        fontFamily: 'poppins',
        fontSize: 19,
        color: '#FE8E7A',
        padding: 20
    },






    topContainer:{
        marginLeft:20,
        top: 10,
        justifyContent: 'space-between'

    },



    











    overlay: {
        left: 0,
        top: 0,
        backgroundColor: 'black',
        width: '100%',
        height: 300,
        opacity: 0.45,
        position: 'absolute'
      },







    container:{
        backgroundColor: '#F8F8F8'
    },






    cardImage:{

        width: '100%',
        height:225,
        resizeMode:'cover',
        backgroundColor: 'rgba(0,0,0,50)',

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
      marginTop: -350
    },
  
  
  

  
  
  

  
  });