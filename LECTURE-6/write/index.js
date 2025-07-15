const fs=require("fs");

fs.writeFile("../demo.txt","g26 hello",function(err,data){
  if(err) return console.log(err);
  console.log("!success!!1");
})
fs.writeFile("../hiii.txt","g26 hello",function(err,data){
  if(err) return console.log(err);
  console.log("Ho gya ");
})
console.log("Chalo");
