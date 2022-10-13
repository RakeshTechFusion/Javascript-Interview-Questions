//let 
// // 1. let is used to declare the variable.
// let is a block scope variable.which means it is only accessible inside the block.
// let is not hoisted.
// let is not accessible before initialization.
// let is not re-declarable.
// let is not reassignable.
// example
 let a = 10;
 function fun(){
     let a = 20;
     console.log(a);
 }
    fun();
    console.log(a);