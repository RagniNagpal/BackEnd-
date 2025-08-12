// let p=new Promise((resolve,reject)=>{
//   resolve("wada poora kiya ");
// })
// console.log(p)

// p.then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log(err)
// })

// let product = [
//   { name: 'samsung', amount: 70000, quantity: 10 },
//   { name: 'Iphone 16', amount: 100000, quantity: 0 }
// ];

// function buyProduct(product_name){
//   return new Promise((resolve,reject)=>{
//     let isProduct = product.filter((p) => p.name == product_name)[0];

//   if (!isProduct) {
//     reject("Product is not available");
//   }
//   else{
//     resolve(isProduct.amount);
//   }

//   });

// }

// buyProduct("samsung")
//   .then((amount)=>{
//     console.log("Found product");
//   })
//   .catch((err)=>{
//     console.log(err);
//   })

  

//new 7/14/2025
  let product = [
  { name: "Iphone 16", amount: 100000 },
  { name: "MacBook Pro", amount: 250000 }
];

let availableAmount = 800000;

// Convert buyProduct to return a Promise
function buyProduct(product_name) {
  return new Promise((resolve, reject) => {
    let foundProduct = product.find((p) => p.name === product_name);
    if (!foundProduct) {
      reject("Product is not available");
    } else {
      resolve(foundProduct.amount);
    }
  });
}

// Convert deductbankamt to return a Promise
function deductbankamt(amount) {
  return new Promise((resolve, reject) => {
    if (amount > availableAmount) {
      reject("Bank balance is low");
    } else {
      availableAmount -= amount;
      resolve("Amount deducted");
    }
  });
}

// Calling them with Promise chaining
buyProduct("Iphone 16")
  .then((amount) => {
    console.log("Product price:", amount);
    return deductbankamt(amount);
  })
  .then((message) => {
    console.log(message);
    console.log("Remaining bank amount:", availableAmount);
  })
  .catch((err) => {
    console.log("Error:", err);
  });

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
