const user = {
    username: "harshil",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);          // here this keyword has to be written.
        console.log(this);                      // will get entire object with getUserDetails function 
    }
}

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);                           // will get {}.

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this                 // it is done by default so without this line no change in code will occur.
}

// new keyword is used to create an instance of an object that has a constructor function.
const userOne = new User("harshil", 12, true)       
const userTwo = new User("Javascript", 11, false)
console.log(userOne.constructor);                // here constructor property is the reference to itself.
console.log(userTwo);