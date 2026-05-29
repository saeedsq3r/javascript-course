// if

const is_user_logedin = true
const temperature = 41

// if (2 != 3){
//     console.log("executed");
    
// }

/*
if (temperature < 50){
    console.log("less than 50");
    
} else {
    console.log("temperature is greater than 50");
}
*/




// comparison operator
// <, > , <=, >=, ==, !=, ===, !==

/*
const score = 200

if (score > 100){
    const power = "fly"
    console.log(`User power: ${power}`);
    
}

console.log(`User power: ${power}`);
*/

const balance = 1000

// implicit scope
// if (balance > 500) console.log("test"),console.log("test2"); // worst way to write

/*
// nested if else statments
if (balance < 500){
    console.log("less than 500");
    
} else if (balance < 750){
    console.log("less than 750");

} else if (balance< 900){
    console.log("less than 900");

} else {
    console.log("less than 1200");

}
*/

const user_logedin = true
const debit_card = true
const loggedin_from_google = false
const loggedin_from_email = true

if (user_logedin && debit_card && 2 == 3) {
    console.log("Allow to buy course");
    
}

if (loggedin_from_google || loggedin_from_email) {
    console.log("User logged in");
    
}



