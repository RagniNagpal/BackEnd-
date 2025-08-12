// function buyProduct(product_name,cb/*callback*/){
//     //do something asynchronous operation 
//     setTimeout(()=>{
//         //all the operations completed
//         console.log("all the I/O operations is completed and order details are written in data")
//         cb();
//     },0)
// }

// buyProduct("Ihpne 16",function(){
//     console.log("product is purchased")
// })


// let product=[{
//     name:"samsung",
//     amount:7000,
//     quantity:10
// },
// {
//     name:"iphone16",
//     amount:10000,
//     quantity:0
// }]
// function buyProduct(product_name,cb){
//     //do something asynchronous operation
//     let isProduct= product.filter((p)=> p.name==product_name)[0];
//     console.log(isProduct);
// }
// buyProduct("iphone16",function(){
//     console.log("product is purchased")
// })



let product = [
  { name: 'samsung', amount: 70000, quantity: 10 },
  { name: 'Iphone 16', amount: 100000, quantity: 0 }
];

function buyProduct(product_name, cb) {
  // Do something asynchronous operation
  let isProduct = product.filter((p) => p.name == product_name)[0];

  if (!isProduct) {
    cb("Product is not available", null);
    return;
  }

  cb(null, isProduct.amount);
}

let availableAmount=800000;
function deductbankamt(amount,cb){
  //do some transactions
  if(amount > availableAmount){
    return cb("bank balance is low", null)
  }
  else{
    availableAmount-=amount;
    cb(null,"amount deducted")
    cb(null,"amount deducted")
  }
}


buyProduct("Iphone 16", function (err, amount) {
  if (err) return console.log(err); 
  console.log(amount);
  deductbankamt(amount, function(err, message){
    if(err){
      return console.log(err);
    }
    console.log(message);
  })
});

//disadv of call back
//ek call back hell aur dursa
//inversion of control-> kisi aur ke paas handle hai
//agar galti se 2 baar call hogii to dikkat h -> no control jisne function ko bnaya h usse galti hui h hamse nhi .


//using
// const fs=require("fs");
// fs.readFile("filepath","utf-8",function(err,data){

// })





