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

import ZRSTaabBar from './Component/ZRSTabBar'

export default class ReactNativeNation extends Component {
  render() {
    return (
        <ZRSTaabBar/>
    );
  }
}
AppRegistry.registerComponent('ReactNativeNation', () => ReactNativeNation);
