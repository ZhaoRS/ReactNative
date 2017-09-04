/**
 * Created by zhaoruisheng on 2017/8/28.
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Cell extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.instructions}>
                    cell详情页
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
    instructions:{
        textAlign:'center',
        color:'#333333',
        marginBottom:5,
    },
});
