
// var c = 300

// global scope
let a = 300

// block scope
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    console.log("INNER: ", a);
    
}

// i local scope variable
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }



console.log(a);
// console.log(b);
// console.log(c);


// interview question
/* 
in the inspect the global scope is different from the node scope 
*/