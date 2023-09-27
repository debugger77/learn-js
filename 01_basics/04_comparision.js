// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);     // Try to compare values with same datatype

console.log(null > 0);   //equality check(==) and comparision operators(<,>,<=,>=) work differently
console.log(null == 0);   // comparisions convert null to a number, treating it as 0
console.log(null >= 0);   // that is why null > 0 gives false and null >= 0 gives true. 

// console.log(undefined == 0);
// console.log(undefined > 0);         // undefined gives false in all cases
// console.log(undefined < 0);

// ===              (strict check -> it checks the values along with datatypes)

console.log("2" === 2);