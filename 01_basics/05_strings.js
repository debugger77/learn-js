const name = "harshil"
const repoCount = 10

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Good way to concat string

const gameName = new String('harshil-h')

// console.log(gameName[0]);
// console.log(gameName.__proto__);        // Using this prototype can be accessed 


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)     // slice can take -ve values but substrong can't.
console.log(anotherString);

const newStringOne = "   harshil    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://harshil.com/harshil%20raj"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));