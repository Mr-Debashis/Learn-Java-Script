/*

An Array is an object type designed for storing data collections.
Key characteristics of JavaScript arrays are:

Elements: An array is a list of values, known as elements.
Ordered: Array elements are ordered based on their index.
Zero indexed: The first element is at index 0, the second at index 1, and so on.
Dynamic size: Arrays can grow or shrink as elements are added or removed.
Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).

It is a common practice to declare arrays with the const keyword.

*/

const cars = ["Saab", "Volvo", "BMW"];
const nums = [10, 20, 30, 40, 50];

//We can also create an array using **new keyword. This is provide an array object.
const carsObject = new Array("Saab", "Volvo", "BMW");


//We can access an array element by referring to the index number:
console.log(cars[0]);

//We can also change or update the array value by using index number.
cars[0] = "Opel";
console.log(cars);

/*
Basic Array Methods

Array.length
Array toString()
Array at()
Array join()
Array pop()
Array push()
Array shift()
Array unshift()
Array isArray()
Array delete()
Array concat()
Array copyWithin()
Array flat()
Array slice()
Array splice()
Array toSpliced()
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];

//The length property returns the length (size) of an array:
console.log(fruits.length);

//The toString() method returns the elements of an array as a comma separated string.
console.log(fruits.toString());

//The pop() method removes the last element from an array:
console.log(fruits.pop());

//The push() method adds a new element to an array (at the end):
fruits.push("Kiwi");
console.log(fruits);

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
fruits.unshift("Graps")
console.log(fruits);

//The big difference between slice() & splice() method
//The slice() method slices out a piece of an array. But did't change the original array.
console.log(fruits.slice(1));

//The splice() method adds or remove new items to an array. And change the original array
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);





const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//*******We don't use push() method to join or concat two or more array into one array. Because it didn't give a new array with all values.

// marvel_heros.push(dc_heros);         
// console.log(marvel_heros);


//*****We use concat() method to join or concat two or more array into one array. It give a new array with all values.
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);


//*****But in real we use spread operator (...) to join or concat two or more array into one array. It give a new array with all values.
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//flat() method create a new simple array, by combine all value and we set the depth level - 1, 2, 3, Infinity
const real_another_array = another_array.flat(1);
console.log(real_another_array);


//Array.isArray() method check any data is array or not. It return boolean value.
console.log(Array.isArray(another_array))
console.log(Array.isArray("Bappa"))


let score1 = 100
let score2 = 200
let score3 = 300

//Array.of() method - create a new array by useing any given data type. Here we use 3 varriables, to convert in one array.
console.log(Array.of(score1, score2, score3));


//Array.from() method - create a new array by useing any given data. Here we use a string, to convert in one array.
console.log(Array.from("Bappa"))


//Here we don't convert a object directly into a array, but we can create an array of this obeject's keys or values.
console.log(Array.from({name: "Bappa"}));



