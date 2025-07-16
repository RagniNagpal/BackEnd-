// const fs=require('fs');

// fs.readFile("../users.txt","utf-8",function(err,data){
//   if(err) return console.log(err);
//   // console.log(data[0]);
//   let user=JSON.parse(data);
//   // console.log(user);
//   console.log(user[0]);
// })


//iooperation ka part
const fs=require("fs");
const { read, write } = require("../IOoperation/util");
async function readFile(filepath){
  let data=await read(filepath);
  console.log(data);
}

writeFile("../users.txt");
readFile("../users.txt");
