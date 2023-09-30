// objects can be declared using two ways - 1. literal and 2. constructor
// when we declare objects using literals then it is not singleton else it is singleton.

// singleton
// Object.create            //declaring using constructor

// object literals
const mySym = Symbol("key1")

//object declaration
const JsUser = {
    name: "Harshil",
    "full name": "Harshil H",
    [mySym]: "mykey1",             //symbol type is used inside [] else mySym will become string type
    age: 22,
    location: "Begaluru",
    email: "harshil@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//object accessing
// console.log(JsUser.email)
console.log(JsUser["email"])            //good practice to access objects.
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "harshil@chatgpt.com"
// Object.freeze(JsUser)                // to freeze the object
JsUser.email = "harshil@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);     // here this is IMP to write
}

console.log(JsUser.greeting());     //here we can't use greeting we have to use gretting()
console.log(JsUser.greetingTwo());