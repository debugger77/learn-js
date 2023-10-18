class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get email() {                         // In getters & setters variable name should be different
        return this._email.toUpperCase()  // than the variable name used inside the constructor.
    }

    set email(value) {                   // setter never returns
        this._email = value
    }

    get password() {
        return `${this._password}harshil`
    }

    set password(value) {
        this._password = value
    }
}

const harshil = new User("h@harshil.ai", "abc")
console.log(harshil.password);