// without function

// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");


function say_my_name(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}


// say_my_name // reference
// say_my_name() // execution

// function add_two_numbers(num1, num2){
//     console.log(num1 + num2);
// }

// function add_two_numbers(num1, num2){
//     let result = num1 + num2
//     return result
//     console.log(("saeed")); // never execute because function didn't execute any thing after the return statement.
    
// }

// OR

function add_two_numbers(num1, num2){
    return num1 + num2
}



// add_two_numbers("a", 5) // bug

const result = add_two_numbers(3, 5)

// console.log("Result: ", result);

function login_user_message(user_name = "Muhammad"){
    if (!user_name){ // instead using 'user_name == undefined' we use the not operator
        console.log("Please enter a username");
        return
    }
    return `${user_name} just logged in`
}

// empty string and undefined as known as false values


console.log(login_user_message("saeed"))
// console.log(login_user_message(""))
// console.log(login_user_message())