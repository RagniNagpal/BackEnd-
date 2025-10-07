const {WebSocketServer} = require("ws");

const wss=new WebSocketServer({port:8888})
const { v4:uuidv4 }=require('uuid');
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

//hint
// let arr=[
//   {"room" : "1234",
//     "users":[]
//   }
// ]
// {
//   "1234"
// }

let rooms = new Map();



wss.on("connection", (socket) => {
  console.log("A new user connected");

  socket.on("message", function (message) {
    let parseMessage = JSON.parse(message);
    let { type, payload } = parseMessage;

    if (type === "join") {
      let { roomId } = payload;

      if (!rooms.get(roomId)) {
        rooms.set(roomId, new Set());
      }

      rooms.get(roomId).add(socket);
      console.log(rooms);
      socket.roomId = roomId;
      socket.send("added to room");
    }
     else if (type === "chat") {
      let { message } = payload; 
      let {roomId} = socket; 
      let allClients = rooms.get(roomId);
      allClients.forEach((s) => {
        s.send(message.toString());
      });
    }
    else if(type=="create"){
      let roomId=uuidv4();
      socket.send(JSON.stringify({
        type:"create",
        payload:{
          "roomId":roomId
        }
      }))
    }
  });
});
