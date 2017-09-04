/**
 * Created by zhaoruisheng on 2017/9/4.
 */


import Mock from 'mockjs';
import queryString from 'query-string';
import _ from 'lodash';
import config from './config';

//这哥们是个变量， 后面有个{}  因此 它就是个对象
let request={

}
    //设定params json对象
    request.get = (url, params) => {
        if (params) {
            url += '?' + queryString.stringify(params)
        }

        //发送网络请求
        return fetch(url)
            .then((response) => response.json())
            .then((response) => Mock.mock(response))
    }

    request.post = (url, body) => {
        //合并json对象
        let map = _.extend(config.map, {
            body:JSON.stringify(body)
        });

        return fetch(url, map)
            .then((response)=>response.json())
            .then((response)=>Mock.mock(response))
    }