

// ES6 导出
let initTest = function initTest(){
    const root = document.getElementById("root");
    const temp = "Hello,World;";
    root.innerHTML=`
    <link rel="stylesheet" type="text/css" href="./my_element_test.css" />
    "<div class="t">fffffff</div>"
    <div >${console.log(temp)}</div>
    <style> 
        .t{
        
        }
    </style>
    `


    localStorage.clear();
    loadHtml();
    function loadHtml(){
        var loadButton = document.getElementById('load-button');
        var contentContainer = document.getElementById('content-container');
        loadButton.addEventListener('click', function() {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', '../../indexTest.js', true);
            xhr.onreadystatechange = function() {
                console.log("xhr.readyState:",xhr.readyState);
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var tempStr = "`"+xhr.responseText+"`";
                    contentContainer.innerHTML = xhr.responseText;
                    console.log("xhr.responseText:tempStr:",typeof(tempStr));
                    console.log("模版字符串：",typeof(`fff`))
                    console.log("xhr.responseText:",xhr.responseText);
                }
            };
            xhr.send();
        });
    }

}


// CommonJS导出
// module.exports={
//     initTest:initTest()
// }

export {initTest}