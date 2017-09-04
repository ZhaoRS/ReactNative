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

import {
    StackNavigator, TabNavigator
} from 'react-navigation';


import HomeView from './Home';
import FindView from './Find';
import ChatView from './Chat'

 class ZRSTabBar extends Component {
     
    render() {
        return (
            <View style={styles.container}>
                <Text style={{padding:10}}>
                    Hello, Navigation!
                </Text>
            </View>
        )
    }
}



const  MainScreenNavigator = TabNavigator({
    Home:{
        screen:HomeView,
        navigationOptions:{
            tabBarLabel:'我的',
            title:'我的',
            tabBarIcon:({tintColor}) => (
                <Image
                    style={[{tintColor:tintColor}, styles.icon]}
                    source={require('./tabbar_home.png')}
                >
                </Image>
            ),
        }
    },

    Find:{
        screen:FindView,
        navigationOptions: {
            tabBarLabel:'发现',
            // title:'发现',
            tabBarIcon:({tintColor}) => (
                <Image
                    style={[{tintColor:tintColor}, styles.icon]}
                    source={require('./tabbar_discover.png')}
                >
                </Image>
            ),
        }
    },
}, {
    animationEnabled: false,
    tabBarPosition:'bottom',
    swipeEnabled: false,
    backBehavior:'none',
    tabBarOptions: {
        activeTintColor:'#008AC9',
        inactiveTintColor:'black',
        showIcon:true,
        indicatorStyle:{height: 0},
        style: {
            backgroundColor: '#fff',
        },
        labelStyle: {
            fontSize:12,
            marginBottom:5,
        },
    },
});

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    icon:{
        height:22,
        width:22,
        resizeMode:'contain'
    }
});

const SimpleApp = StackNavigator({
    Home:{screen:MainScreenNavigator},
    Chat:{screen:ChatView},

});

export default SimpleApp;