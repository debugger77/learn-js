const User = {
    _email: 'h@hr.com',             // underscore(_) basically refers to private member.
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);