
//+++++++++++++++++++++++++++++++++++++++++ Promise +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
The Promise Object represents the completion or failure of an asynchronous operation and its results.

A Promise can have 3 states:-------
pending	    ------  initial state
rejected	------  operation failed
fulfilled	------  operation completed

*/


//Here we create a **Promise, that store in a varriable.
//Method - 1
const promiseOne = new Promise(function(resolve, reject){  //In promise, there are 2 parameater present - resolve & reject
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()  //The **resolve() method is directly connected with .then**
    }, 3000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

//Here we create a **Promise, without storeing in a varriable.
//Method - 2
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 5000)

}).then(function(){
    console.log("Async 2 resolved");
})

//Here we consumed data through **resolve() metheod and ** .then() method
//Method - 3
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Debashis", email: "demo@demo.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
})

//Here we create a promise with resolve & reject - with an error, combining with condition
//Method - 4
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Debashis", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
//Here we call the promise using **.then() method, that represent resolve
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){ //Here we get or view any error if have by using **.catch() method
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))
//And here is the deafult **.finally() method, that reprent all work is done or not


//Here we do same task like above, but use **async & **await
//Method - 5
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {   //Here we use **try & **catch to handle the error, without this the code gives an error
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


//Here we do same task like above, but use **async & **await with **fetch() method
//Method - 6
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()


//same task like above, but use **fetch(), **.then(), **catch() method
//Method - 7
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))