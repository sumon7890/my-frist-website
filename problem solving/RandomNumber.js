// let num = 2.6666;
// var result = Math.floor(num)
// var result2 = Math.ceil(num);
// var result3 = Math.round(num);



let sum = 4;
for( var i = 0; i <= 10; i++){
    let roundNumber = Math.random(sum) * 6
    var dice = Math.round(roundNumber);
    console.log(dice)
    
}

function rondomNum(n){
    for( var i = 0; i <= n; i++){
        let roundNumber = Math.random(sum) * 6
        var dice = Math.round(roundNumber);
        return i, dice
        
    }
    
}
var result = rondomNum();
console.log(result)