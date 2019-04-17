import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class Onboarding extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return(
        <Image
          source={require('/Users/jennkhlee/Desktop/flyervolapp/assets/images/profile_temp.png')}
        />
   );
  }
}
