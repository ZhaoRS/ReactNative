/**
 * Created by zhaoruisheng on 2017/8/10.
 */
function $(id) {
    //类型比较
    return typeof id == 'string' ? document.getElementById(id) : id;
}

//当前页面加载完毕
window.onload = function () {
    //拿到里标签和dom标签
    var lis = $("tab-header").getElementsByTagName('li');
    var contents = $('tab-content').getElementsByClassName('dom');

    //检测
    if (lis.length != contents.length) return;

    //遍历
    for (var  i = 0; i< lis.length; i ++){
        //取出每个li标签
        var li = lis[i];
        li.id = i;
        li.onmouseover = function () {//说明被用户选中了
            for(var j = 0; j< lis.length; j ++) {
                //让所有的标签都不被选中
                lis[j].className = '';
                contents[j].style.display = 'none';
            }
            this.className = 'selected';
            contents[this.id].style.display = 'block';

        }
    }
}