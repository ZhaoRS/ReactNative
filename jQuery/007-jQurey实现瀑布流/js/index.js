/**
 * Created by zhaoruisheng on 2017/8/9.
 */

$(window).on('load', function () {
    //1.实现瀑布流布局
    waterFall();
    //滚动加载更多
    $(window).on('scroll', function () {
        //是否加载数据
        if(checkWillLoad()){
            //假数据
            var data = {'dataImg':[{'img':'1.jpg'},{'img':'2.jpg'},
                {'img':'3.jpg'},{'img':'4.jpg'},{'img':'5.jpg'},
                {'img':'6.jpg'},{'img':'7.jpg'},{'img':'11.jpg'},
                {'img':'17.jpg'},{'img':'15.jpg'},{'img':'12.jpg'},]}
            //遍历加载盒子
            $.each(data.dataImg, function (index, value) {
                var newBox = $('<div>').addClass('box').appendTo($('#main'));
                var newPic = $('<div>').addClass('pic').appendTo($(newBox));
                $('<img>').attr('src','images/' + $(value).attr('img')).appendTo($(newPic));
            });
            //实现瀑布流
            waterFall();
        }
    });
});



function waterFall() {
    //拿到所有的盒子
    var allBox = $('#main>.box');
    //取出一个盒子的宽度，注意如果需要包括padding。那么就要用outerWidt()
    var boxWidth = $(allBox).eq(0).outerWidth();
    //拿到屏幕宽度
    var screenWidth = $(window).width();
    //求出列数
    var cols = Math.floor(screenWidth / boxWidth);
    //让父标签居中显示
    $('#main').css({
        'width':cols * boxWidth + 'px',
        'margin':'0 auto'
    });
    //对盒子进行定位
    var heightArr = [];
    //遍历
    $.each(allBox, function (index,value) {
        //取出单独盒子的高度
        var boxHeight = $(value).outerHeight();
        //判断
        if(index < cols){//第一行的盒子
            heightArr[index] = boxHeight;
        } else {//剩余需要定位的盒子
            //取出高度最矮的高度
            var minBoxHeight = Math.min.apply(null, heightArr);
            //取出最矮盒子的索引
            var minBoxIndex = $.inArray(minBoxHeight, heightArr);
            //定位
            $(value).css({
                'position':'absolute',
                'top':minBoxHeight + 'px',
                'left':minBoxIndex * boxWidth + 'px'
            });
            //跟新数组中最矮的高度
            heightArr[minBoxIndex] += boxHeight;
        }
    })
}

function checkWillLoad() {
    //拿到最后一个盒子
    var lastBox = $('#main>div').last();
    //内容最大高度
    var maxHeight = $(lastBox).outerHeight() * 0.5 + $(lastBox).offset().top;
    //浏览器的偏移量
    var scrollTopHeight = $(window).scrollTop();
    //浏览器的高度
    var screenHeight = $(window).height;
    return maxHeight <= screenHeight + scrollTopHeight;
}