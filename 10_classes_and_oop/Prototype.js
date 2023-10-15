// let myName = "harshil     "
// let mychannel = "javascript     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// if any property is added to a particular Object then that property will also be available to array, function, string as they all are objects only. 
Object.prototype.harshil = function() {             
    console.log(`Harshil is present in all objects`);
}

// But if the property is given specifically to the array or function then that will only be valid to them.
Array.prototype.heyHarshil = function(){
    console.log(`Harshil says hello`);
}

// heroPower.harshil()
// heroPower.getSpiderPower()
// myHeros.harshil()
// myHeros.heyHarshil()
// heroPower.heyHarshil()           // -> error


// inheritance
const User = {
    name: "javascript",
    email: "javascript@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

// Old syntax
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport      // injecting TeachingSupport object to TASupport object
}

Teacher.__proto__ = User        // Now, Teacher can access all the properties of the object User.

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Javascript     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"harshil".trueLength()
"iceTea".trueLength()