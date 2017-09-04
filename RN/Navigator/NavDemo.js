/**
 * Created by zhaoruisheng on 2017/8/21.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
} from 'react-native';

import {Navigator} from 'native-navigation';
import FirstView from './FirstView'

export default class NavDemo extends Component {
    render() {
        return(
            <NavigatorIOS
                initialRoute={{
                    component:FirstView,
                    params:{
                        title:'第一个试图',
                        haha:'哈哈',
                        hehe:'呵呵',
                        heihei:'嘿嘿'
                    }
                }}

            >

            </NavigatorIOS>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
    }
});

AppRegistry.registerComponent('NavTest', ()=> NavTest);

