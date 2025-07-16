const fs=require("fs");

function read(filepath){
  return new Promise((resolve,reject)=>{
    fs.readFile(filepath,"utf-8",function(err,data){
      if(err) return reject(err);
      let users=JSON.parse(data);
      resolve(users)
    })
  })
}

function write(filepath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, JSON.stringify(data, null, 2), "utf-8", (err) => {
      if (err) return reject(err);
      resolve("✅ File written successfully");
    });
  });
}
module.exports = { read, write };