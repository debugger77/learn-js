// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3, 2)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
console.log(myCreatedDate.getTime());           // Normally time is in milliseconds
console.log(Math.floor(Date.now() / 1000));       // To get the time in seconds

let newDate = new Date()
console.log(newDate.toString());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

console.log((`The day is ${newDate.getDay()} and the month is ${newDate.getMonth() + 1}`))

newDate.toLocaleString('default', {
    weekday: "long",
})