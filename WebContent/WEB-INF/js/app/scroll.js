/**
 * Created by Administrator on 2015/11/26.
 */
var speed=1; //数字越大速度越慢
var box=document.getElementById("navbox");
var box1=document.getElementById("navlist");

var MyMar=setInterval("Marquee(0)",speed);
function Marquee(s)
{
    box.scrollLeft+=s;
}
function onDown(a){MyMar=setInterval("Marquee("+a+")",speed);};
function onUp(){clearInterval(MyMar);};
