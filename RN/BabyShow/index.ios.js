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

import APP from './App'

export default class BabyShow extends Component {
  render() {
    return (
        <APP/>
    );
  }
}



AppRegistry.registerComponent('BabyShow', () => BabyShow);
