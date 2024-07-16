const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
//javascript is asynchronous prgramming language because koi bhi ek task na chale pr baaki task toh chalte rahenge
//compiler is faster
//interpreter line bhar line code krta hai,jaha error dikhe udhar hi ruk jayega
//compiler pure code ko read krta h ek saath

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
