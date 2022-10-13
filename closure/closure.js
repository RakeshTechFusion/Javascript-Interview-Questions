// What is Closure in JavaScript?
// Closure is a function having access to the parent scope, even after the parent function has closed.
// closure can be used to create private variables and methods
example 1:
function outer() {
    let a = 10;
    function inner() {
        console.log(a);
    }
    return inner;
    }
    let innerFunc = outer();
    innerFunc();
    // output: 10
    // innerFunc is a closure
    // innerFunc has access to the variable a even after the outer function has closed
    // innerFunc is a closure because it has access to the parent scope
