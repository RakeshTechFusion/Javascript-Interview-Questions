// ........................................Array...................................................
// Array in javascript is a collection of elements of same type or different type.
// Array is a data structure which is used to store multiple values in a single variable.
// Array is a collection of elements of same type or different type.
// Creating Array in javascript.
// There are two ways to create array in javascript.
// 1. Using array literal.
// 2. Using array constructor.

// syntax of array literal.
// let arr = [element1,element2,element3,element4,element5];
// syntax of array constructor.
// let arr = new Array(element1,element2,element3,element4,element5);

// expample1
// let arr = [1,2,3,4,5];
// console.log(arr);
// example2
// let arr = new Array(1,2,3,4,5);
// console.log(arr);


// Accessing the Array elements.
// We can access the array elements by using index.
// index starts from 0.
// example
// let arr = [1,2,3,4,5];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// Types of Array in javascript.
// There are two types of array in javascript.
// 1. Static Array.
// 2. Dynamic Array.

// Static Array.
// Static array is a array whose size is fixed.

// Dynamic Array.
// Dynamic array is a array whose size is not fixed.
// we can add or remove the elements from the array.

// Array Methods.
// There are many methods in array.
// 1. push()
// 2. pop()
// 3. shift()
// 4. unshift()
// 5. splice()
// 6. slice()
// 7. concat()
// 8. join()
// 9. indexOf()
// 10. lastIndexOf()
// 11. includes()
// 12. forEach()
// 13. map()
// 14. filter()
// 15. reduce()
// 16. find()
// 17. findIndex()
// 18. every()
// 19. some()
// 20. sort()
// 21. reverse()
// 22. fill()



// 1. push()
// push() method is used to add the element at the end of the array.
// syntax
// array.push(element);
// example
// let arr = [1,2,3,4,5];
// arr.push(6);
// console.log(arr);

// 2. pop()
// pop() method is used to remove the element from the end of the array.
// syntax
// array.pop();
// example
// let arr = [1,2,3,4,5];
// arr.pop();
// console.log(arr);

// 3. shift()
// shift() method is used to remove the element from the beginning of the array.
// syntax
// array.shift();
// example
// let arr = [1,2,3,4,5];
// arr.shift();
// console.log(arr);

// 4. unshift()
// unshift() method is used to add the element at the beginning of the array.
// syntax
// array.unshift(element);
// example
// let arr = [1,2,3,4,5];
// arr.unshift(0);
// console.log(arr);

// 5. splice()
// splice() method is used to add or remove the element from the array.
// syntax
// array.splice(index,howmany,element1,element2,element3);
// index: index from where we want to add or remove the element.
// howmany: how many elements we want to remove.
// element1,element2,element3: elements which we want to add.
// example
// let arr = [1,2,3,4,5];
// arr.splice(2,0,6,7,8);
// console.log(arr);

// 6. slice()
// slice() method is used to copy the elements from the array.
// syntax
// array.slice(start,end);
// start: index from where we want to copy the elements.
// end: index upto where we want to copy the elements.
// example
// let arr = [1,2,3,4,5];
// let arr1 = arr.slice(2,4);
// console.log(arr1);

// 7. concat()
// concat() method is used to join two or more arrays.
// syntax
// array1.concat(array2,array3,array4);
// example
// let arr = [1,2,3,4,5];
// let arr1 = [6,7,8,9,10];
// let arr2 = arr.concat(arr1);
// console.log(arr2);

// 8. join()
// join() method is used to join the elements of the array.
// syntax
// array.join(separator);
// separator: separator is used to join the elements.
// example
// let arr = [1,2,3,4,5];
// let arr1 = arr.join("-");
// console.log(arr1);

// 9. indexOf()
// indexOf() method is used to find the index of the element.
// syntax
// array.indexOf(element);
// example
// let arr = [1,2,3,4,5];
// let index = arr.indexOf(3);
// console.log(index);

// 10. lastIndexOf()
// lastIndexOf() method is used to find the last index of the element.
// syntax
// array.lastIndexOf(element);
// example
// let arr = [1,2,3,4,5,3];
// let index = arr.lastIndexOf(3);
// console.log(index);

// 11. includes()
// includes() method is used to check whether the element is present in the array or not.
// syntax
// array.includes(element);
// example
// let arr = [1,2,3,4,5];
// let result = arr.includes(3);
// console.log(result);

// 12. forEach()
// forEach() method is used to iterate the array.
// syntax
// array.forEach(function(element,index,array){
//     code
// });
// example
// let arr = [1,2,3,4,5];
// arr.forEach(function(element,index,array){
//     console.log(element);
//     console.log(index);
//     console.log(array);
// });

// 13. map()
// map() method is used to iterate the array.
// syntax
// array.map(function(element,index,array){
//     code
// });
// example
// let arr = [1,2,3,4,5];
// let arr1 = arr.map(function(element,index,array){
//     return element*2;
// });
// console.log(arr1);

// 14. filter()
// filter() method is used to filter the elements from the array.
// syntax
// array.filter(function(element,index,array){
//     code
// });
// example
// let arr = [1,2,3,4,5];
// let arr1 = arr.filter(function(element,index,array){
//     return element>3;
// });
// console.log(arr1);

// 15. reduce()
// reduce() method is used to reduce the array to a single value.
// syntax
// array.reduce(function(total,element,index,array){
//     code
// });
// example
// let arr = [1,2,3,4,5];
// let arr1 = arr.reduce(function(total,element,index,array){
//     return total+element;
// });
// console.log(arr1);

// 16. find()
// find() method is used to find the element from the array.
// syntax
// array.find(function(element,index,array){
//     code
// });
// example
// let arr = [1,2,3,4,5];
// let arr1 = arr.find(function(element,index,array){
//     return element>3;
// });
// console.log(arr1);

// 17. findIndex()
// findIndex() method is used to find the index of the element from the array.
// syntax
// array.findIndex(function(element,index,array){
//     code
// });
// example
// let arr = [1,2,3,4,5];
// let arr1 = arr.findIndex(function(element,index,array){
//     return element>3;
// });
// console.log(arr1);

// 18. every()
// every() method is used to check whether all the elements are true or not.
// syntax
// array.every(function(element,index,array){
//     code
// });
// example
// let arr = [1,2,3,4,5];
// let arr1 = arr.every(function(element,index,array){
//     return element>0;
// });
// console.log(arr1);

// 19. some()
// some() method is used to check whether any one of the elements is true or not.
// syntax
// array.some(function(element,index,array){
//     code
// });
// example
// let arr = [1,2,3,4,5];
// let arr1 = arr.some(function(element,index,array){
//     return element>3;
// });
// console.log(arr1);

// 20. sort()
// sort() method is used to sort the elements of the array.
// syntax
// array.sort();
// example
// let arr = [1,2,3,4,5];
// let arr1 = arr.sort();
// console.log(arr1);

// 21. reverse()
// reverse() method is used to reverse the elements of the array.
// syntax
// array.reverse();
// example
// let arr = [1,2,3,4,5];
// let arr1 = arr.reverse();
// console.log(arr1);

// 22. fill()
// fill() method is used to fill the elements of the array.
// syntax
// array.fill(value,start,end);
// value: value to be filled.
// start: index from where we want to fill the elements.
// end: index upto where we want to fill the elements.
// example
// let arr = [1,2,3,4,5];
// let arr1 = arr.fill(0,2,4);
// console.log(arr1);
// output: [1,2,0,0,5]



