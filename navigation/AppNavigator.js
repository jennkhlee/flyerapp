import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import { StackNavigator, createAppContainer, createSwitchNavigator, createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import AccountScreen from '../screens/AccountScreen';
import EventScreen from '../screens/EventScreen';
import SignupScreen from '../screens/SignupScreen';
import Onboarding from '../screens/Onboarding';
import Onboarding2 from '../screens/Onboarding2';
import ProfileScreen from '../screens/ProfileScreen';
import Discover from '../screens/DiscoverScreen';
import Profile from '../screens/SettingsScreen';
import SearchScreen_temp from '../screens/SearchScreen_temp';
import Organization from '../screens/OrganizationScreen';
import LoginScreen from '../screens/LoginScreen';



const HomeIcon = '/Users/jennkhlee/Desktop/flyervolapp/assets/images/homeIcon.png';


export default class AppNavigator extends React.Component {

    static navigationOptions = {
        header: null
      };

    render() {
      return <AppContainer />;
    }
  }


const TabNavigator = createBottomTabNavigator(
    {
    Home: {
      screen: HomeScreen,
      navigationOptions: {

        tabBarLabel: null,
        tabBarIcon: ({ tintColor }) => (

          <Image source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/images/homeIcon.png')}
          style={{height: 24, width: 24, tintColor: tintColor }}/>
        )
      }
    
    },

    Search: {
      screen: SearchScreen_temp,
      navigationOptions: {

        tabBarLabel: null,
        tabBarIcon: ({ tintColor }) => (

          <Image source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/icons/search_icon.png')}
          style={{height: 24, width: 24, tintColor: tintColor }}/>
        )
      }
    
    },
    
    Notifications: {
      screen: EventScreen,
      navigationOptions: {

        tabBarLabel: null,
        tabBarIcon: ({ tintColor }) => (

          <Image source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/icons/notif_icon.png')}
          style={{height: 24, width: 24, tintColor: tintColor, resizeMode: 'contain' }}/>
        )
      }
    
    },

    Profile: {
      screen: AccountScreen,
      navigationOptions: {

        tabBarLabel: null,
        tabBarIcon: ({ tintColor }) => (

          <Image source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/icons/profile_icon.png')}
          style={{height: 10, width: 10, tintColor: tintColor}}/>
        )
      }
    
    },

    },

  {
    defaultNavigationOptions: ({ navigation }) => ({
    tabBarOptions: {
      activeTintColor: '#584421',
      inactiveTintColor: '#E0CDAC',
      inactiveBackgroundColor: '#F8F3E7',
      activeBackgroundColor: '#F8F3E7',
    },
    style: {
        paddingTop: 100,
    }

  })
  }

  );

const AuthenticationNavigator = createStackNavigator({
    Onboard: Onboarding,
    Onboard2: Onboarding2,
    SignIn: SignupScreen,
    Login: LoginScreen,
  });
  
  const MainNavigator = createSwitchNavigator({
   
    Auth: AuthenticationNavigator,
    Home: TabNavigator,
    Discover: Discover,
    Event: EventScreen,
    Account: AccountScreen,
    Settings: Profile,
    Organization: Organization,

  });

  
  const AppContainer = createAppContainer(MainNavigator);


  const styles = StyleSheet.create({

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



