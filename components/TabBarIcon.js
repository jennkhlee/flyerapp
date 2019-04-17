import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {

  render() {
    return (
      <Icon.Ionicons

        // Name of the tab
        name={this.props.name}

        // Size of the icons
        size={30}

        style={{ marginBottom: -4 }}

        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}

      />
    );
  }
}