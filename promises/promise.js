// //what is promise in javascript?
// Promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it's not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
// // examples
// // const cart = ["product1", "product2", "product3"];
// // const promise = createOrder(cart)
// // promise.then(function(orderId) {
// //     proceedToPayment(orderId);
// // }).catch(function(error) {
// //     console.log(error);
// // });
// // //
// // const promise = new Promise(function(resolve, reject) {
// //     setTimeout(function() {
// //         resolve("Hello");
// //     }, 1000);
// // });
// // promise.then(function(value) {
// //     console.log(value);
// // });

const GITHUB_URL = "https://api.github.com/users/SWAIN1998";
const promise = fetch(GITHUB_URL);
promise.then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
});


