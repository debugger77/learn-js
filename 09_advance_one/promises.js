    // creation of promise
const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network                  // 2 keywords -> resolve, reject 
    setTimeout(function(){  
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

    // consumption of promise 
promiseOne.then(function(){             // here keyword then direct links to resolve    
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Code", email: "code@example.com"})      // resolve() generally has object
    }, 1000)
})

promiseThree.then(function(user){       // user contains the data passed in resolve().
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false               //  <--
        if (!error) {
            resolve({username: "harshil", password: "321"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

        //.then.catch.finally
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {            // IMP      // username will contain returned value of above part. 
    console.log(username);
}).catch(function(error){                       
    console.log(error);                         // finally() will always be executed.
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

// Each time when an async function is called, it returns a new Promise which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function.
// await keyword is only valid inside async function.

            // async await -> try catch
async function consumePromiseFive(){        
    try {
        const response = await promiseFive      // promiseFive is an Object so don't use promiseFive()
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

                            // fetch() with try-catch
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()                    // here await is must 
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

                // fetch() with then-catch
fetch('https://api.github.com/users/debugger77')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
