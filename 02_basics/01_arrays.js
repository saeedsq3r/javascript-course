// array

const my_arr = [0, 1, 2, 3, 4, 5]

const my_heroes = ['ali','umar']

const my_arr2 = new Array(1, 2, 3, 4)

// console.log(my_arr[0])

// Array methods
// my_arr.push(6)
// my_arr.push(7)
// my_arr.pop()


// my_arr.unshift(9)
// my_arr.shift()

// console.log(my_arr.includes(9));
// console.log(my_arr.indexOf(3));

// const new_arr = my_arr.join()



// console.log(my_arr)
// console.log(typeof new_arr)
// console.log(new_arr)


// slice, splice

console.log("A ", my_arr);

const my_arr1 = my_arr.slice(1, 3)

console.log(my_arr1);

console.log("B ", my_arr);

const my_arr3 = my_arr.splice(1, 3)

console.log("C ",my_arr);

console.log(my_arr3);




// interview question 
// array copy operation create shallow copies.
// A shallow copy of an object is acopy whose propteries share the same reference points.
// Deep copy do not share the same reference point.

// diffrence between slice and splice.