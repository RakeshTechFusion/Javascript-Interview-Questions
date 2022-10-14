//Event Loop
// 1. Call Stack
// 2. Web APIs
// 3. Callback Queue
// 4. Event Loop
//call stack
//call stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocation (call).
//call stack is single
//call stack is synchronous.
// Web APIs
// Web APIs are browser provided APIs that are not part of the JavaScript specification. Examples include the DOM, AJAX, and Timeout.
// Web APIs are asynchronous.

// Callback Queue
// Callback Queue is a queue (first in, first out) of callback functions waiting to be executed. This is where asynchronous callbacks are queued, after the completion of a given task.
// Callback Queue is asynchronous.

// Event Loop
// The event loop is a programming construct or design pattern that waits for and dispatches events or messages in a program. It works by making a request to some internal or external "event provider" (that generally blocks the request until an event has arrived), and then it calls the relevant event handler ("dispatches the event").
// Event Loop is asynchronous.
// Event Loop is single.

// What is the event loop in javascript?
// definition of event loop
// event loop is a mechanism that allows node js to perform non-blocking I/O operations
// even though JavaScript is single threaded, it can support concurrency via the concept of an event and callbacks.
// real life example of event loop
// when you go to a restaurant and order food, you are waiting for the food to be prepared and served. The waiter takes your order and gives it to the chef. The chef prepares the food and gives it to the waiter. The waiter then serves the food to you. This is a real-life example of an event loop. The waiter is an event emitter, the chef is an event listener, and you are the event handler.
// Examples
console.log("please order food");
setTimeout(()=>{
    console.log("your food is ready");
}
,5000);
console.log("thank you for ordering food");
// Every API of Node.js is asynchronous and being single-threaded, they use async function calls to maintain concurrency.


//write a real life example of event loop
//when you go to a restaurant and order food, you are waiting for the food to be prepared and served. The waiter takes your order and gives it to the chef. The chef prepares the food and gives it to the waiter. The waiter then serves the food to you. This is a real-life example of an event loop. The waiter is an event emitter, the chef is an event listener, and you are the event handler.
function orderFood(){
    console.log("please order food");
}
function foodReady(){
    console.log("your food is ready");
}
function thankYou(){
    console.log("thank you for ordering food");
}
orderFood();
setTimeout(foodReady,5000);
thankYou();
// Every API of Node.js is asynchronous and being single-threaded, they use async function calls to maintain concurrency.



// git branch -m Master master
// git fetch origin
// git branch -u origin/master master
// git remote set-head origin -a