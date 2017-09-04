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
    Button,
    ListView,
    TouchableOpacity,
} from 'react-native';


import ZRSCellView from './Cell'

export default class  Home extends Component {


    constructor(props){
        super(props);
        this.state={
            //cell数据
            dataSource: new ListView.DataSource({
                rowHasChanged:(r1, r2)=> r1!==r2
            }),
            base_url:'http://api.budejie.com/api/api_open.php?a=list&c=data&type=29'
        }
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
                style={{backgroundColor:'#dddddd', paddingTop:10}}
            >

            </ListView>
        );
    }

    renderRow(rowData) {
        var obj = this;
        return(
            <View style={styles.cellStyle}>
                <TouchableOpacity
                    activeOpacity={0.0}
                    onPress={()=>{
                        obj.props.navigator.push({
                            component:ZRSCellView,
                            params:{
                                title:'cell'
                            }
                        })
                    }}
                >
                    {/*上部分*/}
                    <View style={styles.topViewStyle}>
                        {/*图片*/}
                        <Image source={{uri:rowData.profile_image}} style={{width:40,height:40,borderRadius:20}}></Image>
                        {/*名字*/}
                        <Text style={styles.nameStyle}>{rowData.name}</Text>
                    </View>
                    {/*正文*/}
                    <Text style={styles.textStyle}>{rowData.text}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    pushTo(){
        AlertIOS.alert('来了');
    }

    componentDidMount() {
        //发送网络请求
        this.loadData();
    }
    //网络请求
    loadData() {
        fetch(this.state.base_url)
            .then((response)=> response.json())
            .then((responseJson)=> {
                //拿到数据
                var jsonData = responseJson.list;
                console.log(jsonData)
                //更新数据
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(jsonData)
                })
            })
    }
}



const styles = StyleSheet.create({
   cellStyle:{
       width:375,
       height:250,
       marginTop:10,
       marginLeft:5,
       marginRight:5,
       borderBottomWidth:0.5,
       borderBottomColor:'#dddddd',
       backgroundColor:'white',
       padding:5
   } ,
    nameStyle:{
        lineHeight:40,
        textAlign:'center',
        paddingLeft:15,
    },
    textStyle:{
        padding:5
    },
    topViewStyle:{
        flexDirection:'row'
    }
});