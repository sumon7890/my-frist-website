// 
/*
function fibonacci(num){
var febo = [1,1]
for(var i = 2; i<=num; i++){
    var nextFubo = febo[i-1] + febo [i-2];
    febo.push(nextFubo);
}
return febo;
}
var result = fibonacci(10);

console.log(result)


function add(n){
    var sum = 0;
    for(var i =0; i<n.length; i++) {
        sum = sum + n[i]
    }
    return sum;
}
var Bazaar = [10,55,42,8,79,11,35,64,75,62,14,85,478,2,1,55,5];

var total = add(Bazaar);
console.log(total)
*/



function OddNumberAdded(n){
    
    for (var i = 0; i < n.length; i++) {
        var num = n[i];
        var sum2 = 0;
        if (num % 2 == 0) {
            for (var i = 0; i <= num.length; i++) {
                var sum = sum + num[i];
                sum2.push(sum)
            }
        }else{
           console.log('No found odd Number') 
        }
        return sum2; 
    }
}

var oddEven = [10,55,42,3,9,4,6,8,79,11,35,64,75,62,14,85,478,2,1,55,5];


var result = OddNumberAdded(oddEven);
console.log(result)











// for (let i = 0; i < oddEven.length; i++) {
//     const num = oddEven[i];
//     if (num % 2) {
//         var sum = 0;
//         for (let i = 0; i < num.length; i++) {
//             const sum =sum + num[i];
//             console.log(sum)
//         }
//         return sum
//     }else{
        
//     }
// }