// for each loop

const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach( function (item) {
//     // console.log(item);
    
// } )

// coding.forEach( (item) => {
//     console.log(item);
    
// } )


// function print_me(item){
//     console.log(item);
    
// }

// coding.forEach(print_me)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// } )


const my_coding = [
    {
        language_name: "javascript",
        language_file_name: "js"
    },
    {
        language_name: "java",
        language_file_name: "java"
    },
    {
        language_name: "python",
        language_file_name: "py"
    },
    {
        language_name: "c++",
        language_file_name: "cpp"
    }
]

my_coding.forEach( (item) => {
    console.log(item.language_name);
    
} )

