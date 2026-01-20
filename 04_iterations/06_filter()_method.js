
//+++++++++++++++++++++++++++++++++++++++++++ filter() method ++++++++++++++++++++++++++++++++++++++++++++++++++

/*

The filter() method creates a new array filled with elements that pass a test provided by a function.
The filter() method does not execute the function for empty elements.
The filter() method does not change the original array.

*/

//We can't use forEach() method in array to return a value. forEach() don't return values.
const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item) => {
  // console.log(item);
  return item
})
console.log(values); //Here its says values are undefined.
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");



//So we can't use forEach() to return array values, so here we have to use filter() method to do that.
//*** In filter() method, to use looping, we check conditon and we get the true values as loop result *******
//Method-1
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => num > 4)   //This is simple filter() method here we don't use **return keyword
console.log(newNums);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");


//Method-2
const newNums1 = myNums.filter((num) => {
  return num > 4   //Here we use {} means scope, so here we have to use **return keyword.
})
console.log(newNums1);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

//Method-3
//Do same work but here we use forEach()
const newNums2 = []

myNums.forEach((num) => {
  if (num > 4) {
    newNums2.push(num)
  }
})
console.log(newNums2);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");



//Here we use filter() method to access object in array
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

//Here we don't use **return keyword
let userBooks = books.filter((bk) => bk.genre === 'History')
console.log(userBooks);

//Here we use **return keyword because of {}, scope.
let userBooks2 = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks2);