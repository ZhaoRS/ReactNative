/**
 * Created by zhaoruisheng on 2017/8/21.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    AlertIOS,
} from 'react-native';

import IOSView from './IOSView'

export default class FirstView extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:null
        }
    }

    render() {
        return(
            <View style={styles.container}>
                {/*导航条*/}
                <View style={styles.navStyle}>
                    {/*导航栏中间的文字*/}
                    <Text>{this.props.title+'名字是'+this.state.userName}</Text>
                </View>
                <TouchableOpacity onPress={()=>this.viewClick()}>
                    <Text>{this.props.title}</Text>
                </TouchableOpacity>

            </View>
        )
    }


    viewClick() {
        this.props.nav.push({
            component:IOSView,
            params:{
                title:'这是第二个页面',
                //从第二个页面获取的userName
                getUserName:function (user) {
                    this.setState({
                        userName:user
                    })
                }.bind(this)
            }
        })
    }
}

const  styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF',
    },
    navStyle:{
        position:'absolute',
        top:0,
        width:375,
        height:64,
        backgroundColor:'#dddddd',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:0.5,
        borderBottomColor:'rgba(1,1,1,1)',
        paddingTop:20,
    },
});