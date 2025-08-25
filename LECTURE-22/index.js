//Authorization(request valid) and Authentication(user valid)

const express=require("express");
const app=express();
const mongoose=require("mongoose");
const User=require("./model/users");
const jwt = require('jsonwebtoken');
function isLogin(req,res,next){
  if(!req.headers.authorization){
    return res.json({
      success:false,
      message:"No authorization key provided"
})
  }
  
  let token=req.headers.authorization
  console.log(token);
  if(!token){
    return res.json({
      success:false,
      messge:"Please login"
    })
  }
  let decode=jwt.verify(token,"secretkey");
  console.log(decode);
  if(!decode){
    return res.json({
      success:false,
      message:"Invalid token"
    })
  }
  req.user=decode.user;
next();
}

app.use(express.json());
app.use(express.urlencoded({extended:true}));

console.log(User)
app.get("/health",(req,res)=>{
  res.json({
    status:"ok",
    message:"server running okk"
  })
})
app.get("/home",isLogin,(req,res)=>{
  // console.log("checking data comes");
  console.log("user" + req.user.name);
  let username=req.user.name;
  res.json({
    success:true,
    message:"Welcome" + username
  })
})

//end-point for signup---adding new user into database
app.post("/api/users/signup",async(req,res)=>{
  try{
  //sabhse pahele email pahele se hai ya nhi 
  let {name,email,password}=req.body;
  let userExist=await User.findOne({email:email})
  if(userExist){
    return res.json({
      success:false,
      message:"User Already exist with this email please login"
    })
  }
  let newUser=new User({
    name:name,
    email:email,
    password:password
  })
  await newUser.save()
  res.json({
    success:true,
    message:"User registered successfully, please login to continue"
  })
}catch(error){
    console.log(error.message);
    res.json({
      error:{
        message:error.message
      }
    })
  }
})


app.post("/api/auth/login",async(req,res)=>{
  try{
  const {email,password}=req.body;
  let userExist=await User.findOne({email:email});
  if(!userExist){
    return res.json({
      success:false,
      message:"user does not exist signup"
    })
  }
  if(userExist.password!=password){
    return res.json({
      success:false,
      message:"Invalid password,try again"
    })
 
  }
  if(userExist.password==password){
    let  token=jwt.sign({"user":userExist},"secretkey")
    return res.json({
      success:true,
      message:"Login success",
      token:token
    })
  }
}
catch(error){
  console.log(error);
  res.json({
    error:{
      message:error.message
    }
  })
}
})

mongoose.connect("mongodb://127.0.0.1:27017/blogapp")
.then(()=>{
  console.log("db connected");
})
.catch((err)=>{
  console.log(err.message);
})
app.listen(3022,()=>{
  console.log("Server started");
})