//What is a spread operator?
//The spread operator allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
//syntax
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);
// expected output: [1,2,3,4,5,6]
// example 2
//Take an Object and spread it into an array
let obj = {a:1, b:2, c:3};
let arr = [...obj];
console.log(arr);
// expected output: [undefined, undefined, undefined]
// example 3
//Give the Example of Spread Operator with Function
function sum(x, y, z) {
    return x + y + z;
    }
    const numbers = [1, 2, 3];
    console.log(sum(...numbers));
    // expected output: 6
// Shallow Copy
// let arr1 = [1,2,3];
// let arr2 = [...arr1];
// console.log(arr2);
// expected output: [1,2,3]
// example 2
// let obj1 = {a:1, b:2, c:3};
// let obj2 = {...obj1};
// console.log(obj2);
// expected output: {a:1, b:2, c:3}

//Deep Copy
// let arr1 = [1,2,3];
// let arr2 = [...arr1];
// arr2.push(4);
// console.log(arr1);
// expected output: [1,2,3]
// example 3
// let obj1 = {a:1, b:2, c:3};
// let obj2 = {...obj1};
// obj2.d = 4;
// console.log(obj2);
// expected output: {a:1, b:2, c:3, d:4}

