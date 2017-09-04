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

export default class SecondView extends Component {
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={}>
                    <Text>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    viewClick(){
        //判断先
        if (this.props.getUserName) {
            this.props.getUserName('我最帅')
        }

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
});