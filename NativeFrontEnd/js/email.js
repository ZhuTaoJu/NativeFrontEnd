
function createXHR () {
    var XHR = [  //兼容不同浏览器和版本得创建函数数组
        function () { return new XMLHttpRequest () },
        function () { return new ActiveXObject ("Msxml2.XMLHTTP") },
        function () { return new ActiveXObject ("Msxml3.XMLHTTP") },
        function () { return new ActiveXObject ("Microsoft.XMLHTTP") }
    ];
    var xhr = null;
    //尝试调用函数，如果成功则返回XMLHttpRequest对象，否则继续尝试
    for (var i = 0; i < XHR.length; i ++) {
        try {
            xhr = XHR[i]();
        } catch(e) {
            continue  
        }
        break;  
    }
    return xhr;  //返回对象实例
}


async function postEmailAjax(relativeUrl,param){

    new Promise(function (resolve, reject) {
        // setTimeout(function () {
            try{
                var protocol = window.location.protocol+"//";
                var host = window.location.host;
                // var port = window.location.port;
                var baseUrl =  protocol+host;
                // console.log("baseUrl:",baseUrl);
                var finalUrl = baseUrl+relativeUrl;
                // console.log("finalUrl:",finalUrl);
                var ajax= createXHR();
                ajax.onreadystatechange=function()
                {
                    //请求拦截
                    if (ajax.readyState==1)
                    {
                        ajax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                        ajax.setRequestHeader('Access-Control-Allow-Origin',"*");
                        //无缓存
                        ajax.setRequestHeader("If-Modified-Since","0"); 
                        ajax.setRequestHeader("Cache-Control","no-cache");
                        //加token
                        ajax.setRequestHeader('Authorization','Bearer ' + '');
                        console.log("ajax.readyState==1");
                    }
                    if (ajax.readyState==4) //&& ajax.status==200
                    {
                        // console.log("ajax.status:",ajax.status);
                        var res1 = JSON.parse(ajax.responseText);
                        // console.log("res1:",res1);
                        resolve(res1);
                    }
                }
                ajax.catch = false; //去缓存
                // ajax.open("POST",finalUrl,false);
                ajax.open("POST",finalUrl,true);
                ajax.send(param);
            }
            catch(e){
                reject(e);
            }
        // }, 1000);
    }).then(function (res) {
        // console.log("res=",res);
    }).catch(function (err) {
        console.log("err:",err);
    }).finally(function () {
        console.log("End");
    });
}



