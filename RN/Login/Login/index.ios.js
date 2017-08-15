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

//引入外部样式
var LoginView = require('./login/js/loginView');

export default class Login extends Component {
  render() {
    return (
      <LoginView/>
    );
  }
}



AppRegistry.registerComponent('Login', () => Login);
