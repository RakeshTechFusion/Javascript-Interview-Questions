//Hoisting
//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
//Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

//Example 1
//In this example, the variable x is declared after it is used (x is used in the return statement before it is declared). In fact, it does not matter whether x is declared before or after y, because all declarations are hoisted to the top of the function, and all assignments are left in place.
 function hoist() {
    console.log(x);
    var x = 1;
    console.log(x);
}
hoist();