/**
 * Created by zhaoruisheng on 2017/8/18.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
} from 'react-native';

export default class ZRSTabBar extends Component {
    constructor(pros) {
        super(pros);
        this.state={
            //默认被选中的Item
            selectedTabBarItem:'home'
        }
    }

    render(){
        return (
            <View style={styles.container}>
                {/*头部*/}
                <View>
                    <Text>TabBar练习</Text>
                </View>
                {/*选项卡*/}
                <TabBarIOS
                    barTintColor='black'
                    tintColor='purple'
                >
                    {/*第一个*/}
                    <TabBarIOS.Item title="首页"
                                    badge="3"
                                    selected={this.state.selectedTabBarItem == 'home'}
                                    onPress={()=>{this.setState({selectedTabBarItem:'home'})}}
                    >
                        <View style={[styles.commonViewStyle,{backgroundColor:'red'}]}>
                            <Text>首页</Text>
                        </View>
                    </TabBarIOS.Item>
                    {/*第二个*/}
                    <TabBarIOS.Item systemIcon="bookmarks"
                                    selected={this.state.selectedTabBarItem == 'second'}
                                    onPress={()=>{this.setState({selectedTabBarItem:'second'})}}
                    >
                        <View style={[styles.commonViewStyle,{backgroundColor:'green'}]}>
                            <Text>第二页</Text>
                        </View>
                    </TabBarIOS.Item>
                    {/*第三个*/}
                    <TabBarIOS.Item systemIcon="downloads"
                                    selected={this.state.selectedTabBarItem == 'three'}
                                    onPress={()=>{this.setState({selectedTabBarItem:'three'})}}
                    >
                        <View style={[styles.commonViewStyle,{backgroundColor:'red'}]}>
                            <Text>第三页</Text>
                        </View>
                    </TabBarIOS.Item>
                    {/*第四个*/}
                    <TabBarIOS.Item systemIcon="search"
                                    selected={this.state.selectedTabBarItem == 'four'}
                                    onPress={()=>{this.setState({selectedTabBarItem:'four'})}}
                    >
                        <View style={[styles.commonViewStyle,{backgroundColor:'red'}]}>
                            <Text>第四页</Text>
                        </View>
                    </TabBarIOS.Item>
                </TabBarIOS>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5FCFF',
    },
    commonViewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
}) ;