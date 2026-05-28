// const tinder_user = new Object()
const tinder_user = {}

tinder_user.id = "123abc"
tinder_user.name = "maaz"
tinder_user.is_logedin = false



//console.log(tinder_user);

const regular_user = {
    email: "some@gmail.com",
    full_name: {
        user_full_name: {
            first_name: "Muhammad",
            last_name: "saeed"
        }
    }
}


console.log(regular_user.full_name.user_full_name.first_name);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email
// console.log(users[1].email)

console.log(tinder_user);
console.log(Object.keys(tinder_user));
console.log(Object.values(tinder_user));
console.log(Object.entries(tinder_user));


console.log(tinder_user.hasOwnProperty('is_logedin'));



