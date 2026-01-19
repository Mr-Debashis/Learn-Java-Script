
//++++++++++++++++++++++++++++++ For Each() loop ++++++++++++++++++++++++++++++++++++++++
/*
The forEach() method calls a function for each element in an array.
The forEach() method is not executed for empty elements.

Syntax:
array.forEach(function(currentValue, index, arr), thisValue)

*/

//We mostly use forEach() loop in array.
const coding = ["js", "ruby", "java", "python",]

// In forEach() we have to pass a function as callback in forEach() loop like below:

//Method-1
coding.forEach(function (val) {
    console.log(val);
})
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

//Method-2
coding.forEach((item) => {
    console.log(item);
})
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

//Method-3
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

//Method-4
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// Here we access object in array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
];
myCoding.forEach((item) => {
    console.log(item.languageName);
})