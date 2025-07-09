let p=new Promise((resolve,reject)=>{
  resolve("wada poora kiya ");
})
console.log(p)

p.then((data)=>{
  console.log(data)
})
.catch((err)=>{
  console.log(err)
})

let product = [
  { name: 'samsung', amount: 70000, quantity: 10 },
  { name: 'Iphone 16', amount: 100000, quantity: 0 }
];

function buyProduct(product_name){
  return new Promise((resolve,reject)=>{
    let isProduct = product.filter((p) => p.name == product_name)[0];

  if (!isProduct) {
    reject("Product is not available");
  }
  else{
    resolve(isProduct.amount);
  }

  });

}

buyProduct("samsung")
  .then((amount)=>{
    console.log("Found product");
  })
  .catch((err)=>{
    console.log(err);
  })