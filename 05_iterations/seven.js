const my_nums = [1,2,3,4,5,6,7,8,9,10]

// const new_num = my_nums.map( (num) => {return num + 10} )

// console.log(new_num);


const new_nums = my_nums
                 .map( (num) => num * 10 )
                 .map( (num) => num + 1 )
                 .filter( (num) => num >= 40 )

console.log(new_nums);

