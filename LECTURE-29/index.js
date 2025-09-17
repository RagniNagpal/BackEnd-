const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient()

async function addUser(name, email, password) {
  let newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password
    }
  });
  return newUser; 
}
// addUser("vanshika","van@gmail.com","25")
// .then(()=>{console.log("user3 added successfully")})

async function addTweet(content,userId){
  await prisma.tweet.create({
    data:{
      content:content,
      userId:Number(userId)
    }
  })
}
// addTweet("my eleventh tweet", "11")
// .then(()=>console.log("tweet is created"))



//find all tweet by user whose id=1;
async function getuserTweet(userId){
  let tweets=await prisma.tweet.findMany({
    where:{
      userId: Number(userId) 
    }
  })
  return tweets;
}
// getuserTweet("1")
// .then((data)=>console.log(data))


// user whose id is 1 wants to update his tweet -->tweet id is 1

//user id for checking
async function updateTweet(tweetid,userId,content){
  let tweet=await prisma.tweet.findUnique({
    where:{
      id:Number(tweetid),
    }
  })
  if(!tweet){
    return "tweet doesnt exist"
  }
  if(tweet.userId!=Number(userId)){
    return "usernot cannot update this tweet"
  }
  await prisma.tweet.update({
    where:{
      id:Number(tweetid)
    },
    data:{
      content: content, 
    }
  })
}
// updateTweet("1","1","update tweet")
// .then(()=>console.log("tweet is updated"));


//deleting tweet of userid 1
async function deleteTweet(tweetid,userId){
  let tweet=await prisma.tweet.findUnique({
    where:{
      id:Number(tweetid),
    }
  })
  if(!tweet){
    return "tweet doesnt exist------"
  }
  if(tweet.userId!=Number(userId)){
    return "usernot cannot update this tweet beacuse its deleted"
  }
  await prisma.tweet.delete({
    where:{
      id:Number(tweetid),
    }
  })
}
// deleteTweet("1","1")
// .then(()=>console.log("tweet is deleted"));

// const express=require('express')
// const app=express()
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// const {addUser,getUsers,getUser,updateUser,deleteUser,addTweet,findTweet,updateTweet,deleteTweet}=require("./Controller/index.js")
// app.post('/addUser',addUser);
// app.get('/getUsers',getUsers);
// app.get('/getUser/:id',getUser);
// app.put("/updateUser/:id",updateUser);
// app.delete("/deleteUser/:id",deleteUser);
// app.post('/addTweet',addTweet);
// app.get("/findTweet/:userId",findTweet);
// app.put("/updateTweet",updateTweet);
// app.delete("/deleteTweet",deleteTweet);
// app.listen(3000,()=>{
//     console.log("Server started")
// })


//create a function to delete user byid;


// app.delete("/deleteUser/:id",deleteUser);
// hamko pahele sare tweets delete karne padenge phir user delete hoga=> foreign key constraint
async function deleteUser(id){
  let user=await prisma.user.delete({
    where:{
      id:Number(id),
    }
  })
  return user;
}
// deleteUser("1")
// .then((data)=>console.log(data))
// .catch(err=>console.log(err))

async function userData(){
  let data=await prisma.user.findMany({
    select:{
      id: true, 
      name:true,
      email:true
    },
  })
  return data;
}
// userData().then((data)=>console.log(data))
// .catch(err=>console.log(err));


async function usersWithTweets() {
  let data = await prisma.user.findMany({
    select: {
      name: true,
      email: true,
      tweet: {
        select: { content: true }
      }
    }
  })
  return data;
}
usersWithTweets()
.then ((data) => {
    console.log(JSON.stringify(data, null, 2));
})
  

