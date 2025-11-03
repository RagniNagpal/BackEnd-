let {createClient} = require("redis");
let client=createClient();

async function notify(){
  await client.PUBLISH("notify",JSON.stringify({event_id:1,message:"iphone back in stock"}))
}



//or await client.connect or .then or setTIMEOUT
setTimeout(()=>{
  notify()
},2000)

client.connect()
.then(()=>
  console.log("redis connected"))