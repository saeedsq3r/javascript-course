
// var c = 300

// global scope
let a = 300

// block scope
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER: ", a);
    
}

// i local scope variable
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }



// console.log(a);
// console.log(b);
// console.log(c);


// interview question
/* 
in the inspect the global scope is different from the node scope 
*/


function one(){
    const username = "saeed"

    function two(){
        const website = "youtube"
        console.log(username); // child use the parrent property/variable
        
    }
    console.log(website); // error: parrent didn't use the child property/variable
    
    two()
}

// one()


if (true) {
    const username = 'saeed'
    if (username === "saeed") {
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);



// ++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}

addone(5)

// console.log(addone(5))


// addtow(5) // error: because of hoisting 

const addtow = function(num){
    return num + 2
}
