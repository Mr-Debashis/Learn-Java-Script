
/*
++++++++++++++++++++++++++++++++++++++++++ JavaScript Scope +++++++++++++++++++++++++++++++++++++++++++++++++++++

Scope = Visibility
Scope determines the accessibility (visibility) of variables.

JavaScript variables have 3 types of scope:
Global scope
Function scope
Block scope

*/


/*
++++++++++++++++++++++++++++ Global Scope +++++++++++++++++++++++++++++++++++

Variables declared Globally (outside any block or function) have Global Scope.
Global variables can be accessed from anywhere in a JavaScript program.
Variables declared with var, let and const are quite similar when declared outside a block.

Global variables has Global Scope.

*/

var x = 1;    // Global scope
let y = 2;    // Global scope
const z = 3;  // Global scope



let carName = "Volvo";    //A global varriable is always act as global scope.
// code here can use carName

function myFunction() {
    console.log(carName);   //Here we can easily use caeName varriable.
}

myFunction();




/*
+++++++++++++++++++++++++++++++ Function Scope ++++++++++++++++++++++++++++++++++++

Each JavaScript function have their own scope.
Variables defined inside a function are not accessible (visible) from outside the function.
Variables declared with var, let and const are quite similar when declared inside a function.

*/

//We can't use the carName varriable here.

function myFunc() {
  let carName = "Volvo";    //This carName varriable is used only here.
}

//We can't use the carName varriable here.





/*
++++++++++++++++++++++++++++ Block Scope +++++++++++++++++++++++++++++++++++++++++

Before ES6, JavaScript variables could only have Global Scope or Function Scope.
ES6 introduced two important new JavaScript keywords: let and const.
These two keywords provide Block Scope in JavaScript.
Variables declared with let and const inside a code block are "block-scoped," meaning they are only accessible within that block.
This helps prevent unintended variable overwrites and promotes better code organization:

*/

{
  let x = 2;
}
//Block scope is same like function scope.
//We can't access x here.

{
  var x = 2; //Use **var to define a varriable is not recomended.
}
//We can access x here.



//+++++++++++++++++++ Some Important Topic +++++++++++++++++++++++++++++

//Nested Function, how scope is use here
function one(){
    const username = "Debashis"

    function two(){
        const website = "youtube"
        console.log(username);    //We can use the ***username here
    }
    // console.log(website);     // But we can't use **website varriable here

     two()

}
// two()    //We can't access two() here.
one()