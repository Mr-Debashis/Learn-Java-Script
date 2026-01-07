/*
Stack memory is used to store all primitive data type.

When a data is store in stack memory, we get a copy of that data to use ferther,
it means we can't change the original data, we can only use and change/modify the copied data.

*/

let a = true;

let b = a;
b = false;

console.log(a)
console.log(b)



/*
Heap memory is used to store all non-primitive data type.

When a data is store in heap memory, we get the original/reference data to use ferther,
it means when we change/modify the heap memory data, we actually change/modify the original data.

*/


let user = {
    id : "debashis",
    payment : true
}

let user2 = user
user2.id = "Bappa"

console.log(user)
console.log(user2)