const my_heros = ['ali','umar','osman']
const our_heros = ['muhammd','ibrahim','musa']

// my_heros.push(our_heros)

// console.log(my_heros);
// console.log(my_heros[3][1]);

// const all_heros = my_heros.concat(our_heros) // return new array
// console.log(all_heros);


// spread operator
const all_new_heros = [...my_heros, ...our_heros]

// console.log(all_new_heros);


const another_array = [1, 2, 3, [ 4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray("saeed"))
console.log(Array.from("saeed"))
console.log(Array.from({name:"saeed"})) // intresting case for interviews


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

// learn more about isarray, array.from, and array.of

