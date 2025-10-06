const {WebSocketServer} = require("ws");

const wss=new WebSocketServer({port:8888})

//ping pong

//request connect ke liye (socket) par msg aarha h jarha hai sabh user ka socket alag alaga hai
wss.on("connection",function(socket){
  console.log("User connected")
  socket.on("message",function(message){
    console.log("message received" + " " + message.toString())
    if (message.toString() === "ping") {
      socket.send("pong");
    }
    
  })
})


//broadcasting=> ek msg kisine bheja web socket par par web socket ne sabhko msg bhej diya

//ismei hamne sabhko bhej na hai to socket ki info save karliii phir loop lagakar msg bhjejdiya
// let allSocket=[]
// //request connect ke liye (socket) par msg aarha h jarha hai sabh user ka socket alag alaga hai
// wss.on("connection",function(socket){
//   console.log("User connected")
//   allSocket.push(socket);
//   socket.on("message",function(message){
//     console.log("message received" + " " + message.toString())
//     allSocket.forEach((s)=>{
//       s.send(message.toString())
//     })
    
//   })
// })

