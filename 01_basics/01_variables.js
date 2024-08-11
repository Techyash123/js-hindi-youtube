const accountId = 144533 // cannot be changed
let accountEmail = "yash@google.com" 
var accountPassword = "12345"
accountCity = "ferozepur"
let accountState;
// accountId = 2 // not allowed

accountEmail = "yash@yash.com"
accountPassword = "21212121"
accountCity = "jalandhar"

console.log(accountId);

/*

prefer not to use var beacsue if issue in block scope and functional scope

*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

