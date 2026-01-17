
/*

Conditional Statements allow us to perform different actions for different conditions.
Conditional statements run different code depending on true or false conditions.

Conditional statements include:

if
if...else
if...else if...else
switch
ternary (? :)


When to use Conditionals

Use if to specify a code block to be executed, if a specified condition is true
Use else to specify a code block to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative code blocks to be executed
Use (? :) (ternary) as a shorthand for if...else

*/


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ if statement ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//In this conditional statement (if else), we check given temperature is 40 or not.
// if temperature is 40 print 40 and not print the given temperature.
const temperature = 41

if (temperature === 40) {
    console.log("Temperature is 40");
} else {
    console.log(`Temperature is , ${temperature}`);
}


//Check scope in conditional statement
const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`); //Here we access the power varriable.
};
// console.log(`User power: ${power}`);  // But Here we can't access the power varriable. It's give an error.



//++++++++++++++++++++ Short-hand notetion of conditional statement. +++++++++++++++++++
const balance = 1000

if (balance > 500) console.log(`Balance is , ${balance}`); else console.log("Balance is less"); //Not Recommended this type of code writting.



//++++++++++++++++++++++++++++++++++ Nested conditional statements +++++++++++++++++++++++++
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 750");
} else {
    console.log("less than 1200");
};


//+++++++++++++++++++++++++++ Check multiple condition in if statement +++++++++++++++++++++++++++++++++++++++++

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 2) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}