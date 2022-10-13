// diference betwween == and === .give the examples and use cases
// == is a comparison operator that checks for equality of value only. It does not check for equality of type. It is used to compare two values.
// === is a comparison operator that checks for equality of value and type. It is used to compare two values.
// example
let a = 10;
let b = "10";
console.log(a==b);
// expected output: true
console.log(a===b);
// expected output: false

//use case
let c = 10;
let d = "10";
if(c==d){
    console.log("c is equal to d");
}
else{
    console.log("c is not equal to d");
}
// expected output: c is equal to d

