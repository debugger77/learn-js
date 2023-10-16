class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){          // static keyword neither gives access to the child class Teacher
        return `123`            // nor to the class User.
    }
}

const harshil = new User("harshil")
// console.log(harshil.createId())          // error

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId());             // error