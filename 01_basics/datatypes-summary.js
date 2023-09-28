                                // Notes
// datatypes are divided into two types i.e. primitive and non-primitive on the basis of how the data are stored in memory and accessed.

// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object                      // IMP
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')           //symbol always gives unique value even if inside values are same
const anotherId = Symbol('123')

// console.log(id === anotherId);

//  const bigNumber = 3456543576654356754n

// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "ironman", "batman"];
let myObj = {
    name: "harshil",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(heros);
// console.log(typeof userEmail);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

// Whenever stack memory is used then we get the copy of the variable while whenever heap memory is used we get the reference of the variable.

let myYoutubename = "namedotcom"
let anothername = myYoutubename
anothername = "newnamedotcom"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    user: "user@google.com",
    id: "user@ybl"
}

let userTwo = userOne

userTwo.email = "newuser@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
