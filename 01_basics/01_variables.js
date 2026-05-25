const account_id = 14455223
let account_email = "saeed@gmail.com"
var account_password = "12345"
account_city = "xy"
let account_state;

// account_id = 2 // not allowed


account_email = 'dawood@gmail.com'
account_password = '313131'
account_city = 'ab'


console.log(account_id);


/* 
Prefer not to use var
because of issue in block scope and functional scope.
*/



console.table([account_id, account_email, account_password, account_city,account_state])
