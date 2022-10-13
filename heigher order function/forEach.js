// heigher order function forEach

//forEach function is used to iterate over an array and perform some operation on each element of the array.
//forEach function is similar to map function but it does not return anything.
//forEach function is used to perform some operation on each element of the array.

var numbs = [1,2,3,4,5,6,7,8,9,10];
// double the value of each element of the array
numbs.forEach(function(value){
    console.log(value*2);
});

//power of 2 of each element of the array
numbs.forEach(function(value){
    console.log(value*value);
});

numbs.forEach((n,i,arr)=>{
    arr[i] = n+2;
})
numbs.forEach((n)=>console.log(n));

var obj = {
    name:"sachin",
    age:20,
    city:"pune",
    state:"Odisha",
    country:"India"
}
Object.keys(obj).forEach(function(key){
    console.log(key,obj[key]);
})

