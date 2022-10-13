//const 
//const is block scoped
//const is not hoisted
//const is not re-declarable
//const is not reassignable
//const can be accessed before initialization
//example
const a =10;
const b =10;
function addNumber(){
    const a = 20;
    return a+b;
}
console.log(addNumber());
//why output is 30
//because const is not hoisted
//so const a = 20 is not hoisted to the top
