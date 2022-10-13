//Object
// what is an object?
// An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. In addition to objects that are predefined in the browser, you can define your own objects.
// syntax
 let objectName = {
    key1:value1,
    key2:value2,
    key3:value3,
    key4:value4,
    key5:value5,
    key6:value6
}
// example
let person = {
    name:"John",
    age:30,
    city:"New York"
}
console.log(person);
// expected output: {name: "John", age: 30, city: "New York"}
// example 2
let person1 = {
    name:"John",
    age:30,
    city:"New York"
}
console.log(person1.name);
// expected output: John
