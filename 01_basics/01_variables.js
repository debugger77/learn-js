const accountId = 177883
let accountEmail = "harshil@google.com"
var accountPassword = "54321"
accountCity = "Kanpur"
let accountState;

// accountId = 2 // not allowed because it is declared constant

accountEmail = "h@h.com"
accountPassword = "321321"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])