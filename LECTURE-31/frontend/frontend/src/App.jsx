import React, { useState, useEffect ,useRef} from "react";


function App(){
  //useEffect=> hook to do side effect in react
  //mounting, unmounting and updating phase

  let [ws,setWs]=useState(null) // to craete state variable
  let inputRef=useRef() //store any dom element reference, and it is diff from useState becoz it doesnt trigger rerendering of a component(imp) usestate-> component dobara chalega ......useRef=> dobara nhi chalega 
  useEffect(()=>{
    const socket = new WebSocket("ws://localhost:8888");
    socket.onmessage = ((e) => {
      console.log(e.data);
});

    setWs(socket);
  },[])

  function sendMessage(){
    let message=inputRef.current.value
    // ws.send("ping");
    ws.send(message);
    inputRef.current.value=""
  }
    // wss.onopen = () => {
    //   console.log("Connected to WebSocket server");
    //   wss.send("pinggggggg"); // send test message
    // };

  return (
    <>
      <h1>Ping pong</h1>
      <input ref={inputRef} type="text" />
      <button onClick={sendMessage}>Send</button>
    </>
  )
}

export default App
