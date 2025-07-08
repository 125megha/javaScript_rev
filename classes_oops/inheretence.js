class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{// to inherite parent class
    constructor(username, email, password){
        super(username)// to pass parameter to the parent class
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.logMe()
const masalaChai = new User("masalaChai")
masalaChai.logMe()
// instance to check instance 
console.log(chai instanceof User);