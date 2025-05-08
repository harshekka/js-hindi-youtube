const accountId = 144553
let accountEmail = "harsh@google.com"
var accountPassword = "12345"
accountCity = "Ranchi"
let accountState;

// accountId = 2 // not allowed

accountEmail = "ekka@google.com"
accountPassword = "212124"
accountCity = "Gumla"

console.log(accountId);

/* 
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
