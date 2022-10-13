//Destructure
//Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays.
//Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
//syntax
// build a function that takes an object as a parameter use destructuring to extract the name and age properties from the object and return them in an array
 function getPersonInfo({name, age}) {
    return [name, age];
}
// example
let person = {
    name:"John",
    age:30,
    city:"New York"
}
let [name, age] = getPersonInfo(person);
console.log(name, age);
// expected output: John 30.

// example 2
//destructuring an array
let arr = [1,2,3,4,5];
let [a,b,c,d,e] = arr;
console.log(a,b,c,d,e);
// expected output: 1 2 3 4 5
