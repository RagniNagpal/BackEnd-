const fs=require("fs");

fs.readFile("../users.txt","utf-8",function(err,data1){
  if(err) return console.log(err);
  let users=JSON.parse(data1);
  console.log(data1);

fs.readFile("../people.txt","utf-8",function(err,data2){
  if(err) return console.log(err);
   let people=JSON.parse(data2);
  console.log(data2);

  // let combine=users.concat(people);
  let combined= [...users,...people];
fs.writeFile("../result.txt",JSON.stringify(combined),function(err,data){
  if(err) return console.log(err);
  console.log("Done");
})
})
})