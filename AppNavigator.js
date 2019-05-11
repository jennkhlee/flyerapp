import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import { StackNavigator, createAppContainer, createSwitchNavigator, createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

import AccountScreen from '../screens/AccountScreen';

import SignupScreen from '../screens/SignupScreen';
import Onboarding from '../screens/onboarding/Onboarding';
import Onboarding2 from '../screens/onboarding/Onboarding2';
import Explanation1 from '../screens/onboarding/Explanation1';
import Explanation2 from '../screens/onboarding/Explanation2';
import Explanation3 from '../screens/onboarding/Explanation3';
import Explanation4 from '../screens/onboarding/Explanation4';
import Explanation5 from '../screens/onboarding/Explanation5';


import Profile from '../screens/SettingsScreen';
import Discover from '../screens/DiscoverScreen';
import SearchScreen_temp from '../screens/SearchScreen_temp';
import Organization from '../screens/OrganizationScreen';
import LoginScreen from '../screens/LoginScreen';
import Notifications from '../screens/Notifications';

import EventFeed from '../screens/EventFeed';
import EventScreen from '../screens/EventScreen';
import OrgFeed from '../screens/OrgFeed';

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
      screen: Notifications,
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
  
const OnboardingFlow = createStackNavigator({

  First: Onboarding,
  Second: Explanation1,
  Third: Explanation2,
  Fourth: Explanation3,
  Fifth: Explanation4,
  Sixth: Explanation5,
  Seventh: Onboarding2
})


const AuthenticationNavigator = createStackNavigator({

    Onboard: OnboardingFlow,
    SignIn: SignupScreen,
    Login: LoginScreen,

  });

  
  const MainNavigator = createSwitchNavigator({

    Auth: AuthenticationNavigator,
    Home: TabNavigator,
    Discover: Discover,

    Orgs: OrgFeed,

    Events: EventFeed,
    Organization: Organization,
    Event: EventScreen,

    Account: AccountScreen,
    Settings: Profile,


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



