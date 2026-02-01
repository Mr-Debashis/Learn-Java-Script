
//+++++++++++++++++++++++++++++ Inheritance ++++++++++++++++++++++++++++++++++++++++

class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}


class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const user_1 = new Teacher("debashis", "debashis@teacher.com", "123")
user_1.logMe()

const user_2 = new User("Javascript")
user_2.logMe()

console.log(user_1 instanceof User);