const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient()

async function addUser(name, email, password) {
  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password
    }
  });
  return newUser; 
}
// addUser("ragniii","rag@gmail.com","12")
// .then(()=>{console.log("user added successfully")})

async function addTweet(content,userId){
  await prisma.tweet.create({
    data:{
      content:content,
      userId:userId
    }
  })
}
// addTweet("my first tweet",1)
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
deleteTweet("1","1")
.then(()=>console.log("tweet is deleted"));