/**
 * Created by zhaoruisheng on 2017/8/29.
 */


import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class picture extends  Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    图片页面

                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF',
    },
    welcome: {
        fontSize:20,

    }
});