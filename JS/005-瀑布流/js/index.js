/**
 * Created by zhaoruisheng on 2017/8/8.
 */
function $(id) {
    return typeof  id === 'string' ? document.getElementById(id) : id;
}

//当网页加载完毕
window.onload = function () {
    //瀑布流布局
    waterFall('main','box');
    //滚动加载盒子
    window.onscroll = function () {
        //判断是否符合加载数据的条件
        if(cheackWillLoad()){
            //假数据
            var data = {'dataImg':[{'img':'1.jpg'},{'img':'2.jpg'},
                {'img':'3.jpg'},{'img':'4.jpg'},{'img':'5.jpg'},
                {'img':'6.jpg'},{'img':'7.jpg'},{'img':'11.jpg'},
                {'img':'17.jpg'},{'img':'15.jpg'},{'img':'12.jpg'},]}
            //加载数据
            for(var i = 0;i<data.dataImg.length;i++){
                //创建box
                var newBox = document.createElement('div');
                newBox.className = 'box';
                $('main').appendChild(newBox);
                //创建pic
                var newPic = document.createElement('div');
                newPic.className = 'pic';
                newBox.appendChild(newPic);
                //创建img
                var newImg = document.createElement('img');
                newImg.src = 'images/'+data.dataImg[i].img;
                newPic.appendChild(newImg);
            }
            //瀑布流布局
            waterFall('main','box');
        }
    }

}

//实现瀑布流布局
function waterFall(parent,box) {
//    父盒子居中
//    1.1拿到所有的子盒子
    var allBox = $(parent).getElementsByClassName(box);
    //1.2 求出盒子的宽度
    var boxWidth = allBox[0].offsetWidth;
    // alert(boxWidth);
    //1.3 求出浏览器的宽度
    var screenWidth = document.body.offsetWidth;
    // alert(screenWidth);
    //1.4求出列数
    var clos = Math.floor(screenWidth / boxWidth);
    // alert(clos);
    //1.5 父标签居中
    $(parent).style.width = boxWidth * clos + 'px';
    $(parent).style.margin = '0 auto';


    // 子盒子定位
    //1.1 高度数组
    var heightArr = [];
    //1.2 遍历
    for(var i = 0 ; i < allBox.length; i++){
        //1.2.1 求出盒子的高度
        var boxHeight = allBox[i].offsetHeight;
        if (i<clos){ //第一行中的盒子
            heightArr.push(boxHeight);
        }else {//需要定位的盒子
            //1.2.2 求出最矮的盒子的高度
            var minBoxHeight = Math.min.apply(this,heightArr);
            //1.2.3 求出最矮的盒子对于的索引
            var minBoxIndex = getMinBoxIndex(minBoxHeight,heightArr);
            //1.2.4 盒子定位
            allBox[i].style.position = 'absolute';
            allBox[i].style.top = minBoxHeight + 'px';
            allBox[i].style.left = minBoxIndex * boxWidth + 'px';
            //1.2.5 更新数组中最矮盒子的高度
            heightArr[minBoxIndex] += boxHeight;
        }
    }
    console.log(heightArr,minBoxHeight,minBoxIndex);

}

//去除数组中最矮盒子的对于的索引
function getMinBoxIndex(val, arr) {
    for(var i in arr){
        if (val == arr[i]) return i;
    }
}

//判断是否符合加载更多的条件
function cheackWillLoad() {
    //取出所有的盒子
    var allBox = $('main').getElementsByClassName('box');
    //取出最后一个盒子
    var lastBox = allBox[allBox.length - 1];
    //求出最后一个盒子高度的一半 + 头部偏移量
    var maxHeight = lastBox.offsetHeight * 0.5 + lastBox.offsetTop;
    //求出浏览器的高度
    var screenHeight = document.body.offsetHeight || document.documentElement
            .clientHeight;
    //页面的偏移屏幕的高度
    var scrollTopHeight = document.body.scrollTop;
    // console.log(maxHeight,screenHeight,scrollTopHeight);
    return maxHeight <= screenHeight + scrollTopHeight;
}