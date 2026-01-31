// +++++++++++++++++++++++++ Classes ++++++++++++++++++++++++++++++++++

//This the way to create a class by using **class keywrod
class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){     //Here we add a function into the class
        return `${this.password}abc`
    }
    changeUsername(){      //Here we add an another function into the class
        return `${this.username.toUpperCase()}`
    }

}

const user_1 = new User("Debashis", "debashis@gmail.com", "123")    //Create an user using the class

console.log(user_1.encryptPassword());
console.log(user_1.changeUsername());



//+++++++++++++++++++++++ We can do same work without using the classes +++++++++++++++

function new_user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

new_user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
new_user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const user_2 = new new_user("Javascript", "Javascript@gmail.com", "123")

console.log(user_2.encryptPassword());
console.log(user_2.changeUsername());