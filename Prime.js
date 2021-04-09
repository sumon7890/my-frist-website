function isPrime(n){
    for(let i = 2; i<n; i++){
        if(n%i == 0){
            return 'Not a Prime Number';
            
    
        }
            
    }
    return "yes This a prime Numner";
}

var result = isPrime(1);
console.log(result)