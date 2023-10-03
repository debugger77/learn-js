// ["", "", ""]
// [{}, {}, {}]

    // for of
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

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

for (const [key, value] of map) {           // if only 1 variable is used after const then we get 
    console.log(key, ':-', value);          // arrays of keys and values present in map
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);           // objects are not iterable using for of but maps are
// }
