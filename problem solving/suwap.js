let a = 5;
let b = 9;
console.log("before sowap","a=", a, "b=", b,)
let temp = a;
a = b;
b = temp;

console.log("after sowap","a=", a, "b=", b,)

let x = 10;
let y =20
console.log("before sowap","X=", x, "Y=", y,);
x = x+y;
y = x-y;
x = x-y;
console.log("after sowap","X=", x, "Y=", y,);


let p = 40;
let c = 60;

[p,c] = [c,p];

console.log("before sowap","p=", p, "C=", c,);