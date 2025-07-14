let users = [
    {
        id : 1,
        name : "Vamika",
        age : 19
    },
    {
        id : 2,
        name : "Ragni",
        age : 20
    }
]

// function isAllowed(id) {
//     let user = users.filter ((u) => {
//         return u.id == id
//     })[0]
//     console.log(user);
//     if (!user) {
//         return console.log("No user found");
//     } if (user.age < 18) {
//         return console.log("Not eligible to vote");
//     } return console.log("Eligible to vote");
// }
// isAllowed(1);

// // isAllowed function pehle chalega kyuki ye sychronous hai, par hamen ise asynchronous banana hai taki larger data ke liye chal jaye
// console.log("Start");
// console.log("Hello");


//Promise
function isAllowed(id) {
    return new Promise ((resolve, reject) => {
         let user = users.filter ((u) => {
        return u.id == id
    })[0]
    console.log(user);
    if (!user) {
        return reject("No user found");
    } if (user.age < 18) {
        return reject("Not eligible to vote");
    } return resolve("Eligible to vote");
    })
}
isAllowed(1).then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})
console.log("hii")