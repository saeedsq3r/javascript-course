// Dates

let my_date = new Date()
// console.log(my_date.toString())
// console.log(my_date.toDateString())
// console.log(my_date.toLocaleString())
// console.log(typeof my_date);


// let my_date1 = new Date(2026, 0, 15, 5, 3)
// let my_date2 = new Date("2026-01-15")
// console.log(my_date1.toDateString());
// console.log(my_date1.toLocaleString());
// console.log(my_date2.toLocaleString());

let my_date3 = new Date("01-14-2026")
// console.log(my_date3.toLocaleString());


let my_time_stamp = Date.now()


// console.log(my_time_stamp);
// console.log(my_date3.getTime());
console.log(Math.floor(Date.now()/1000));

let new_date = new Date()

console.log(new_date.getMonth());
console.log(new_date.getDay());

new_date.toLocaleDateString('default', {
    weekday: "long"
})