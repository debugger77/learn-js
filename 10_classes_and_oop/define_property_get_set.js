function User(email, password) {
    this._email = email;                    
    this._password = password

    Object.defineProperty(this, 'email', {    // function is a function as well as an object.
        get: function() {                     // defineProperty takes 3 parameters 1st is always this
            return this._email.toUpperCase()
        },
        set: function(value) {
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const js = new User("js@js.com", "js")
console.log(js.email);
console.log(js.password);