var _option="none";
function gfmResize(){
    if(_relativeWidth < 540){
        if(_option === "add"){return;}
        var grms = document.getElementsByClassName("gfm");
        for(var i=0;i < grms.length;i++){
            var item1 = grms[i];
            recursion(item1,"add");
        }

    }
    else{
        if(_option === "remove"){return;}
        var grms = document.getElementsByClassName("gfm");
        for(var i=0;i < grms.length;i++){
            var item1 = grms[i];
            recursion(item1,"remove");
        }
    }
}

function gfmResize2(){
    if(_relativeWidth < 540){
        if(_option === "add"){return;}
        var grms = document.getElementsByClassName("gfm");
        for(var i=0;i < grms.length;i++){
            var item1 = grms[i];
            recursionOperate2(item1,"add");
        }
    }
    else{
        if(_option === "remove"){return;}
        var grms = document.getElementsByClassName("gfm");
        for(var i=0;i < grms.length;i++){
            var item1 = grms[i];
            recursionOperate2(item1,"remove");
        }
    }
}

function  recursion(item1,option){
    var item1Children = item1.children;
    for(var j=0;j<item1Children.length;j++){
        var item2 = item1Children[j];
        recursionOperate(item2,option);
        recursion(item2,option);
    }
}

function recursionOperate(item2,option){
    if(item2.localName==="form"){
        // var item2Children = item2.children;
        // for(var z=0;z<item2Children.length;z++){
        //     var item3 = item2Children[z];
        //     if(item3.localName==="input" || item3.localName==="textarea"){
        //         if(option==="add"){
        //             item3.classList.add('gfminput');
        //             console.log("item3.classList.add('gfminput')");
        //             _option="add";
        //             console.log("item3.classList:",item3.classList);
        //         }else{
        //             item3.classList.remove('gfminput');
        //             console.log("item3.classList.remove('gfminput')");
        //             _option="remove";
        //             console.log("item3.classList:",item3.classList);
        //         }
        //     }
        // }
        if(option==="add"){
            item2.classList.add('gfminput');
            // console.log("item2.classList.add('gfminput')");
            _option="add";
            // console.log("item2.classList:",item2.classList);
        }else{
            item2.classList.remove('gfminput');
            // console.log("item2.classList.remove('gfminput')");
            _option="remove";
            // console.log("item2.classList:",item2.classList);
        }
    }
}

function recursionOperate1(item2,option){
    if(item2.localName==="form"){
        var item2Children = item2.children;
        for(var z=0;z<item2Children.length;z++){
            var item3 = item2Children[z];
            if(item3.localName==="input" || item3.localName==="textarea"){
                if(option==="add"){
                    item3.classList.add('gfminput');
                    // console.log("item3.classList.add('gfminput')");
                    _option="add";
                    // console.log("item3.classList:",item3.classList);
                }else{
                    item3.classList.remove('gfminput');
                    // console.log("item3.classList.remove('gfminput')");
                    _option="remove";
                    // console.log("item3.classList:",item3.classList);
                }
            }
        }
    }
}


function recursionOperate2(item2,option){
    if(option==="add"){
        item2.classList.add('gfminput');
        // console.log("item2.classList.add('gfminput')");
        _option="add";
        // console.log("item2.classList:",item2.classList);
    }else{
        item2.classList.remove('gfminput');
        // console.log("item2.classList.remove('gfminput')");
        _option="remove";
        // console.log("item2.classList:",item2.classList);
    }
}

window.addEventListener("resize", function() {
    gfmResize2();
});
document.addEventListener('DOMContentLoaded', function() {
    gfmResize2();
});

