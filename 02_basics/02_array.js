const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)      
// console.log(allHeros);                  //concat returns a new array by combining 2 or more arrays

const all_new_heros = [...marvel_heros, ...dc_heros]        //spread operator

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //it concatenates all sub-array elements 
// console.log(real_another_array);                     //upto given depth, here infinity is depth.


console.log(Array.isArray("Harshil"))
console.log(Array.from("Harshil"))
console.log(Array.from({name: "harshil"}))      // interesting -> for this case answer is [], because
                            //  we have to specify whether we have to make array from keys or values.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));