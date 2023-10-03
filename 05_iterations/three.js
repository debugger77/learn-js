// ["", "", ""]
// [{}, {}, {}]

    // for of
const arr = [1, 2, 3, 4, 5]

for (const num in arr) {
    console.log(num);            // Here using for of loop we get values  
}                                // and using for in loop we get keys.

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

// Iteration of map using for of loop

for (const key of map) {           // we get keys and values as an array of object
    // console.log(key);              
}

for (const [key, value] of map) {           // we get keys and values as a string type
    // console.log(key, ':-', value);          // better to use this destructuring method.
}      

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);           // objects are not iterable using for of but maps are
// }
