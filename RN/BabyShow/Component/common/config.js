/**
 * Created by zhaoruisheng on 2017/9/4.
 */


'use strict'

const config = {
    api:{
        base:'http://rap.taobao.org/mockjs/16560/',
        list:'api/lis',
    },


    map:{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
        },
        timeout:8000,
    }
}

module.exports = config