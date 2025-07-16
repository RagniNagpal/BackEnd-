// write data in file using fs module,
// input data should be taken using terminal

const fs=require("fs");
let str="";
// Method 1 of insertion of data in file by loop 
for(let i=2;i<process.argv.length;i++){
    str+=process.argv[i]+" ";
}
fs.writeFile("../assign.txt",str,function(err,data){
    if(err)return console.log(err)
        console.log("File created with given str");
})