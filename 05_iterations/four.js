    // for in
    
const myObject = {              // Objects are iterable using for in loop
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);      // if we use only key here we get the keys else using 
}                                          // programming[keys] we get values.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {        // maps are not iterable using for in loop but objects are.
    console.log(key);
}