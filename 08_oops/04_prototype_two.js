
/*
#Prototypal Inheritance:
In simple way --- By using **__proto__ keyword we can link other properties to another object or datatype

*/

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//Here we add a new function in global object, that is avialable in all data
Object.prototype.addPower = function(){
    console.log(`Add New Power`);
}

//Here we add a new function in array only, that is avialable in array only
Array.prototype.addPower_2 = function(){
    console.log(`Add Another New Power`);
}

heroPower.addPower()
myHeros.addPower()
myHeros.addPower_2()
// heroPower.addPower_2()



// ### Inheritance

//We can connecte or link two or more data by using Inheritance concept
//Here we use **__proto__ keyword

const User = {
    name: "Debashis",
    email: "debashis@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport   //Here we add **TeachingSupport object data into **TASupport
}

Teacher.__proto__ = User         //Here we add **User object data into **Teacher



// ++++++++++++++++++ modern syntax (Now developer use this syntax) ++++++++++++++++
Object.setPrototypeOf(TeachingSupport, Teacher)
//Here we add **Teacher object data into **TeachingSupport




// ##### Expamle to add an method on datatype using prototype
let anotherUsername = "Denashis     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"JavaScript".trueLength()
"Python".trueLength()