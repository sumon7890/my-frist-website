// var febo = [0,1];
// function febonacch(n){
//     for(var i = 2;i <= n; i++){
//         febo[i]= febo[i-1] + febo[i-2];
//     }
//     return febo
// }

// var result = febonacch(12)

// console.log(result)

//recarcive way//////////////////////

// function fibunachi(n){
//     if(n == 0){
//         return 0;
//     }
//     if(n == 1){
//         return 1
//     }
//     else{
//         return fibunachi(n-1) + fibunachi(n-2);
//     }
// }

// let result = fibunachi(10);
// console.log(result)

function fibonacchi(n){
    if(n == 0){
        return [0];
    }
    else if(n == 1){
        return [0,1];
    }
    else{
        var fibo = fibonacchi(n - 1);
        var nextElement = fibo[n - 1] + fibo [n - 2];
        fibo.push(nextElement);
        return fibo;
    }
}

var result = fibonacchi(15);
console.log(result);




















