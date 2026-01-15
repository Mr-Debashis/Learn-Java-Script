
/*

What is the Execution Context?
When the JavaScript engine scans a script file, it makes an environment called the Execution Context that handles the entire transformation and execution of the code.

During the context runtime, the parser parses the source code and allocates memory for the variables and functions. The source code is generated and gets executed.

There are two types of execution contexts: global and function.
The global execution context is created when a JavaScript script first starts to run, and it represents the global scope in JavaScript.
A function execution context is created whenever a function is called, representing the function's local scope.


Phases of the JavaScript Execution Context
There are two phases of JavaScript execution context:

Memory Creation / Creation phase: In this phase, the JavaScript engine creates the execution context and sets up the script's environment. It determines the values of variables and functions and sets up the scope chain for the execution context.

Execution phase: In this phase, the JavaScript engine executes the code in the execution context. It processes any statements or expressions in the script and evaluates any function calls.

Everything in JS happens inside this execution context. It is divided into two components. One is memory and the other is code. It is important to remember that these phases and components are applicable to both global and functional execution contexts.

*/


//++++++++++++++++++++++++++++++++++++++++++++++++ Call Stack +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/* 

What is the Call Stack?
To keep the track of all the contexts, including global and functional, the JavaScript engine uses a call stack. A call stack is also known as an 'Execution Context Stack', 'Runtime Stack', or 'Machine Stack'.

It uses the LIFO principle (Last-In-First-Out). When the engine first starts executing the script, it creates a global context and pushes it on the stack. Whenever a function is invoked, similarly, the JS engine creates a function stack context for the function and pushes it to the top of the call stack and starts executing it.

When execution of the current function is complete, then the JavaScript engine will automatically remove the context from the call stack and it goes back to its parent.

*/

function one(){
    console.log("One");
    two()

}

function two(){
    console.log("Two");
    three()
}

function three(){
    console.log("Three");
}

one()
two()
three()
