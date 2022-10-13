//arrow function 
example
const add = (a, b) => a + b;
console.log(add(1, 2));

//arrow function with multiple lines
const add = (a, b) => {
    const sum = a + b;
    return sum;
}
console.log(add(1, 2));

//arrow function with no parameters
const add = () => 1 + 2;
console.log(add());

//arrow function with Object
const add = (a, b) => ({ sum: a + b });
console.log(add(1, 2));

//arrow function with this
const person = {
    name: 'John',
    age: 30,
    greet: function () {
        console.log('Hello, my name is ' + this.name);
    }
}
person.greet();
