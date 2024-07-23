//addition
let a=5;
let b=3;
let sum=a+b;
console.log(sum); //8
//sub
console.log(a-b);
console.log(a*b, a/b, a%b);//15 1.6666666666666667 2

// assignment operators (+=,-=,>,<, >=,<=)
let l=20;
l-=7;
console.log("After += operator: ", l)//13
 
//Equality(==) and Strict Equality(===)
let q=5;
let r='5'
console.log(q==r, q===r)//true false

// logical Operators (&&,||,!)
let s=true;
let t=false;
console.log(s&&t, s||t);//false true

console.log(!s);//false

//ternary Operator

let x=7;
let result = (x>=0)? 'Positive':'negavite';
console.log(result); //Positive
