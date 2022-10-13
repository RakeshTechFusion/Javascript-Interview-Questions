// heigher order function filter

//filter function is used to iterate over an array and perform some operation on each element of the array.
//filter function is similar to map function but it does not return anything.
//filter function is used to perform some operation on each element of the array.

var numbs = [1,2,3,4,5,6,7,8,9,10];
// double the value of each element of the array.
var double = numbs.map(function(value){
    return value * 2;
}
);
console.log(double);

