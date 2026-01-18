
//+++++++++++++++++++++++++++++++++++++++++ for loop +++++++++++++++++++++++++++++++++++++++++++++++++++++

/*

Loops can execute a block of code a number of times.
Loops are handy, if you want to run the same code over and over again, each time with a different value.

*/

for (let i = 0; i <= 5; i++) {
    const element = i;
    console.log(element);
};
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

//For loop with conditional statement
for (let i = 0; i <= 5; i++) {
    const element = i;
    if (element == 2) {
        console.log("2 is best number");
    }
    console.log(element);
};
// console.log(element);      //We can't access element varriable here, due to block scope.
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

//++++++++ Nested loop ++++++++++

for (let i = 1; i <= 3; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 3; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
   }
};
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

//+++++++++ Use loop in array +++++++++

let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
};
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

//+++++++  **Break and **continue keywords for loop  ++++++++++

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break       //Use of **break keyword
    }
   console.log(`Value of i is ${index}`);
};
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");



for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue    //Use of **continue keyword
    }
   console.log(`Value of i is ${index}`);
    
}