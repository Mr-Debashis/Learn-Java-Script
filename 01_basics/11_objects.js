
// singleton - Create an object by using constructor or Object.create() method.



// object literals - When we create an object by using only {} curly braces.

const mySym = Symbol("key1")

const user = {
    name: "Debashis",
    "full name": "Debashis Patra",
    [mySym]: "mykey1",
    age: 18,
    location: "Kolkata",
    email: "debashis@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//Different way to access to object key and value
console.log(user.email)
console.log(user["email"])
console.log(user["full name"])
console.log(user[mySym])

//By this way we can change or update object's value
user.email = "debashis@chatgpt.com"
console.log(user.email)

// Object.freeze(user)
//freeze() method is used to **lock an object, so we can't change or update object values.

user.email = "debashis@microsoft.com"    //After freeze the object we can't change the object value.
console.log(user.email);


user.greeting = function () {
    console.log("Hello JS user");
}

user.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(user.greeting);
console.log(user.greeting());

console.log(user.greetingTwo);
console.log(user.greetingTwo());



//we can also create an object by using **new Object() method.
const newObj = new Object()

console.log(newObj);

//We can update object values like this way
newObj.id = "12345"
newObj.name = "Moumita"
newObj.isLoggedIn = false

console.log(newObj);


//This is an example of Nested Object
const nestedObj = {
    email: "demo@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Moumita",
            lastname: "Maity"
        }
    }
}

//And we can acssess nested object values like this way
console.log(nestedObj.fullname.userfullname.firstname);



/****************************Join tow or more object in one************************************************/

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// This method create an nested object, so we don't use this method.
const obj3 = { obj1, obj2 }
console.log(obj3);

//This method create an object combine of tow object values in one.
const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4); obj4

//This method create an object combine of tow object values in one. And we always use this (...)spreaed method.
const obj5 = { ...obj1, ...obj2 }
console.log(obj5);


//At real world we get this type of data **Array of Objects.
const allUsers = [
    {
        id: 1,
        name: "Bappa"
    },
    {
        id: 2,
        name: "Moumita"
    },
    {
        id: 3,
        name: "Debashis"
    },
]

allUsers[1].name;     //We can access array of object, like this way.
console.log(allUsers[1].name)





const demoObj = {
    id : 123456,
    name : "Bappa",
    isLoggedIn : true,
};

//By using **Object.keys() method, we can access all keys of an object.
console.log(Object.keys(demoObj));

//By using **Object.values() method, we can access all values of an object.
console.log(Object.values(demoObj));

//By using **Object.entries() method, we can make an array of key:values pair.
console.log(Object.entries(demoObj));

//By using **hasOwnProperty() method, we can know any keys are there or not in an object.
console.log(demoObj.hasOwnProperty('isLoggedIn'));





// Object destructuring in JavaScript is a concise syntax for extracting properties from objects and assigning them to distinct variables, making code cleaner and reducing repetition when accessing data like ****const { name, age } = user; instead of ****const name = user.name;.

// It allows for unpacking nested properties, setting default values, renaming variables, and collecting remaining properties with the ...rest syntax. 


const course = {
    coursename: "JavaScript tutorial",
    price: "999",
    courseInstructor: "Debashis"
}

console.log(course.courseInstructor); //This is normal way to access to object. But we use **Object Destructuring


//Instead of normal method we use this methods.
const { courseInstructor } = course
console.log(courseInstructor);

const { courseInstructor: instructor } = course
console.log(instructor);


