const User = {
    _email: 'h@hr.com',             // underscore(_) basically refers to private member.
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value     // while setting variables can change but while getting it can't
    }                           // here email will also work
}

const tea = Object.create(User)
console.log(tea.email);