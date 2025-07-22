// const fs=require('fs');
// const express = require('express');
// const app = express();

// app.use(express.json()); 

// app.get("/", (req, res) => {
//   res.send("Hlo");
// });

// app.post("/post", (req, res) => {
//    const { name, age , email} = req.body;
//    res.send("Data received: Name = " + name + ", Age = " + age + 'Email' + email);
//    console.log(req.body);
//    console.log(req.body.name);
//    console.log(name,age);
   
//    fs.writeFile('content.txt', name +  "\n" + age, function(err,data){
//       if(err) return console.log(err);
//       console.log("content written");
//    })
// });


// app.listen(3011, function () {
//   console.log("Server started on port 3011");
// });



// //registered
// const express = require('express');
// const fs = require('fs');
// const app = express();

// app.use(express.json());

// let content = ""; 

// app.post('/register', (req, res) => {
//   const { name, age, email } = req.body;

//   const newUser = `Name: ${name}, Age: ${age}, Email: ${email}\n`;
//   // content += newUser;

//   fs.readFile('users.txt','utf-8',function(err,data){
//     if(err) return console.log(err);
//     console.log("Registered");
 
//  let people=newUser + data;

//   fs.writeFile('users.txt', people, (err) => {
//     if (err) {
//        if(err) return console.log(err);
//     }
//     res.send(newUser); 
//   });
// });

//  })

// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });




// const express = require('express');
// const fs = require('fs');
// const app = express();

// app.use(express.json());

//    app.post('/hello', (req, res) => {
//     let allUser = [];
//     let name = req.body.name;
//     let password = req.body.password;
//     let user = {name, password};
// fs.readFile("hello.json", "utf-8", function(err, data) {
//     if(err) return res.json({
//         error:err
//     })
//     if(data && data.length>0) {
//         allUser = JSON.parse(data);
//     }
//     allUser.push(user);
//     fs.writeFile("hello.json", JSON.stringify(allUser), function(err) {
//         if(err) return res.send(err);
//         res.send("user data");
//     })
// })
// }) 
// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });




const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.post('/hello', (req, res) => {
  let allUser = [];
  let name = req.body.name;
  let password = req.body.password;
  let user = { name, password };

  fs.readFile("hello.json", "utf-8", function(err, data) {
    if (err && err.code !== 'ENOENT') {
      return res.json({ error: err });
    }

    if (data && data.length > 0) {
      allUser = JSON.parse(data);
    }

    allUser.push(user);

    fs.writeFile("hello.json", JSON.stringify(allUser, null, 2), function(err) {
      if (err) return res.send(err);
      res.send("user data saved");
    });
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});





