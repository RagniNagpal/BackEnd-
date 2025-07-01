const fs=require("fs");
console.log("start");
setTimeout(()=>{
  console.log("time callback")
},0)
setImmediate(()=>{
  console.log("set immediate callback")
})
fs.readFile("demp.txt",(data)=>{
  console.log("poll phase callback")
  setTimeout(()=>{
    console.log("timer 2")
  },0)
  setImmediate(()=>{
    console.log("immediate 2")
  })
})
console.log("end")
//diff setTime out expire vale mei run hota h
// set immediate I/O phase ke baad run hota h 
//order cant be decided

// Phase Name	What happens here
// Timers Phase	Executes setTimeout() and setInterval()
// Pending Callbacks	System-level callbacks (rare)
// Poll Phase	Read I/O events like fs.readFile
// Check Phase	Executes setImmediate()
// Close Callbacks	Like socket.on('close')

