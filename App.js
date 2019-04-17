import React from 'react';
import { Platform, Text, StatusBar, StyleSheet, View, Button } from 'react-native';
import { StackNavigator, createAppContainer, createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createDrawerNavigator} from 'react-navigation';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator'
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import AccountScreen from './screens/AccountScreen';


export default class App extends React.Component {
 
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
        // PUT IN YOUR OWN LOADING SCREEN HERE

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
        // LOADING TYPEFACES
        'poppins': require('./assets/fonts/Poppins-Regular.ttf'),
        'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf')

      }),
    ]);
  };


  // Error handling
  _handleLoadingError = error => {

    console.warn(error);

  };

  // Loading complete
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

