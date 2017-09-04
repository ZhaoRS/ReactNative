/**
 * Created by zhaoruisheng on 2017/8/29.
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import List from './Component/List/list';
import Edit from './Component/Edit/edit';
import Picture from './Component/Picture/picture';
import Account from './Component/Account/account';

import ZRSTabBar from './ZRSTabBar'

import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            tabNames:['视频', '录制', '图片', '我的'],
            tabIconNames:['ios-videocam-outline','ios-recording',
                'ios-reverse-camera','ios-contact']
        }
    }

    render() {
        let tabNames = this.state.tabNames;
        let tabIconNames = this.state.tabIconNames;
        return(
            <ScrollableTabView
                renderTabBar={()=><ZRSTabBar tabNames={tabNames} tabIconNames={tabIconNames}/>}
                tabBarPosition="bottom"
                scrollWithoutAnimation={true}
                locked={true}
            >
                <List tabLabel="list"/>
                <Edit tabLabel="edit"/>
                <Picture tabLabel="pic"/>
                <Account tabLabel="account"/>
            </ScrollableTabView>
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
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10,
    },
});