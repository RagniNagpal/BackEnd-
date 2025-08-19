const express=require("express");
const { m1, m2 } = require("./middleware/firstmiddleware");
const app=express();
const {m3}=require("./middleware/pathlevel");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const userRouter=require("./routes/userRoutes")
//middleware will run in order
app.use(m1)
// app.use(m2)

app.use("/api/users",userRouter);

//jab ispar res aaega tabh m3 chalega aur kisimei nhi chalega

// upar vale application level m1,m3 running controller
//phir path
app.get("/health",m3,(req,res,next)=>{
  console.log("running controller function")
  // next()
  return res.json({
    status:"OK",
    message:"server running ok"
  })
  // console.log("after response");
})

app.use(m2);
app.get("/home",(req,res,next)=>{
  console.log("running home endpoint");
  res.json({
    success:true,
    message:"welcome to home page"
  })
})
// app.use(m2);

app.listen(3022,()=>{
  console.log("Server started");
})