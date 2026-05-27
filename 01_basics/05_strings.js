const name = "saeed"
const repo_count = 50

// console.log(name + repo_count + " Value"); // outdated way of concatenating string and variables

console.log(`Hello my name is ${name} and my repo count is ${repo_count}`); 

const game_name = new String("saeed-hhc")

console.log(game_name[0]);
console.log(game_name.__proto__);

// console.log(game_name.length)
// console.log(game_name.toUpperCase())
// console.log(game_name.charAt(3))
// console.log(game_name.indexOf("h"))



console.log(game_name.indexOf("h"))

const newString = game_name.substring(0, 5)

console.log(newString);

const another_string = game_name.slice(-8, 5)
console.log(another_string);

const new_string1 = "         saeed     "
console.log(new_string1);
console.log(new_string1.trim());

const url = "https://saeed.com/saeed%20khan"
console.log(url.replace("%20","-"))

console.log(url.includes("saeed"))
console.log(url.includes("nnonon"))

const game_name1 = "saeed-hhc-2020"
console.log(game_name1.split("-"))
