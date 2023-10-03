    // for each

const coding = ["js", "ruby", "java", "python", "cpp"]

// for each loop takes callback function(dosen't have function name) as a parameter

coding.forEach( function (val) {         
    // console.log(val);
} )

coding.forEach( (item) => {          // using arrow function
    // console.log(item);
} )

function printMe(item) {
    // console.log(item);
}

coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {      // for each has the access of item, index & array.
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
                                                            // IMP
myCoding.forEach( (item) => {        // like this we can access any value from the array of objects
    console.log(item.languageName);     // when values come from databases it is mostly in the form 
} )                                     // of arrays and every value is an object. 
                                    
                                         