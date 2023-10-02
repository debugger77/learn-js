        // if else
        
const temperature = 41

if ( temperature === 41 ){
    // console.log("less than 50");
} else {
    // console.log("temperature is greater than 50");
}

// console.log("Execute");              // !== checks whether 2 operands are equal or not along with 
// <, >, <=, >=, ==, !=, ===, !==       // their type
                                       
const score = 200

if (score > 100) {
    let power = "fly"
    // console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);             // Error


// Not a good practice to write implicit scope using comma in a single line as done below.

const balance = 1000
// if (balance > 500) console.log("test"), console.log("test2");   

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}