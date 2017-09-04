/**
 * Created by zhaoruisheng on 2017/8/29.
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    PixelRatio,
    Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class ZRSTabBar extends  Component {

    static propTypes = {
        goToPage: React.PropTypes.func,//跳转到Tab的方法
        activeTab: React.PropTypes.number,//宣中锋的下标
        tabs: React.PropTypes.array, //tabs的集合！ 像OC items的数组

        //扩展自定义的属性
        tabNmaes:React.PropTypes.array,//文字的名字
        tabIconNames:React.PropTypes.array,//Item中图片的名字
    };

    render() {
        return(
            <View style={styles.tabStyle}>
                {/*返回一个一个的Item*/}
                {this.props.tabs.map((tab, i) => this.renderItem(tab, i))}
            </View>
        )
    }

    renderItem(tab, i) {
        //判断i是否是当前选中的tab
        const color = this.props.activeTab == i? "orange":"black";
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress ={()=>this.props.goToPage(i)}
                key={i}
                style={styles.tab}
            >
                <View style={styles.tabItem}>
                    <Icon
                        name={this.props.tabIconNames[i]}
                        size={30}
                        color={color}
                    >
                    </Icon>
                    <Text style={{color: color}}>{this.props.tabNames[i]}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    tabStyle:{
        flexDirection:'row',
        height:50,
    },
    tabItem:{
        alignItems:'center',
    },
    tab:{
        flex:1
    }
});