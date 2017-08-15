/**
 * Created by zhaoruisheng on 2017/8/10.
 */

//增加
// document.write('<img src="img_05.jpg">');

//拿到div
var main = document.getElementById('main');
//创建图片
var img = document.createElement('img');
img.src='img_05.jpg';
img.className = 'img';
//o添加
console.log(img);
main.appendChild(img);
