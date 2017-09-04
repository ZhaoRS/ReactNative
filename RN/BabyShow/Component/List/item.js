/**
 * Created by zhaoruisheng on 2017/9/4.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';


export default class item extends Component {

    constructor(props) {
        super(props);
        this.state={
            rowData:this.props.rowData,
        }
    }

    render() {
        let rowData = this.stte.rowData

        return (
            <TouchableOpacity>
                {/*整个cell*/}
                <View style={styles.cellStyle}>
                    {/*标题文字*/}
                    <Text style={styles.title}>{rowData.title}</Text>
                    {/*封面 图片*/}
                    <Image style={styles.thumbStyle} source={{uri:rowData.thumb}}>
                        <Icon name="ios-play"
                              size={30}
                              style={styles.play}
                        >
                        </Icon>
                    </Image>
                    {/*cellFooter*/}
                    {/*cellFooter*/}
                    <View style={styles.cellFooter}>
                        {/*点赞*/}
                        <View style={styles.footerBox}>
                            <Icon name="ios-heart-outline"
                                  size={30}
                                  style={styles.BoxIcon}
                            />
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
    cellStyles:{
        width:width,
        marginTop:10,
        backgroundColor:'white',
    },
    title:{
        fontSize:18,
        padding:10,
        color:'black'
    },
    thumbStyle:{
        width:width,
        height:width * 0.56,
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
        backgroundColor:'#dddddd'
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
        fontSize:18,
        color:'#333',
        paddingLeft:12,
    },

});