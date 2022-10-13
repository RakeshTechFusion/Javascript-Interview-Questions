// var 
// var is a global variable
// var is hoisted
// var is re-declarable
// var is reassignable
//var can be accessed before initialization
// example
var a =10;
var b =10;
function addNumber(){
    var a = 20;
    return a+b;
}
console.log(addNumber());
//why output is 30
// because var is hoisted
// so var a = 20 is hoisted to the top
