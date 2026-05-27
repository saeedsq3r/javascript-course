// Primitive data types
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const score_value = 100.3

const is_login = false
const out_side_temp = null
let user_email; // undefined or asign undefined

const id = Symbol('123')
const another_id = Symbol('123')

// console.log(id === another_id);

const big_number = 132156465498798751216546549897541231321654987n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ['Ali','bu-Alisena','Umer']
let my_obj = {
    name:"saeed",
    age:18
}


const my_func = function(){
    console.log("Hello world");
    
}

// console.log(typeof big_number);
// console.log(typeof my_func);
// console.log(typeof heros);
// console.log(typeof id);


// is javascript is dynamic type language or static?
// static: those language in which we define the data types with declaration. (e.g: c++, Rust).
// dynamic: those language in which we can't define the data types with declaration
// these language are flexible. (e.g: python, javascript).

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive) --> copy of value, Heap (None-Primitive) ---> reference of value

let my_name = "saeed"

let another_name = my_name
another_name = "bu-Alisena"

// console.log(my_name);
// console.log(another_name);


let user1 = {
    email: "user@gmail.com",
    upi: "user@okaxis"
}

let user2 = user1

user2.email = "saeed@gmail.com"

// console.log(user1.email);
// console.log(user2.email);
