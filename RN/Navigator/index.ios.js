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


import NavDemo from './NavDemo'

export default class Navigator extends Component {
  render() {
    return (
        <NavDemo/>
    );
  }
}

AppRegistry.registerComponent('Navigator', () => Navigator);
