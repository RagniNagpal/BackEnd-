const express = require('express');

const app = express();
app.get('/', (req, res) => {
    // res.send("Hello World");
    // res.send("<h1>OK</h1>")
    // hamen file send karne ke liye absolute path hi dena padega 
    // res.sendFile(__dirname + "/index.html");
    // res.json({
    //     name : "Ragni",
    //     age : 20
    // });
    res.end("hi");
})

//path variable 
//query paramaters
// app.get("/watch", (req, res) => {
//   let videoId = req.query.v;
//   let nid = req.query.n;
//   res.send("id got it: " + videoId + nid);
// });


//params
app.get("/watch/:v",(req,res)=>{
  console.log(req.params.v);
  res.send("got it!!!!");
})
app.get("/watch/:v/video/:n", (req, res) => {
  console.log("Video ID:", req.params.v);
  console.log("Nested ID:", req.params.n);
  res.send("got it!!!!");
});

app.listen(3012, function(){
    console.log("Server started");
});
