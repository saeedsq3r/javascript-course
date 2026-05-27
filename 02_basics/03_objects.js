// singleton
// Object.create // construtor method through

// object leterals

const my_sym = Symbol("key1")



const js_user = {
    name: "saeed",
    "full name": "Muhammad saeed",
    [my_sym]: "mykey1",
    age: 18,
    location: "swat",
    email: "saeed@gmail.com",
    is_login: false,
    last_login_days: ["Monday", "Saturday"]
}

// console.log(js_user.email)
// console.log(js_user["email"])
// console.log(js_user["full name"])
// console.log(js_user[my_sym])


js_user.email = "saeed@chatgpt.com"
// Object.freeze(js_user)
js_user.email = "saeed@microsoft.com"

// console.log(js_user);

js_user.greeting = function(){
    console.log("Hello js user");
    
}

js_user.greetingtwo = function(){
    console.log(`Hello js user, ${this.name}`);
    
}


console.log(js_user.greeting())
console.log(js_user.greetingtwo())
// my_arr = ["s", "a"]
// my_arr[1]


// interviwes
// use symbole value in the object.