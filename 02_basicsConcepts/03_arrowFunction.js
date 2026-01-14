
//++++++++++++++++++++++++++++ Arrow Functions ++++++++++++++++++++++++++++++++++++++++++++

/*
Arrow Functions were introduced in ES6.
Arrow Functions allow a shorter syntax for function expressions.
You can skip the function keyword, the return keyword, and the curly brackets:

*/


//Some different syntax of writting arrow function

const arrowFunction_1 = (num1, num2) => {
    return num1 + num2          //When we use {}, it's compulsory to use **return keyword.
};


let arrowFunction_2 = function (a, b) { return a * b }     //When we use {}, it's compulsory to use **return keyword.


let arrowFunction_3 = (a, b) => a * b;      //But here, it's NOT compulsory to use **return keyword.


const arrowFunction_4 = (num1, num2) => ( num1 + num2 )


const arrowFunction_5 = (num1, num2) => ({ username: "Debashis" })


let arrowFunction_6 = function () {
    return "Hello World!";
}


let arrowFunction_7 = () => {
    return "Hello World!";
}

//If the function has only one statement that returns a value, you can remove the {} brackets and the return keyword:

let arrowFunction_8 = () => "Hello World!";

//++++++++++++++++++++++++++++++++++++++++ this keyword +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*

What is this?

In JavaScript, the this keyword refers to an object, means the curent context.

Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an object method, this refers to the object.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

*/

const user = {
    username: "Bappa",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);  //Here **this keyword reffer all object values/curent context.
        console.log(this);
    }

}

user.welcomeMessage()
console.log(this);  //Here **this keyword reffer all browser global object.



function demo(){
    let username = "Debashis"
    console.log(this.username);  //Here **this, can't access values in function.
}

demo()  //Here **this says - username is undefined.

const demo2 = () => {
    let username = "Debashis"
    console.log(this.username);
}

demo2();   //So, the conclution is we can't use **this keyword in any kind of function.





