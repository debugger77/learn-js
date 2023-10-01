const user = {
    username: "harshil",
    price: 999,

    welcomeMessage: function() {            // this keyword refers to current context (values).
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}                                               //  Interview Q
                                // global object inside browser is window object whereas here its
// user.welcomeMessage()        // empty object 
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);              // here this gives emty object i.e {}

// function chai(){
//     let username = "harshil"
//     console.log(this.username);  // o/p is undefined,it works fine within objects not inside func.
// }

// const chai = function () {
//     let username = "harshil"
//     console.log(this.username);      // o/p is undefined
// }

             // arrow function

const chai = () => {                   
    let username = "harshil"
    console.log(this.username);    //o/p is undefined, if only this is written within {} then o/p {} 
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2      // Implicit return i.e when we don't need to 
                                                    // return keyword else Explicit return.
// const addTwo = (num1, num2) => ( num1 + num2 )   

                                                          // IMP Concept
const addTwo = (num1, num2) => ({username: "harshil"})    // it will not work without wrapping ();

console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()