/**
 * Created by zhaoruisheng on 2017/8/28.
 */



import React from 'react';
import {
    Button,
    Image,
    View,
    Text
} from 'react-native';

export default class Chat extends React.Component {

    static navigationOptions = {
        title:'聊天',
    };

    render() {
        const {params} = this.props.navigation.state;
        return(
            <View style={{backgroundColor:'#fff', flex:1}}>
                <Text style={{padding: 20}}> 聊天界面 </Text>
            </View>
        );
    }
}



