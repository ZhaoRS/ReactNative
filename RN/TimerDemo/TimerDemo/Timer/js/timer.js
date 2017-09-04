/**
 * Created by zhaoruisheng on 2017/8/15.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    AlertIOS,
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

//引入定时器
var TimerMixin = require('react-native-mixin');
//引入json数据
var Imagedata = require('../data.json');

export  default class TimerDemo extends  Component {
    state={
        //当前页面
        currentPage:0,
    };
    //注册计时器
    mixins:[TimerMixin];

    //初始化固定值  毫秒
    static defaultProps={
        duration:1000
    };


    //UI加载完毕
    componentDidMount() {
        //开启定时器
        this.startTimer();
    }

    //开启定时器
    startTimer(){
        //写逻辑代码
        //1.拿到scrollView
        var scrollView = this.refs.scrollView;
        var obj = this;
        var imgCount = Imagedata.data.length;
        //2.添加定时器
        this.timer = setInterval(function () {
            //2.1设置圆点
            var activePage = 0;
            //2.2判断
            if ((obj.state.currentPage + 1) >= imgCount) {
                //清零
                activePage = 0;
            } else {
                activePage = obj.state.currentPage + 1;
            }
            //2.3更新状态机
            obj.setState({
                currentPage:activePage
            });
            //2.4滚动起来
            var offsetX = activePage * width;
            scrollView.scrollTo({x:offsetX, y:0,animated:true})
        }, this.props.duration);
    }

    render() {
        return (
            <View style={styles.TopViewStyle}>
                <ScrollView ref="scrollView"
                            horizontal={true}
                            //隐藏水平滚动条
                            showsHorizontalScrollIndicator={false}
                            //自动分页
                            pagingEnabled={true}
                            //触发滚动结束的事件
                            // onScrollAnimationEnd{()}=>this.scrollEnd()
                            //这是当一帧滚动结束后
                            onMomentumScrollEnd = {(e)=>this.onAnimationEnd(e)}
                            onScrollBeginDrag={()=>this.ScrollBeginDrag()}
                 >
                    {this.renderAllImage()}
                </ScrollView>
                {/*返回指示器*/}
                <View style={styles.pageViewStyle}>
                    {/*给5个小点点*/}
                    {this.renderPageCircle()}
                </View>
            </View>
        );
    }
    ScrollEndDrag(){
        this.startTimer();
    }
    scrollBeginDrag(){
        clearInterval(this.timer);
    }

    //滚动结束
    onAnimationEnd(e){
        //1.拿到偏移量
        var offsetX = e.nativeEvent.contentOffset.x;

        //2.求出当前页数
        var currentPage = Math.floor(offsetX/ width);

        //3.更新状态机，重新绘制UI
        this.setState({
            currentPage:currentPage
        });
    }

    //返回小点点
    renderPageCircle(){
        //定义一个数组
        var indicatorArr = [];
        var style;

        //拿到图像数组
        var imgsArr = Imagedata.data;
        //遍历
        for(var i = 0; i< imgsArr.length; i++) {
            //判断
            style = (i==this.state.currentPage)?{color:'orange'} : {color:'#ffffff'}
            indicatorArr.push(
                <Text key={i}
                      style={[{fontsize:25}, style]}
                >
                    &bull;
                </Text>
            )
        }
        //返回
        return indicatorArr;
    }


    renderAllImage(){
        //数组
        var allImage = [];
        //拿到图片数据
        var imgsArr = Imagedata.data;
        //遍历
        for (var i=0; i < imgsArr.length; i++) {
            //取出单个图片名称
            var imgItem = imgsArr[i];
            //创建组件添加到数组
            allImage.push(
                <Image key={i}
                       source={{uri:imgItem.img}}
                       style={{width:width,height:120}}
                ></Image>
            )
        }
        return allImage;
    }
}

const styles = StyleSheet.create({
    TopViewStyle:{
        marginTop:25
    },
    pageViewStyle:{
        width:width,
        height:25,
        backgroundColor:'rgba(0,0,0,0.4)',
        //定位
        position:'absolute',
        bottom:0,
        //主轴方向
        flexDirection:'row',
        //侧轴居中
        alignItems:'center',
        justifyContent:'flex-end',
    }
});

module.exports = Timer;