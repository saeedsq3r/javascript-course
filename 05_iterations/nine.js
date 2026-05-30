// reduce

const arr1 = [1,2,3]

// const initial_value = 0 // or this
// const sum_with_initial = arr1.reduce( function (accumulator, current_value) { 
//     console.log(`acc: ${accumulator} and currval: ${current_value}`);
    
//     return accumulator + current_value
// },0 )// or this

// console.log(sum_with_initial);

// const my_total = arr1.reduce( (acc, currval) => acc + currval ,0)

// console.log(my_total);


const shopping_cart = [
    {
        item_name: "js course",
        price: 2999
    },
    {
        item_name: "python course",
        price: 999
    },
    {
        item_name: "mobile dev course",
        price: 5999
    },
    {
        item_name: "data science course",
        price: 12999
    },
    {
        item_name: "Artificial intiligence course",
        price: 1999
    },
    {
        item_name: "R course",
        price: 599
    }
];


const my_total = shopping_cart.reduce( (acc, item) => acc + item.price, 0)

console.log(my_total);
