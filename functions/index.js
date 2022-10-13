//function 
// definition of function
// A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.
// why we use function
// Functions are used to perform certain actions, and they are executed when something invokes them (calls them).
// syntax
function name(parameter1,parameter2,parameter3){
    code
}
// example1
function add(a,b){
    return a+b;
}
console.log(add(2,3));
// expected output: 5
// example2
function add(a,b){
    return a+b;
}
console.log(add(2));
// expected output: NaN
// example3
function add(a,b){
    return a+b;
}
console.log(add());
// expected output: NaN
// example4
function add(a,b){
    return a+b;
}
console.log(add(2,3,4));
// expected output: 5

// function expression
// definition of function expression
// A function expression is very similar to and has almost the same syntax as a function declaration (see function statement). The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions.
// syntax
// let name = function(parameter1,parameter2,parameter3){
//     code
// };
// example
let add = function(a,b){
    return a+b;
}
console.log(add(2,3));
// expected output: 5

// function hoisting
// definition of function hoisting
// Function declarations are hoisted in JavaScript. You can use a function before you declare it.

// function hoisting example
// example1
console.log(add(2,3));
function add(a,b){
    return a+b;
}
// expected output: 5
// example2
console.log(add(2,3));
let add = function(a,b){
    return a+b;
}
// expected output: Uncaught TypeError: add is not a function

// function as a value
// definition of function as a value
// Functions are a special kind of object. They have properties and methods just like any other object. The name and code of a function are the properties and the function is the method.
// example
function add(a,b){
    return a+b;
}
console.log(add.name);
// expected output: add
console.log(add.length);
// expected output: 2

// Immediately Invoked Function Expression (IIFE)
// definition of Immediately Invoked Function Expression (IIFE)
// An Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined.
// syntax
// (function(){
//     code
// })();
// example
(function(){
    console.log("hello");
}
)();
// expected output: hello

// Arrow function
// definition of Arrow function
// Arrow functions are a new way to write functions in JavaScript. They are a shorter syntax for writing function expressions. Arrow functions are always anonymous.
// syntax
(parameter1,parameter2,parameter3) => {
    code
}
// example
let add = (a,b) => {
    return a+b;
}
console.log(add(2,3));
// expected output: 5

// Arrow function with single parameter
// syntax
parameter1 => {
    code
}
// example
let add = a => {
    return a+1;
}
console.log(add(2));
// expected output: 3

// Arrow function with no parameter
// syntax
() => {
    code
}
// example
let add = () => {
    return 1;
}
console.log(add());
// expected output: 1

// Arrow function with single line code
// syntax
(parameter1,parameter2,parameter3) => code
// example
let add = (a,b) => a+b;
console.log(add(2,3));
// expected output: 5

// Arrow function with single line code and single parameter
// syntax
parameter1 => code
// example
let add = a => a+1;
console.log(add(2));
// expected output: 3

// Arrow function with single line code and no parameter
// syntax
() => code
// example
let add = () => 1;
console.log(add());
// expected output: 1

// Arrow function with object
// syntax
(parameter1,parameter2,parameter3) => ({key:value})
// example
let add = (a,b) => ({sum:a+b});
console.log(add(2,3));
// expected output: {sum:5}

// Arrow function with object and single parameter
// syntax
parameter1 => ({key:value})
// example
let add = a => ({sum:a+1});
console.log(add(2));
// expected output: {sum:3}

