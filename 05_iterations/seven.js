            // Map

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNumers.map( (num) => { return num + 10 })

// Using for each

// const newNums = []
// myNumers.forEach( (num) =>  {
//     return newNums.push(num + 10) 
// })

//  Chaining
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)       // Here (num) is [10,20,30,40,50,60,70,80,90,100]
                .filter( (num) => num >= 40)   // Here (num) is [11,21,31,41,51,61,71,81,91,101]

console.log(newNums);