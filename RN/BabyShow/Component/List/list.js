/**
 * Created by zhaoruisheng on 2017/8/29.
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Platform,
    TouchableOpacity,
    Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');

import Item from './item';


//Mockjs 解析随机的文字
var Mock = require('mockjs');


export default class list extends  Component {
    constructor(props) {
        super(props);
        this.state={
            dataSource:new  ListView.DataSource({
                rowHasChanged:(r1,r2)=>r1!==r2,
            }),
        };
    }
    //即将显示
    componentWillMount() {
        //加载本地数据
        this.dsfetchData();
    }


    componentDidMount() {
        //加载网络数据
        this._fetchData();
    }


    _fetchData() {
        let url = 'http://rap.taobao.org/mockjs/16560/api/list?accessToken=asdf';
        fetch(url).then(
            (response) => {
                return response.json()
            }
        ).then(
            (response) => {
                console.log('服务器返回的数据是' + result);
                let result = Mock.mock(response);

                //先判断有没有数据
                if (result.success) {
                    this.setState({
                        dataSource:this.state.dataSource.cloneWithRows(
                            result.data
                        )
                    })
                }
            }
        )
    }

    //加载本地缓存数据
    dsfetchData() {
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(
                [
                    {
                        "_id":"310000201509264118","thumb":"https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg","title":"@cparagraph(1, 3)","video":"http://v.youku.com/v_show/id_XMjY4NjExNzY5Mg==.html"
                    }
                    ,
                    {
                        "_id":"140000199312068349","thumb":"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3639052971,809462691&fm=173&s=6EB0CC4D5A4E7A5DDC2D88970100C0E3&w=550&h=339&img.JPEG","title":"@cparagraph(1, 3)","video":"http://v.youku.com/v_show/id_XMjY4NjExNzY5Mg==.html"
                    }
                    ,
                    {
                        "_id":"350000197107158564","thumb":"https://ubmcmm.baidustatic.com/media/v1/0f000KYNwpfDo_1E7D2uMs.jpg","video":"http://v.youku.com/v_show/id_XMjY4NjExNzY5Mg==.html"
                    }
                ]
            )
        });
    }


    render() {
        return(
            <View style={styles.container}>
                {/*导航条*/}
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        视频列表
                    </Text>
                </View>
                {/*列表页面*/}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    style={styles.listView}
                >

                </ListView>
            </View>
        );
    }

    _renderRow = (rowData) =>{
        return(
            <TouchableOpacity>
                {/*整个cell*/}
                <View style={styles.cellStyle}>
                    {/*标题文字*/}
                    <Text style={styles.title}>
                        {rowData.title}
                    </Text>
                    <Image source={{uri:rowData.thumb}} style={styles.thumbStyle}>
                        <Icon
                            name='ios-play'
                            size={30}
                            style={styles.play}
                        >
                        </Icon>
                    </Image>
                    {/*cellFooter*/}
                    <View style={styles.cellFooter}>
                        {/*点赞*/}
                        <View style={styles.footerBox}>
                            <Icon name="ios-chatbubbles"
                                  size={30}
                                  style={styles.BoxIcon}
                            >
                            </Icon>
                            {/*点赞文字*/}
                            <Text style={styles.BoxText}>点赞</Text>
                        </View>
                        {/*评论*/}
                        <View style={styles.footerBox}>
                            <Icon name="ios-chatbubbles"
                                  size={30}
                                  style={styles.BoxIcon}
                            />
                            {/*点赞文字*/}
                            <Text style={styles.BoxText}>评论</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5FCFF',
    },
    header:{
        paddingTop:25,
        paddingBottom:15,
        backgroundColor:'#dddddd',
        borderBottomWidth:0.5,
        borderBottomColor:'black',
        marginTop:Platform.OS==='ios'?0:20,
    },
    headerText:{
        fontSize:16,
        fontWeight:'600',
        textAlign:'center',
    },
    cellStyle:{
        width: width,
        marginBottom:10,
        backgroundColor:'white'
    },
    title:{
        fontSize:18,
        padding:10,
        color:'black',
    },
    thumbStyle:{
        width:width,
        height: width *0.56,
        backgroundColor:'black',
        resizeMode:'cover',
    },
    play:{
        position:'absolute',
        bottom:14,
        right:14,
        width:46,
        height:46,
        paddingTop:9,
        paddingLeft:18,
        backgroundColor:'transparent',
        borderColor:'black',
        borderWidth:1,
        borderRadius:23,
    },
    cellFooter:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#dddddd',
    },
    footerBox:{
        padding:10,
        flexDirection:'row',
        backgroundColor:'white',
        flex:1,
        marginLeft:1,
    },
    BoxIcon:{
        fontSize:22,
        color:'#333'
    },
    BoxText:{
        fontSize:22,
        color:'#333333',
    },
    listView:{

    },
});