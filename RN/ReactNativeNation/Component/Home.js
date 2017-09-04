/**
 * Created by zhaoruisheng on 2017/8/25.
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    Image,
    Button
} from 'react-native';



export default class  Home extends Component {

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={{backgroundColor:'red', flex: 1}}>
                <Button onPress={()=> navigate('Chat', {user:'Sybil'})} title="点击跳转">
                </Button>
            </View>
        );
    }
}