const { WebSocketServer } = require('ws');
//yha hmne port 8080 select kra haii websocketserver is port p chlega
const ws = new WebSocketServer({ port: 8086 });

//app.get("/",(req,res)=>{})
//event -handler
//on use toh hear the event 
ws.on("connection", function (socket) {
    console.log(socket);
    setInterval(()=>{
      socket.send("hii welcome" + Math.random())
    },500)
    socket.on('message',function message(data){
      // console.log('received: %s',data);
      console.log(data.toString());
    })
})