const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

const my_nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const new_nums = my_nums.filter( (num) => num > 4 )
// const new_nums = my_nums.filter( (num) => {
//     return num > 4
// } )

// console.log(new_nums);

// const new_nums = []

// my_nums.forEach( (num) => {
//     if (num > 4) {
//         new_nums.push(num)
        
//     }``
// })

// console.log(new_nums);


const books = [
    {
        titile: "Book One",
        genre: "Fiction",
        publish: 1981,
        adition: 2004
    },
    {
        titile: "Book Two",
        genre: "Non-Fiction",
        publish: 1999,
        adition: 2007
    },
    {
        titile: "Book Three",
        genre: "History",
        publish: 1997,
        adition: 2008
    },
    {
        titile: "Book Four",
        genre: "Non-Fiction",
        publish: 1989,
        adition: 2010
    },
    {
        titile: "Book Five",
        genre: "Science",
        publish: 2009,
        adition: 2014
    },
    {
        titile: "Book Six",
        genre: "Fiction",
        publish: 1987,
        adition: 2010
    },
    {
        titile: "Book Seven",
        genre: "History",
        publish: 1986,
        adition: 1996
    },
    {
        titile: "Book Eight",
        genre: "Science",
        publish: 2011,
        adition: 2016
    },
    {
        titile:"Book Nine",
        genre: "Non-Fiction",
        publish: 1981,
        adition: 1989
    }
];


// let user_books = books.filter( (bk) => (bk.genre === 'History')  )
user_books = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
} )

console.log(user_books);




// return is important to define scope {}
// call back function