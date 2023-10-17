const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {     
    // writable: false,                   
    enumerable: false,                                      //  <-- IMP
    // configurable: false
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {  // here Object.entries(chai) is a must to iterate
    if (typeof value !== 'function') {            // only chai will not work
        console.log(`${key} : ${value}`); // because above name property is given enumerable: false
    }                                     // So here only price and isAvailable will be printed  
}                       // here the above condition clarifies that o/p should be key : value only 