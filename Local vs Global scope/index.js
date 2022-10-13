// Local vs Global scope
// 1. Local scope
// Local scope is the scope which is defined inside the function.
// example
function fun(){
    let a = 10;
    console.log(a);
}
fun();
console.log(a);
// 2. Global scope
// Global scope is the scope which is defined outside the function.
// example
let a = 10;
function fun(){
    console.log(a);
}
fun();