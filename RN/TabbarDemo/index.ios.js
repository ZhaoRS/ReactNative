/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


import TabBarText from './TabbarTest';

export default class TabbarDemo extends Component {
  render() {
    return (
        <TabBarText/>
    );
  }
}



AppRegistry.registerComponent('TabbarDemo', () => TabBarText);
