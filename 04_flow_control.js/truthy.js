// const user_email = "s@gmail.com"
// const user_email = ""
const user_email = []

if (user_email) {
    console.log("Got user email");
    
} else {
    console.log("Don't have user email");
    
}


// falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values: "0", 'false', " ", [], {}, function(){}
// remaining are truthy values

// if (user_email.length === 0) {
//     console.log("Array is empty");
    
// }

const empty_obj = {}

if (Object.keys(empty_obj).length === 0) {
    console.log("Object is empty");
    
}

// false == ''
// false == 0
// 0 == ''

// logical operator
// && , || , !

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);


// Terniary Operator

// condition ? true : false

const ice_tea_price = 100
ice_tea_price <= 80 ? console.log("less than 80") : console.log("greater than 80");


