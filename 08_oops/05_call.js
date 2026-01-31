

//Call pass current execution context to another function

function SetUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    //Here we use **call to set current context and **this is use to use this context
   
    this.email = email
    this.password = password
}

const user_1 = new createUser("Debashis", "debashis@fb.com", "123")
console.log(user_1);