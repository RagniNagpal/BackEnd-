const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient()

// create
async function addUser(email,name,password){
  await prisma.user.create({
    data:{
      email:email,
      name:name,
      password:password
    }
  })
}
// addUser("ragn@gmail.com","R","1234")
// .then(()=>{
//   console.log("user added successfully");
// })

// All user
async function getAllUser(){
  let allUser=await prisma.user.findMany();
  return allUser;
}
getAllUser().then((data)=>{
  console.log(data);
});

// Update
async function updateUser(email,newName){
  await prisma.user.update({
    where:{ email:email },
    data:{ name:newName }
  })
}
// updateUser("ragn@gmail.com","Ragnar")
// .then(()=>{
//   console.log("User updated successfully");
// })

// delete
async function deleteUser(email){
  await prisma.user.delete({
    where:{ email:email }
  })
}
// deleteUser("ragn@gmail.com")
// .then(()=>{
//   console.log("User deleted successfully");
// })



// delete all
async function deleteAllUsers(){
  let result = await prisma.user.deleteMany({})
  return result;
}
// deleteAllUsers()
// .then((data)=>{
//   console.log("All users deleted, count:",data.count);
// })


