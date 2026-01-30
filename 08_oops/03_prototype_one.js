
//+++++++++++++++++++++++++++++++++++++ Prototypes +++++++++++++++++++++++++++++++++++++++++++++++

/*
Prototypes are the core mechanism in JavaScript used for inheritance and sharing functionality among objects. Every JavaScript object has a link to a prototype object, forming a prototype chain that determines how properties and methods are accessed. 

#Prototypal Inheritance:
This is JavaScript's way of implementing object-oriented inheritance, allowing objects to reuse methods and properties defined on their prototypes, which saves memory by avoiding code duplication.

#Prototype Chain:
When you try to access a property on an object, JavaScript first looks for it in the object itself. If not found, it looks in the object's prototype, then the prototype's prototype, and so on, until it finds the property or reaches the end of the chain (which is null).

#####At the end everything in javascript is Object.

String  ----->
Array   ----->  Object --------> Null
Function----->

*/


//Here we can see this function is at the end act or reffer as object
function multipleBy5(num){
    return num*5
}
multipleBy5.power = 2

console.log(multipleBy5(5));          //This is normal console
console.log(multipleBy5.power);       //Here we can access power with . like object
console.log(multipleBy5.prototype);   //And the **prototype is an empty {} object



//Because function act like object, we can inject another function into that function
//This is an normal function
function createUser(username, score){
    this.username = username
    this.score = score
}

//Here we add an function (increment) to the main function - createUser
createUser.prototype.increment = function(){
    this.score++  //Here we use **this because to reffer current context
}

//Here we add an function (printMe) to the main function - createUser
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const score_1 = new createUser("Debashis", 25)  //Here we use **new keyword to get a copy the original one
const score_2 = createUser("JavaScript", 250)   //Here we get an error

score_1.printMe()
score_2.printMe()



/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/