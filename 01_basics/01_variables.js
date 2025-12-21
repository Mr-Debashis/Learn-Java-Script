
//We can store data in java script by using variables.
//To create a variable we use const and let keyword (var is not use now)

const accountId = 123456789;
let accountEmail = "debashis@google.com";
var accountPassword = "12345";

accountCity = "Mumbai";  //This way to declear a variable is bad practice.

let accountState;       //Empty Variable

// accountId = 1236458;       //This is not allowed because const can not be changed.


accountEmail = "dp@gmail.com"
accountPassword = "21212121"         //Change the values.
accountCity = "Bengaluru"

console.log(accountId);

//Prefer not to use "VAR" because of issue in block scope and functional scope


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])