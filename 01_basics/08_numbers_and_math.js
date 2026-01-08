/*
JavaScript has only one type of number.
Numbers can be written with or without decimals.
*/

let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals

//NaN is a JavaScript reserved word indicating that a number is not a legal number.
//Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

let a = 100 / "Apple";

//You can use the global JavaScript function isNaN() to find out if a value is a not a number:

console.log(isNaN(a))


//create a number with *new* keyword create a number object
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);

/*
Basic Methods
Basic number methods can be used on any number:

toString()
toExponential()
toFixed()
toPrecision()
valueOf()
Static Methods
Static methods can only be used on Number:

Number.isFinite()
Number.isInteger()
Number.isNan()
Number.isSafeInteger()
Number.parseInt()
Number.parseFloat()
*/


//The toString() method returns a number as a string.
//All number methods can be used on any type of numbers (literals, variables, or expressions):

let e = 123;
console.log(typeof(e.toString()));


//toExponential() returns a string, with a number rounded and written using exponential notation.
//A parameter defines the number of characters behind the decimal point:

let r = 9.656;
console.log(r.toExponential());
console.log(r.toExponential(4));


//toFixed() returns a string, with the number written with a specified number of decimals:

let t = 9.656;
console.log(t.toFixed());
console.log(t.toFixed(1));



const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));



const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));





// +++++++++++++ Maths +++++++++++++++++++++++++++++

/*
The JavaScript Math object allows you to perform mathematical tasks.
The Math object is static.
All methods and properties can be used without creating a Math object first.
*/

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)