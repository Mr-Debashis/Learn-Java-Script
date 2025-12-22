//-------------------------JavaScript toString() Method------------------------------------------//


/*
toString() method converts a variable (or a value) to a string in java script.
It is a built-in method for many data types, including numbers, arrays, dates, and objects.

The method is useful for:

Converting data to a readable format for display
Ensuring type compatibility when a string is required
Customizing objects other user interfaces
Customizing objects for debugging
*/


//---------JavaScript Array toString()-----------//

//When used on an array, toString() returns the array elements as a comma separated string.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let myList = fruits.toString();
console.log(myList);


//----------JavaScript Date toString()-----------//

//When used on a date, toString() returns a human-readable date and time string.
const d = new Date();
let text = d.toString();
console.log(text);

//----------JavaScript Number toString()---------//

//When used on a number, toString() returns the number as a string.
let x = 123;
let text1 = x.toString()
console.log(text1);


//--------------------------------------------------------------------------------------------//


//-------------------------JavaScript TypeConversion------------------------------------------//

//----Converting Strings to Numbers----//

/*The global method Number() converts a variable (or a value) into a number.
A numeric string (like "3.14") converts to a number (like 3.14).
An empty string (like "") converts to 0.
A non numeric string (like "John") converts to NaN (Not a Number)
*/

Number("3.14")        //=> 3.14
Number(Math.PI)       //=> 3.141592653589793
Number(" ")           //=> 0
Number("")            //=> 0
Number("99 88")       //=> NaN
Number("John")        //=> NaN


//Number()	    Returns a number, converted from its argument
//parseFloat()	Parses a string and returns a floating point number
//parseInt()	Parses a string and returns an integer


//----Converting Numbers to Strings----//

//The global method String() can convert numbers to strings.
//It can be used on any type of numbers, literals, variables, or expressions:

String(x)         // returns a string from a number variable x
String(123)       // returns a string from a number literal 123
String(100 + 23)  // returns a string from a number from an expression

//******The Number method toString() does the same******.





















