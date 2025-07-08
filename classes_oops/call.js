function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}
function createUser(username, email, password){
    SetUsername.call(this, username)//direct calling will  loose the context of setUsername and 
    // this.username so username variable name username is not set
    // so one have to pass this reference aur context of createuser to setUsername and 
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);