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

import Timer from  'Timer/js/timer';

export default class TimerDemo extends Component {
  render() {
    return (
        <Timer/>
    );
  }
}
//

AppRegistry.registerComponent('TimerDemo', () => TimerDemo);
