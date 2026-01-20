
//++++++++++++++++++++++++++++++++++++++++ map() method +++++++++++++++++++++++++++++++++++++++++++++++++++

/*
map() creates a new array from calling a function for every array element.
map() does not execute the function for empty elements.
map() does not change the original array.
*/

//Here we use map() method to access array, this is littile bit same like filter()
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Method-1
//Here we don't use **return keyword
const newNums1 = myNumers.map((num) => num + 10)
console.log(newNums1);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");


//Method-2
//Here we use **return keyword because of {}, scope.
const newNums2 = myNumers.map((num) => { return num + 10 })
console.log(newNums2);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");


//Method-3
//Chaining filter() and map()
const newNums3 = myNumers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)

console.log(newNums3);