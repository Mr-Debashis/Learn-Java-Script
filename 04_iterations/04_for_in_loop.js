
//+++++++++++++++++++++++++++++++++++++++++++++ For in loop +++++++++++++++++++++++++++++++++++++++++++++++++++

/*
The for...in loop iterates over the enumerable properties of an object.
The for...in loop is primarily used for objects to access their property names (keys).

For in loop syntax:

for (key in object) {
  // code block to be executed
}

key:
A variable that holds the name (key) of each property during the iterations.
object:
The object whose properties are being iterated over.

*/

//We can't use for of loop on object, but we can use **for in loop on object
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    // console.log(key);
}

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

//We also use **for in loop on array
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

//We can't use **for in loop in map() object
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
};
