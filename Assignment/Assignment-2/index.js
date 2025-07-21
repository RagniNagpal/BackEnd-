// 2.  todo bnana h prompmpt terminal mai lena h .read concat write(stringify) 
//input title, description

const fs=require('fs');
let title = process.argv[2];
let description= process.argv[3];

let obj={title,description};
fs.readFile("assign2.txt","utf-8",function(err,data){
    let arr=[];
    if(!err&&data!=""){
        arr=JSON.parse(data);
    }
    arr.push(obj);
    fs.writeFile("assign2.txt",JSON.stringify(arr,null,2),function(err){
        if(err)return console.log(err)
        console.log("created file");
    })
})