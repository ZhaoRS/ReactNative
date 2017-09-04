/**
 * Created by zhaoruisheng on 2017/8/18.
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
} from 'react-native';

var Car = require('./Car.json');

export  default class ListViewTest2 extends Component {
    //构造函数
    constructor(props) {
        super(props);
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };
        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID+':'+rowID];
        };
        this.state = {
            dataSource:new  ListView.DataSource({
                getSectionData:getSectionData,//获取组数据
                getRowData:getRowData,//获取数据
                rowHasChanged:(r1,r2) => r1 !== r2,
                sectionHeaderHasChanged:(s1,s2) => s1 !== s2,
            })
        }
    }

    render() {
        return (
            <View>
                {/*头部的nav*/}
                <View style={styles.NavViewStyle}>
                    <Text style={{color:'white', fontSize: 25}}>这是汽车品牌展示</Text>
                </View>
                {/*ListView*/}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderSectionHeader={this.renderSectionHeaderView}
                >
                </ListView>
            </View>
        );
    }

    //返回每一组头部的内容
    renderSectionHeaderView (sectionData, sectionID) {
        return (
            <View style={styles.sectionHeaderStyle}>
                <Text style={{marginLeft:5, color:'red'}}>
                    {sectionData}
                </Text>
            </View>
        )
    }

    //返回每一行cell
    renderRow (rowData) {
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.rowStyle}>
                    <Image style={styles.rowImageStyle} source={{uri:rowData.icon}}></Image>
                    <Text style={{marginLeft:5}}>{rowData.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    //发送网络请求的生命周期方法
    componentDidMount() {
        //首先处理数据
        this.loadJson();
    }

    loadJson(){
        //拿到Json
        var jsonData = Car.data;
        //定义数据源需要的变量
        var dataBlob = {},
            sectionIds = [],
            rowIDs = [],//二维数组
            cars= [];

        //遍历
        for(var i = 0; i< jsonData.length; i ++) {
            //1.组ID拿到
            sectionIds.push(i);
            //2.dataBlob
            dataBlob[i] = jsonData[i].title;
            //3.取出这一组的所有的车子
            cars = jsonData[i].cars;
            rowIDs[i] = [];
            for (var j = 0; j < cars.length; j ++) {
                //i组的j行 那么这一行的ID就是j
                rowIDs[i].push(j);
                //每一行的内容都放到dataBlog里面
                dataBlob[i+':'+j] = cars[j];
            }
        }
        //更新状态机
        this.setState({
            dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIds,rowIDs)
        })
    }



}


const styles = StyleSheet.create ({
    container:{
        flex:1,
    },
    NavViewStyle:{
        height:64,
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center',
    },
    rowStyle:{
        padding:0,
        flexDirection:'row',
        alignItems:'center',
        //cell分割线
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },
    rowImageStyle:{
        width:70,
        height:70
    },
    sectionHeaderStyle:{
        backgroundColor:'#e8e8e8',
        height:25,
        justifyContent:'center'
    }
});