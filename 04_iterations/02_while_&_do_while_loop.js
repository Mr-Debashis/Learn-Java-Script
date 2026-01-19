
//+++++++++++++++++++++++++ While Loop ++++++++++++++++++++++++++++++++++++

/*
The while loop loops through a block of code as long as a specified condition is true.
All loops are same in work, just difference in syntax and usecase.
*/

let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
};
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");


//Use loop i array
let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
};
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

//+++++++++++++++++++++++++++++++++++ Do While Loop ++++++++++++++++++++++++++++++++++++++++++++

/*
The do while loop is a variant of the while loop.

The do while loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
*/

let score = 1

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 5);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");


//Here the do while loop execute the code and after that check the condition. So it's print the **num value 1st.
//After that check condition, the conditon is false, so later the loop desn't execute.
let num = 111

do {
    console.log(`Number is ${num}`);
    num++
} while (num <= 5);