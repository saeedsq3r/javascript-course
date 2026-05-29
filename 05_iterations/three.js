// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world"

for (const greet of greetings) {
   // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('PAK',"Pakistan")
map.set('US',"united sates")
map.set('Fr',"France")

console.log(map);


for (const [key, value] of map) {
    console.log(key, ':-', value);
}


const my_obj = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of my_obj) {
//     console.log(key, ':-', value);
// } // not work on objects