class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)                         // super keyword
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const js = new Teacher("js", "js@teacher.com", "123")
js.logMe()

const obj = new User("Harshil")
obj.logMe()                         // obj.addCourse() can't be accessed.

console.log(js instanceof User);        // instanceof           // answer -> true
console.log(js instanceof Teacher);                             // answer -> true