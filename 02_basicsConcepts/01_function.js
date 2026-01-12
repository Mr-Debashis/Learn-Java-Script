/*


Functions are fundamental building blocks in all programming.
Functions are reusable block of code designed to perform a particular task.
Functions are executed when they are "called" or "invoked".

***Parameters vs. Arguments
In JavaScript, function parameters and arguments are distinct concepts:
Parameters are the names listed in the function definition.
Arguments are the values received by the function.

function myFunction(Parameters){
    console.log("Any Code");
};
myFunction(Arguments);


*/

//This is the syntax/function defination of js function
function sayMyName() {
    console.log("Bappa");
};

sayMyName() //Here we call the function


//A simple function, add two numbers. 
function addTwoNumber(number1, number2) {
    console.log(number1 + number2);
}

addTwoNumber(3, 5);  //Here we call the function, by giving tow arguments



//A simple function, add two numbers.With some different return method
function addTwoNumbers(number1, number2) {
    let result = number1 + number2   //Tow different way to return values
    return result
    // return number1 + number2 
}

const result = addTwoNumbers(10, 25); //We store the **invokes (calls) into a varriable and print the varriable.
console.log(result);


// Create an function with some condition or logic
function loginUserMessage(username = "Debashis") {
    if (!username) {
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
console.log(loginUserMessage("Moumita"))


/*
When we want to add or take multiple/infinity/don't know how many  arguments, we use ******...  RestOperator, to add all in one place.
*/

//Compaire the difference  in this two function

function firstFunc(num) {
    return num
}
console.log(firstFunc(200, 400, 500, 2000));


function secondFunc(...num1) {
    return num1
}
console.log(secondFunc(200, 400, 500, 2000))






const user = {
    username: "Bappa",
    price: 999
}

//Use Object in function
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
//Tow different way to run the function
handleObject({
    username: "Debashis",
    price: 399
})




const myArray = [200, 400, 100, 600]

//Use Array in function
function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myArray));
//Tow different way to run the function
console.log(returnSecondValue([200, 400, 500, 1000]));





/*************************************Arrow Functions**********************************************/




/*
Arrow Functions were introduced in ES6.
Arrow Functions allow a shorter syntax for function expressions.
You can skip the function keyword, the return keyword, and the curly brackets:

*/


//Some different syntax of writting arrow function

let arrowFunction = (a, b) => a * b;


let arrowFunction_2 = function(a, b) {return a * b}

let arrowFunction_3 = (a, b) => a * b;

let arrowFunction_4 = function() {
  return "Hello World!";
}

let arrowFunction_5 = () => {
  return "Hello World!";
}

//If the function has only one statement that returns a value, you can remove the {} brackets and the return keyword:

let arrowFunction_6 = () => "Hello World!";
