function revarString(str){
    revars = "";
    for(var i =0; i < str.length; i++){
        var char = str[i]
        revars = char + revars ;
    }
    return revars

}

var stement = "hello we are friend our history in bangladesh";
var fllow = revarString(stement);
console.log(fllow)


