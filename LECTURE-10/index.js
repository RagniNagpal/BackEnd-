const express = require('express');
const app=express();

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true })); //parse form data

// app.get('/',(req,res)=>{
//   // res.send("Om Namah Shivay");
//   res.sendFile(__dirname + "/index.html");
// })

// app.get("/about",(req,res)=>{
//   res.sendFile(__dirname + "/about.html");
// })

app.post("/add",(req,res)=>{


  // const {name,password}=req.body;
  // console.log(name , password);
 // res.send("Form submitted successfully!");


  let username=req.body.name;
  let password=req.body.password;
   res.json({ name: username, password: password });
  console.log("Form successfull")
})


app.listen(3000,function(err){
  console.log("server started");
})



