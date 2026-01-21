
//++++++++++++++++++++++++++++++++++++++++++++++++ reduce() method ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
The reduce() method executes a reducer function for array element.
The reduce() method returns a single value: the function's accumulated result.
The reduce() method does not execute the function for empty array elements.
The reduce() method does not change the original array.

Syntax:
array.reduce(function(accumulator, currentValue, currentIndex, arr), initialValue)

*/

const myNums = [1, 2, 3]

//Use **reduce() method by normal function
const myTotal = myNums.reduce(function (accumulator, currentValue) {
    console.log(`acc: ${accumulator} and currval: ${currentValue}`);
    return accumulator + currentValue
}, 0)

console.log(myTotal);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

//Use **reduce() method by arrow function
const myTotal1 = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal1);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");



//Use **reduce() method in objects of array
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);