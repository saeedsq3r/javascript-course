// Immediatlely Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
    
}
) ();

( (name) => {
    // un named IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
})('saeed')



//() ---> function body () ----> execution paranthesis



// interview question
// global scope ki pollution si problem huti hy kai bar to us pollution ko hatani kaleay hum ny iife ka use kia.

