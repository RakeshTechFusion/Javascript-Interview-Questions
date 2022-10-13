//Currying
//Currying is a technique of evaluating function with multiple arguments, into sequence of functions with single argument.
//Currying is also known as partial function application.

//Example 1
//In this example, we have a function add with two parameters a and b. We are calling the function with two arguments 1 and 2. The function returns the sum of the two arguments.
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));

//Example 2
//In this example, we have a function add with two parameters a and b. We are calling the function with one argument 1. The function returns another function which takes one argument b and returns the sum of a and b.
function add(a) {
    return function (b) {
        return a + b;
    }
}
console.log(add(1)(2));