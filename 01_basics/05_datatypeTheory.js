/*

A JavaScript variable can hold 8 types of data.
7 Primitive Data Types and 1 Object Data Type.
The Object data type can hold many different object types.

****Primitive Data Types****
Number	--  A number representing a mathematical value
Bigint	--  A number representing a large integer
String	--  A text of characters enclosed in quotes
Boolean	--  A data type representing true or false
Undefined	--  A primitive variable with no assigned value
Null	--  A primitive value representing object absence
Symbol	--  A unique and primitive identifier

****Non-Primitive Data Types****
Object	--  A collection of key-value pairs of data
    Array  --  
    Date  --  
*/

//****Primitive Data Types****
// Number
let length = 16;
let weight = 7.5;

// BigInt
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)

// Strings
let color = "Yellow";
let lastName = "Johnson";

// Boolean
let a = true;
let b = false;

// Undefined
let f;
let g;

// Null
let t = null;
let n = null;

// Symbol
const u = Symbol();
const o = Symbol();



//****Non-Primitive Data Types****
// Object
const person = {firstName:"John", lastName:"Doe"};

// Array Object
const cars = ["Saab", "Volvo", "BMW"];

// Date Object
const date = new Date("2022-03-25");


/*----------------------------------------------------------------------------------------*/


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

//typeOf() method is used to known type of any data
console.log(typeof anotherId);