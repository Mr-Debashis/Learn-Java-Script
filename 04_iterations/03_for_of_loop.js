
//++++++++++++++++++++++++++++++++++++++ For Of Loop ++++++++++++++++++++++++++++++++++++++++++++

/*

The JavaScript for of statement loops through the values of an iterable object.
It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

for (variable of iterable) {
  // code block to be executed
}

*/

//Use for of loops in Array
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
};

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");


//Use for of loops in Strings
const greetings = "Hello"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
};

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");


//+++++++++++++++++++++++++++++++++++ JavaScript Maps +++++++++++++++++++++++++++++++++++++++

const map = new Map();

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

console.log(map);

//Use for of loop on map() object
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

//Use for of loop on object
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
};      //This for of loop gives an error because object can't iterable like this. There are some other method to do that on object.

