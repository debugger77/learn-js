// Immediately Invoked Function Expressions (IIFE)
// -> IIFE is used to remove the global scope pollution i.e. variables, etc.


    // named IIFE
(function chai() {               // iife functions are written inside ()
    console.log(`DB CONNECTED`);
}) ();                  // whenever we have to write 2 iife's then semi-colon is must after 1st iife


    // simple iife as no name is present
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} ) ('harshil')