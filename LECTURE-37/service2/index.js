let {createClient} = require("redis");
let client=createClient();

async function notify(){
  await client.SUBSCRIBE("notify",(message)=>{
    console.log(message)
  })
}



setTimeout(()=>{
  notify()
},2000)
notify()
client.connect()
.then(()=>
  console.log("redis connected"))