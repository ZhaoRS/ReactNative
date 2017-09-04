
/**
 * Created by zhaoruisheng on 2017/8/21.
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    AlertIOS,
} from 'react-native';

var {requireNativeComponent} = require('react-native');
//第一个参数 名字就是ios原生的类名  那么吐过有Manager 那么请去掉
var ZRSView = requireNativeComponent('ZRSViewOne', IOSView);

import {NativeModules} from 'react-native';
var ZRSViewOne = NativeModules.ZRSViewOne;
ZRSViewOne.changeTitle('我来了！！！！！！！！');

export default class IOSView extends Component {
    render() {
        return (
            <ZRSView style={{flex:1}}/>
        );
    }

    viewClick() {
        //为了严谨起见   先判断
        if (this.props.getUserName) {
            this.props.getUserName('最帅了')
        }

        //prorps属性 这个属性是你这个对象创建的时候定义的
        this.props.nav.pop();
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
    }
}) ;