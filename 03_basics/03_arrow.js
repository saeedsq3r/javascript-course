const user = {
    username: "saeed",
    price: 999,
    welcome_message: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }
}

// user.welcome_message()
// user.username = "maaz"
// user.welcome_message()

// console.log(this);


// function chai(){
//     let username = 'saeed'
//     console.log(this.username);
    
// }

// chai()



// const chai = function () {
//     let username = 'saeed'
//     console.log(this.username);
    
// }
// chai()


const chai = () => {
    let username = 'saeed'
    console.log(this);
    
}
// chai()

// explicit return
// const addtow = (num1, num2) => {
//     return num1 + num2
// }


// emplicit return
// const addtow = (num1, num2) =>  num1 + num2


// const addtow = (num1, num2) =>  (num1 + num2)


const addtow = (num1, num2) =>  ({username: 'saeed'})



console.log(addtow(2, 4))


const my_arr = [2, 5, 3, 7, 8]

// my_arr.forEach()
