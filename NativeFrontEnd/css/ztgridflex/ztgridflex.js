// 浏览器宽高，貌似不靠谱；
var _windowWidth = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var _windowHeight=window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

// 获取屏幕宽度
var _screenWidth = window.screen.width;
// 获取屏幕高度
var _screenHeight = window.screen.height;
// 获取可用工作区宽度
var _screenWidthAvailable = window.screen.availWidth;
// 获取可用工作区高度
var _screenHeightAvailable = window.screen.availHeight;
//可见区域
var _clickWidth = window.document.documentElement.clientWidth;
var _clickHeight = window.document.documentElement.clientHeight;

var _relativeWidth = Math.min(_windowWidth,_screenWidth,_screenWidthAvailable);
var _relativeHeight = Math.min(_windowHeight,_screenHeight,_screenHeightAvailable);
_oldWebView = (_screenWidth >= _clickWidth);

var _tempWidth;
var _tempHeight;

// x=document.getElementById("demo");
// x.innerHTML="浏览器window宽度: " + _windowWidth + ", 高度: " +  _windowHeight + "。"
function  ztmedia(){
    // console.log("_relativeWidth:",_relativeWidth);
    
    if(_relativeWidth <= 540 && !(_oldWebView)){
        // console.log("_windowWidth:",_windowWidth);
        var sms = document.getElementsByClassName("sm");
        // console.log("sms:",sms);
        // console.log("sms.length:",sms.length);
        var i;
        for(i =0 ;i < sms.length;i++){
            var sm = sms[i];
            //父元素
            // sm.parentElement
            var parent = sm.parentNode;
            //子元素
            // sm.children;
            // sm.childElementCount
            // sm.childNodes
            // var firstChild =sm.children[0];
            // sm.style.width = (_relativeWidth.toString()+"px");//移动端会有毛病

            // sm.style.width = (parent.offsetWidth.toString()+"px");//方案可行

            // sm.style.offsetWidth = _windowWidth;
            // console.log("sm.style.width:",sm.offsetWidth);
            _tempWidth = sm.offsetWidth;
            _tempHeight = sm.offsetHeight;
        }
        var smfonts = document.getElementsByClassName("smfont");
        for(i=0;i<smfonts.length;i++){
            var smfont = smfonts[i];
            smfont.style.fontSize="2.5em";
            smfont.style.fontWeight="400"
            smfont.style.color ="#333";
            smfont.style.fontFamily="Arial, sans-serif"
        }

        var smfonts = document.getElementsByClassName("smfont-graceful");
        for(i=0;i<smfonts.length;i++){
            var smfont = smfonts[i];
            smfont.style.fontSize="2.5em";
            smfont.style.fontWeight="400"
            smfont.style.color ="#333";
            smfont.style.fontFamily="Arial, sans-serif"
        }
    }

    else{
        var defs = document.getElementsByClassName("def");
        var i;
        for(i =0 ;i < defs.length;i++){
            var def = defs[i];
            def.style.width = "auto";
            _tempWidth = def.offsetWidth;
            _tempHeight = def.offsetHeight;
        }
        var smfonts = document.getElementsByClassName("smfont");
        for(i=0;i<smfonts.length;i++){
            var smfont = smfonts[i];
            // smfont.style.fontSize="16px";
            smfont.style.fontSize="1em";
            smfont.style.fontWeight="500"
        }
        var smfonts = document.getElementsByClassName("smfont-graceful");
        for(i=0;i<smfonts.length;i++){
            var smfont = smfonts[i];
            // smfont.style.fontSize="16px";
            smfont.style.fontSize="1em";
            smfont.style.fontWeight="500"
        }
    }

    var mb = document.getElementsByClassName("ztmenu-block-1");
    if(mb.length>0){
        var mbds = document.getElementsByClassName("ztmenu-block-div-1");
        for(var i=0;i<mbds.length;i++){
            var mbd = mbds[i];
            mbd.style.height = (mb[0].offsetHeight.toString()+"px");
        }
    }
    
    var mb2 = document.getElementsByClassName("ztmenu-block-2");
    if(mb2.length>0){
        var mbds2 = document.getElementsByClassName("ztmenu-block-div-2");
        for(var i=0;i<mbds2.length;i++){
            var mbd2 = mbds2[i];
            mbd2.style.height = (mb2[0].offsetHeight.toString()+"px");
        }
    }
    
}
// temp();

function refreshWH(){
    _windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    _windowHeight=window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
    _screenWidth = window.screen.width;
    _screenHeight = window.screen.height;
    _screenWidthAvailable = window.screen.availWidth;
    _screenHeightAvailable = window.screen.availHeight;
    _clickWidth = window.document.documentElement.clientWidth;
    _clickHeight = window.document.documentElement.clientHeight;
    _relativeWidth = Math.min(_windowWidth,_screenWidth,_screenWidthAvailable);
    _relativeHeight = Math.min(_windowHeight,_screenHeight,_screenHeightAvailable);
    _oldWebView = (_screenWidth >= _clickWidth);
}

function  test(){
    // x=document.getElementById("demo");
    // x.innerHTML="浏览器window宽度: " + _windowWidth + ", 高度: " +  _windowHeight + "。"+"屏幕宽高："+
    // _screenWidth+","+_screenHeight+";"+"工作区宽高："+_screenWidthAvailable+","+_screenHeightAvailable+"。"+
    // "可见宽高:"+_clickWidth+","+_clickHeight+"。"+"目标宽高："+_tempWidth+","+_tempHeight;
}

// 原生判断dom是否加载完毕
document.addEventListener('DOMContentLoaded', function() {
    // console.log('DOM has loaded'); 
    refreshWH();
    ztmedia();
    test();
 });
// jq判断,需要下载
//  $(document).ready(function() {
//     console.log('DOM has loaded');
//  });

window.addEventListener("resize", function() {
    // console.log("The screen size has changed.");
    refreshWH();
    ztmedia();
    test();
});

// // 获取html元素宽高的两种方式
// // 首先获取元素
// var main = document.getElementById("main")
// // 第一种
// var mainwidth = main.offsetWidth;
// var mainheight = main.offsetHeight;
// // 第二种
// var mainwidth = main.style.width;
// var mainheight = main.style.height;
// // 这两种的区别，第一种可以取到任意情况的宽高，第二种只能取到html内定义的，而css定义的取不到
// // 设置高度
// main.style.width = "22px";
// main.style.height="33px";
// // 以下方法貌似不可行
// main.style.offsetWidth="44px";
// main.style.offsetHeight="55px";
