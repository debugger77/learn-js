// object as a construtor

// const tinderUser = new Object()          //singleton object
const tinderUser = {}                       //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "harshil",
            lastname: "H"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

        //merging objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}                //spread operator
// console.log(obj3);

const users = [       //when values come from databases then it comes in the form of array of objects
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));           //data type is array for all these 3.
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//++++++++++++++ Object destructuring ++++++++++++++++++
const course = {
    coursename: "learn js",
    price: "1999",
    courseInstructor: "harshil"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "harshil",
//     "coursename": "learn js",
//     "price": "free"
// }

[
    {},
    {},
    {}
]