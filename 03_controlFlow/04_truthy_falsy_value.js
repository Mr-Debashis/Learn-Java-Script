
/*

In JavaScript, truthy and falsy values are concepts related to boolean evaluation. Every value in JavaScript has an inherent boolean "truthiness" or "falsiness," which means they can be implicitly evaluated to true or false in boolean contexts, such as in conditional statements or logical operations.

What Are Truthy Values? ++++++++++++++++++++++++++++++++++++++++

Truthy values are that values, javascrit is assumed as true.
Truthy values are values that are evaluated to be true when used in a Boolean context. Simply put, any value that is not explicitly falsy is considered truthy.

These are some truthy values:

Non-zero numbers: 42, -1, 3.14
Non-empty strings: "hello", "0", " "
False in sring: "false"
Empty Objects and arrays: {}, []
Empty Functions: function() {}
Dates: new Date()
Symbols: Symbol()
BigInt values other than 0n: 10n


What Are Falsy Values? +++++++++++++++++++++++++++++++++++++++++++++

Falsy values are that values, javascrit is assumed as false.
Falsy values are values that evaluate to false when used in a Boolean. JavaScript has a fixed list of falsy values

These are some falsy values:

false
0 (and -0)
0n (BigInt zero)
"" (empty string)
null
undefined
NaN (Not A Number)
document.all (used for backward compatibility)

*/

// const userEmail = ""
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
};


//Access array in if statement
if (userEmail.length === 0) {
    console.log("Array is empty");
}

//Access object in if statement
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//++++++++++++++++++++ Nullish Coalescing Operator (??): null undefined +++++++++++++++++++++++++++++++++++

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

//++++++++++++++++++++++++ Terniary Operator +++++++++++++++++++++++++++++++++

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")