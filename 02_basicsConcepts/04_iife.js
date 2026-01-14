
// Immediately Invoked Function Expressions (IIFE)


/*

**What Is an IIFE?

An IIFE is a function that invokes itself when defined.
An IIFE runs automatically when the JavaScript engine reads it (compiles it).

Normally, a function runs only when it is called.


**When is IIFE Used?

To create a private scope
To run setup code once
Avoid Polluting the Global Scope***
Everything inside an IIFE is private to that function.
Variables inside an IIFE cannot be accessed from outside.

*/

//Named IIFE

(function demo(){
    console.log(`DB CONNECTED`);
})();    //If we did't ues **; the code gives an error. ; means the above code is ended here and new code run after that ; semi-colon.



//Simple/Unnamed IIFE

( (name) => {
    console.log(`DB CONNECTED TWO , ${name}`);
} )("Bappa")

