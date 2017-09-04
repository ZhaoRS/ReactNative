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

import ZRSTabBar from './Component/ZRSTabBar';

export default class NewsDemo extends Component {
  render() {
    return (
        <ZRSTabBar/>

    );
  }
}


AppRegistry.registerComponent('NewsDemo', () => NewsDemo);
