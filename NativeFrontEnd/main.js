class Main {
    // constructor(name) {
    //   this.name = name;
    // }
    constructor(){
        
    }
    
    static getSingleMain(obj) {
        //加个锁
        if(this._singleMain !== "undefined" && this._singleMain !== null){
            return this._singleMain;
        }
        else{
            _singleMain = new Main();
            return  this._singleMain
        }
    }

    getter(key){
        return this[key];
    }
    setter(key,value){
        this[key]=value;
    }
  }

  