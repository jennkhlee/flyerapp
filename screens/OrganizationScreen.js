import React from 'react';
import {View, Image, TouchableOpacity, Text, ScrollView, StyleSheet} from 'react-native';
const testImg = 'https://stepupsavannah.org/site/assets/uploads/2018/11/DSC_3342.jpg';


class Organization extends React.Component {

    render() {
        return(

         <ScrollView style={styles.container}>




            <View>


                <Image style={styles.cardImage} source={{uri: testImg}}>
                </Image>


                <View style={styles.overlay}>
                </View>

                
                <Image style={{marginTop:15, marginLeft: 5, position: 'absolute'}}
                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/icons/backArrow_white.png')}
                onPress={() => this.props.navigation.navigate('Home')}
                />




                <TouchableOpacity style={styles.followButton}
                onPress={() => this.props.navigation.navigate('Home')}>
                <Text style={{fontFamily: 'poppins-bold', fontSize: 12, color: 'white'}}> Follow organization</Text>
                </TouchableOpacity>


                <Image style={{borderRadius: 40, width: 75, height: 75, marginTop:100, marginLeft: 20, position: 'absolute'}}
                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/organizations/stepup.png')}
                />


                <View style={{position: 'absolute', marginLeft:100, marginTop: 110}}>
                    <Text style={styles.headerText}>
                    Step Up Savannah
                    </Text>

                    <Text style={styles.descText}>
                    Fighting against poverty marginalization in Savannah.
                    </Text>
                </View>




            </View>




            



        <View style={styles.orgInfoContainer}>

            <View style={{height: 60, marginLeft: 10,alignItems:'center', flexDirection: 'row', justifyContent: 'flex-start'}}>


                        <View style={{alignItems: 'center',flexDirection: 'row', marginLeft:10, justifyContent: 'center'}}>
                                <Image style={styles.imgContainer}
                                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/users/lady3.png')}
                                />
                                <Image style={styles.imgContainer}
                                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/users/lady1.png')}
                                />
                                <Image style={styles.imgContainer}
                                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/users/lady6.png')}
                                />
                        </View>


                        <View style={{flex:3, marginLeft: 20}}>
                            <Text style={{fontFamily: 'poppins', fontSize: 10, color: 'black'}}>
                            Followed by 72 people near you
                            </Text>
                        </View>

                </View>


            <View style={{marginLeft: 25, marginTop: 20}}>

                <View style={{flexDirection: 'row'}}>

                    <Image style={{height:19,width:19, resizeMode: 'contain'}}
                    source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/icons/location.png')}
                    />
                    <Text style={{marginLeft: 10, fontFamily: 'poppins', fontSize: 10, color: 'black'}}>
                    428 Bull St # 208, Savannah, GA 31401
                    </Text>

                </View>

            </View>


                        <View style={{marginLeft: 25, marginTop: 20}}>

            <View style={{flexDirection: 'row'}}>

                <Image style={{height:19,width:19, resizeMode: 'contain'}}
                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/icons/cal.png')}
                />
                <Text style={{marginLeft: 10, fontFamily: 'poppins', fontSize: 10, color: 'black'}}>
                stepupsavannah.org
                </Text>

            </View>

            </View>


            <View style={{marginLeft: 25, marginTop: 20}}>

            <View style={{flexDirection: 'row'}}>

                <Image style={{height:19,width:19, resizeMode: 'contain'}}
                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/icons/call.png')}
                />
                <Text style={{marginLeft: 10, fontFamily: 'poppins', fontSize: 10, color: 'black'}}>
                (912)232-6742
                </Text>

            </View>

            </View>

            <View style={{marginLeft: 25, marginTop: 20}}>

            <View style={{flexDirection: 'row'}}>

                <Image style={{height:19,width:19, resizeMode: 'contain'}}
                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/icons/mail.png')}
                />
                <Text style={{marginLeft: 10, fontFamily: 'poppins', fontSize: 10, color: 'black'}}>
                tatiana@stepupsavannah.com
                </Text>

            </View>

            </View>
            


           

            



                <View style={{marginTop: 5, height:60, justifyContent: 'flex-start', flexDirection:'row', alignItems: 'center'}}>
                        <View style={{marginLeft: 30}}>
                            <Text style={{fontFamily: 'poppins', fontSize: 20, color: '#584421'}}>
                            About
                            </Text>
                        </View>
                        <View style={{marginLeft: 50}}>
                            <Text style={{fontFamily: 'poppins', fontSize: 20, color: '#584421', opacity: 0.5}}>
                            Events
                            </Text>
                        </View>

                    
                    </View>


 </View>



        


<View style={{marginTop: 30, marginBottom:30}}>

            <View style={{marginLeft:20}}>
                        <Text style={styles.darkHeaderText}>
                            Our mission
                        </Text>

                        <View style={{width: '100%'}}>

                        <Text style={{fontFamily:'poppins', fontSize: 14, color: 'black', maxWidth: 300}}>
                            We seek to bridge the gap between hardship and opportunity.
                        </Text>

                        <Text style={{marginTop: 20, fontFamily:'poppins', fontSize: 12, color: 'black', maxWidth: 300}}>
                            Acknowledging that the economic and fiscal stability of Savannah's impoverished neighborhoods is the key to the success of our community as a whole, Step Up Savannah organizes local businesses, community leaders, and volunteers to ccreate better futures...å
                        </Text>

                    </View>



            </View>

           



             <View style={{marginTop: 30,marginLeft:20}}>
                        <Text style={styles.darkHeaderText}>
                            What we do
                        </Text>  

                        <View style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'flex-start'}}>
                        
                                <Image style={{height:250, width: 250, resizeMode: 'cover'}}
                                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/causes/education_card.png')}
                                />
                                <Image style={{height:250, width: 250, resizeMode: 'cover'}}
                                source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/causes/sustainability_card.png')}
                                />

                        </View>

            </View>   








            <View style={{marginLeft:20, marginTop: 20}}>
                        <Text style={styles.darkHeaderText}>
                            Our team
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








        


    </View>


    



</ScrollView>


       );
      }
}



const styles = StyleSheet.create({

  

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

    imgContainer:{

        height: 35,
        width: 35,
        borderRadius: 18,
        resizeMode:'cover',
        shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset:{
        width:1,
        height:1
    },
      

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







    followButton: {
        backgroundColor: '#175B54',
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
    justifyContent: 'center',
    alignItems: 'center'


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


    




    orgInfoContainer: {
width: '100%',
backgroundColor: '#F8F3E7'
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

  export default Organization;