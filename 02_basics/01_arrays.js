// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["ironman", "thor"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// ***********Array methods***************

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)         // unshift adds the element at the beginning
// myArr.shift()            // shift removes the element from the beginning.

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()          // here newArr type is string

// console.log(myArr);
// console.log(newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);          // it will print -> 1,2 (slice)
console.log("B ", myArr);
                                       
const myn2 = myArr.splice(1, 3)    //splice will manipulate(change) the array whereas slice will not.
console.log("C ", myArr);           // splice will include the last value whereas slice will not.
        
console.log(myn2);          // it will print -> 1,2,3 (splice)