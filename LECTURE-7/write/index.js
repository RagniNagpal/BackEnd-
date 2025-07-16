let users=[
  {
    name:"Ragni",
    age:"20",
    address:"Ambala"
  },
  {
     name:"Vamika",
    age:"50",
    address:"Kaithal"
  }
]

let people=[
  {
    name:"Vanshika",
    age:"20",
    course:"CSE"
  },
  {
   name:"Chirag",
   age:"18",
   course:"CSE"
  }
]
//agar users likhenge users.toString ki jagah tabh nhi chalega error aaega, users.toString  ye karenge to op nhi aaega isleye json
//json mei key, value dono strings hoti h to ham vice versa strings to object kar sakte h par to strings vale mei ham nhi karsakte 
const fs=require("fs");
fs.writeFile("../users.txt",JSON.stringify(users),function(err){
  if(err) return console.log(err);
  console.log("Users written!");
})

fs.writeFile("../people.txt",JSON.stringify(people),function(err){
  if(err) return console.log(err);
  console.log("People Info!!");
})


