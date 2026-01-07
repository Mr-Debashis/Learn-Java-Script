/*
Strings are for storing text
Strings are written with quotes - Double or single
*/

let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes



//To find the length of a string, use the built-in *length* property:

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);



//Normally, JavaScript strings are primitive values, created from literals:
//But strings can also be defined as objects with the keyword *new*

let y = new String("John");




//Template Strings/Literals use back-ticks (``) rather than the quotes ("") to define a string:

let text1 = `Hello World!`;

let text2 = `He's often called "Johnny"`;

let text3 =
            `The quick
            brown fox
            jumps over
            the lazy dog`;

//Template Strings allow variables in strings.
//Template strings provide an easy way to interpolate variables in strings.
let firstName = "John";
let lastName = "Doe";

let text4 = `Welcome ${firstName}, ${lastName}!`;




/*
Basic String Methods
Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.

String length
String charAt()
String charCodeAt()
String codePointAt()
String concat()
String at()
String [ ]
String slice()
String substring()
String substr()
String toUpperCase()
String toLowerCase()
String isWellFormed()
String toWellFormed()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()

*/

//The charAt() method returns the character at a specified index (position) in a string:

let text5 = "HELLO WORLD";
console.log(text5.charAt(0));


//concat() joins two or more strings:

let text6 = "Hello";
let text7 = "World";
console.log(text6.concat(" ", text7));



//slice() extracts a part of a string and returns the extracted part in a new string.
//The method takes 2 parameters: start position, and end position (end not included).
//Slice out a portion of a string from position 7 to position 13:

let text8 = "Apple, Banana, Kiwi";
console.log(text8.slice(7, 13));

//******This is few of the js string methods, for more read java script sting methods.*******

