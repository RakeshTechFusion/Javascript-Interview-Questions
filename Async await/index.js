//Give the example of async await.
// async await is a new feature of javascript.
function example(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("hello");
        },2000);
    });
}
async function newFunction(){
    const data = await example();
    console.log(data);
}