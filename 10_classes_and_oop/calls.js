function SetUsername(username){
    //complex DB calls
    this.username = username      // here this will get vanished so use this as a parameter in call()
    console.log("called");
}

function createUser(username, email, password) {
    SetUsername.call(this, username)    // call is used to hold the reference of username
                                        // call passes current execution context to another function.
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);