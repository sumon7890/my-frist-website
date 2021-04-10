function factorialRecarsion(num){
    var fact = 1;
    for(var i =1; i<num; i++){
        fact = fact * num;
    }
    return fact;
}

var result = factorialRecarsion(5)
console.log(result)




function fac(n){
    for(var i = 0; i<n;i++){
        if(n ==0){
            return 0
        }
        else if(n==1){
            return 1
        }
        else{
            return n = n * fac(n-1)
        }
    }
}
var result3 = fac(7);
console.log(result3)