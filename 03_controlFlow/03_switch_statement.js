
//+++++++++++++++++++++++++++++++++++++++++++++ Switch Statement ++++++++++++++++++++++++++++++++++++++++++

/*

Based on a condition, switch selects one or more code blocks to be executed.
switch executes the code blocks that matches an expression.

switch is often used as a more readable alternative to many if...else if...else statements, especially when dealing with multiple possible values.

Switch Syntex:------

switch (key) {
    case value:
        
        break;

    default:
        break;
}

This is how it works:

The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, no code is executed.


The **Breck keyword:

When JavaScript reaches a break keyword, it breaks out of the switch block.
This will stop the execution inside the switch block.
No more statements in the switch block will be executed.
It is not necessary to break the last case. The switch ends (breaks) there anyway.

*/

const month = "march"

switch (month) {  //In the () we put key-that value we want to check.
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:    //If no case match, the default case is printed.
        console.log("default case match");
        break;
}