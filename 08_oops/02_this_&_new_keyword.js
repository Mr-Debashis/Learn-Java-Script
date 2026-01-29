
//Object literal - means literally an object/a nornal object
const user = {
    username: "Debashis",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`); //Here we have to use **this keyword, to reffer current context.
        console.log(this);   //Here **this reffer the whole object literal
    }
}
console.log(user.getUserDetails());
console.log(user.username)      //Here we access the username via **this keyword form the object
console.log(this);              //Here **this keyword reffer the whole browser window object



//When we use **new keyword, we make a constructor function. The **new keyword autometically make this 

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = () => {
        console.log(`Welcome ${this.username}`);
    }
    return this   //Here **return is optional, don't effect the code. Here we write for understanding.
}

//Constractor function means **new keyword give an copy of all where we can do any thing without changing the original one.
const userOne = new User("Debashis", 12, true)    
const userTwo = new User("Javascript", 11, false)  //If here we don't use the **new keyword, useTwo overright the useOne values.
console.log(userOne);

console.log(userOne.constructor);
// Constructor gives the whole context