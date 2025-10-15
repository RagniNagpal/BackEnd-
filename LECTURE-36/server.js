const express=require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const Queue = require('bull');
//naya queue create with name
let codeQueue=new Queue("code-quotient",{
  connection :{
    host:"localhost",
    port:6379,
  },
})

app.post("/api/submission",async function(req,res){
  let {qId,code,language} = req.body;
    //offload the job to message queue, so that a worker can do a task
    let result=await codeQueue.add("code-queue",{
      // qId:qId,
      // code:code,
      // language:language
      qId, code , language
    })
    // console.log(result);
    console.log(Job.id);
    console.log(Job.data);
})
res.json({
  // message:"check server console"
  submissionId:job.id
})

let worker = new Worker("code-queue", function(job){
  // console.log(job.data);
  let {qId,code,language}=job.data;
  //run code against all test cases and return the response
  setTimeout(()=>{
    console.log( {
    qId:qId,
    status: success,
    time:"4ms",
    beat:"top 10%"
  })
  },5000)
  
}, {
  connection: {
    host: "localhost",
    port: 6379,
  },
})

worker.onmessage("error",function(err){
  console.log(err)
})

app.listen(3000,function(){
  console.log("server started");
})