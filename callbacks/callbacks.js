//What is a callback function?
//A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
//example 1:
const cart = ["orange","apple","jackfruit"]

api.addTocart("cart", function(){

    api.proceedTopayment(function (){

        api.showOrderSummery(function(){

                api.updateWallet()

        })

    })

})


//callback have the super powerfull for hadling the asynchronous function in javascrippt.
//whileusing the callbacks we face some issues
// 1.callback hell(nested of callbacks)
// 2.invertion of controll
