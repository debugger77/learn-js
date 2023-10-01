//var c = 300                // Don't use var instead use let or const.          

let a = 300
if (true) {                  // values inside {} is block scope whereas outside {} is global scope. 
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "harshil"

    function two() {                     // block variables can access global variables but 
        const website = "youtube"       // block variables can't be accessed outside {}.
        // console.log(username);
    }
    // console.log(website);             // this throws an error

    two()
}
one()

if (true) {
    const username = "harshil"
    if (username === "harshil") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);        // this throws an error
}

// console.log(username);           // this throws an error


// ++++++++++++++++++ interesting ++++++++++++++++++

// console.log(addone(5))

function addone(num){       // for this type of function declaration we can call the function  
    return num + 1          // above as well as below, No errors will come.
}

console.log(addone(5))

// addTwo(5)

const addTwo = function(num){      // for this type of function declaration we can call the function
    return num + 2                 // only below the function and not above else error will occur as
}                                  // here addTwo acts as a variable.

console.log(addTwo(5));