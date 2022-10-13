//heigher order function
//map function
//map function is used to iterate over an array and perform some operation on each element of the array.

// var arr = [1,2,3,4,5,6,7,8,9,10];
// var arr2 = arr.map(function(value){
//     return value*value;
// }
// );
// console.log(arr2);

// //addvanteges of map function
// //1. it is easy to read
// //2. it is easy to debug
// //3. it is easy to maintain

// //double the value of each element of the array
// var arr3 = arr.map(function(value){
//     return value*2;
// }
// );
// console.log(arr3.join(" "));


// foreach with object
var obj = {
    name:"sachin",
    age:20,
    city:"pune",
    state:"Odisha",
    country:"India"
}
//map with object
var obj2 = Object.keys(obj).map(function(key){
    return obj[key];
})
console.log(obj2.join(" "));

//map with object

