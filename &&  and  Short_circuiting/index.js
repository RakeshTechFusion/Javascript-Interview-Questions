// && operator
// The && operator (logical AND) returns true if both operands are true. If not, it returns false.
// example
let a = 10;
let b = 20;
let c = 30;
if(a>b && a>c){
    console.log("a is greater");
}
else{
    console.log("a is not greater");
}
// // expected output: a is not greater

// || operator
// The || operator (logical OR) returns true if either operand is true. If both are false, it returns false.
// example
let a = 10;
let b = 20;
let c = 30;
if(a>b || a>c){
    console.log("a is greater");
}
else{
    console.log("a is not greater");
}
// // expected output: a is not greater

// ! operator
// The ! operator (logical NOT) returns true if its single operand that can be of any type is false; otherwise, returns false.
// example
let a = 10;
let b = 20;
let c = 30;
if(!(a>b)){
    console.log("a is not greater");
}
else{
    console.log("a is greater");
}
// // expected output: a is not greater

// && and || operator
// example
let a = 10;
let b = 20;
let c = 30;
if(a>b && a>c || a<b && a<c){
    console.log("a is greater");
}
else{
    console.log("a is not greater");
}
// // expected output: a is not greater

