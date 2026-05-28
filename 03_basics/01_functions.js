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


// console.log(login_user_message("saeed"))
// console.log(login_user_message(""))
// console.log(login_user_message())


function calculate_cart_price(val1, val2, ...num1){ // ... is known as rest operator and spread operator according situation
    return num1
}

// console.log(calculate_cart_price(200, 400, 500,2000))

const user = {
    user_name: 'saeed',
    price: 199
}

function handle_object(anyobject){
    console.log(`Username is ${anyobject.user_name} and price is ${anyobject.price}`);
    
}

handle_object(user)
handle_object({
    user_name: 'saeedkhan',
    price: 399
})

const my_new_arr = [200, 500, 100, 600]

function return_second_value(arr){
    return arr[0]
    
}

// console.log(return_second_value(my_new_arr));
console.log(return_second_value([2000, 400, 500, 600]));


