import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { StackNavigator, createAppContainer, createSwitchNavigator, createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import AccountScreen from '../screens/AccountScreen';
import EventScreen from '../screens/EventScreen';
import LoginScreen from '../screens/LoginScreen';
import Onboarding from '../screens/Onboarding';

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
    Home: HomeScreen,
    Search: SearchScreen,
    Account: AccountScreen,
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
    SignIn: LoginScreen

  });
  
  
  const MainNavigator = createSwitchNavigator({
   
    Auth: AuthenticationNavigator,
    Home: TabNavigator,
    Event: EventScreen,

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




/*
class AppNavigator extends React.Component{

    render(){

        return <AppContainer />;
    }
}


class WelcomeScreen extends React.Component{

    render(){

        return(
            <View>
                <Text>
                    Flyer
                </Text>
                <Button title='Login' onPress={() => this.props.navigation.navigate('HomeScreen')}/>
            </View>
        );
    }
}

const AppSwitchNavigator = createSwitchNavigator({

    Home: { screen : HomeScreen },
    Search: { screen : SearchScreen },
    Account: { screen : AccountScreen }

    

})





const AppStackNavigator = createStackNavigator({

    main: MainTabNavigator

}

);







const HomeStack = createStackNavigator({
    Home: HomeScreen,
  });
  
  HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
  
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-information-circle${focused ? '' : '-outline'}`
            : 'md-information-circle'
        }
      />
    ),
  };
  
  
  
  const SearchStack = createStackNavigator({
    Search: SearchScreen,
  });
  
  SearchStack.navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
      />
    ),
  };
  
  
  const AccountStack = createStackNavigator({
    Account: AccountScreen,
  });
  
  AccountStack.navigationOptions = {
    tabBarLabel: 'For you',
    tabBarIcon: ({ focused }) => (
  
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
      />
    ),
  };
  
  
  export default createBottomTabNavigator({
    HomeStack,
    SearchStack,
    AccountStack,
  });
  

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
*/