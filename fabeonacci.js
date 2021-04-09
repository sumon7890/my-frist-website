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

function fibunachi(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1
    }
    else{
        return fibunachi(n-1) + fibunachi(n-2);
    }
}

let result = fibunachi(10);
console.log(result)