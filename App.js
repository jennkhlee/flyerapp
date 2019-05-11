import React from 'react';
import { Platform, Text, StatusBar, StyleSheet, View, Button } from 'react-native';
import { StackNavigator, createAppContainer, createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createDrawerNavigator} from 'react-navigation';
import { AppLoading, Asset, Font, Icon } from 'expo';

import * as firebase from 'firebase';

import AppNavigator from './navigation/AppNavigator'
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import OrganizationScreen from './screens/OrganizationScreen';
import SearchScreen_temp from './screens/SearchScreen_temp';
import EventScreen from './screens/EventScreen';
import Discover from './screens/DiscoverScreen';
import OrgFeed from './screens/OrgFeed';
import EventFeed from './screens/EventFeed';


// Required for side-effects
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA1NtGfUqZQrvan6J3pJz8XbrEyKCGLIyE",
  authDomain: "flyerapp-test.firebaseapp.com",
  databaseURL: "https://flyerapp-test.firebaseio.com",
  projectId: "flyerapp-test",
  storageBucket: "flyerapp-test.appspot.com",

};


const AppNavi = createStackNavigator(
  {
    Events: EventFeed,
    Orgs: OrgFeed,

    Events: EventFeed,
    Organization: OrganizationScreen,
    Event: EventScreen
  },

  {
    initialRouteName: 'Events'
  }

)

const AppContainer = createAppContainer(AppNavi);


export default class App extends React.Component {
 
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (

        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );

    } else {

      return (
        <View style={styles.container}>

          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />

        </View>
      );
    }
  }



  _loadResourcesAsync = async () => {

    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/flyerlogo.png'),
      ]),

      Font.loadAsync({
        ...Icon.Ionicons.font,

        'poppins': require('./assets/fonts/Poppins-Regular.ttf'),
        'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf')
      }),
    ]);
  };


  _handleLoadingError = error => {
    console.warn(error);

  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}


// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

