function sum(a,b){
  if(!a || !b){
    return "all arguments must be passed"
  }
  else if(typeof(a)!="number" || typeof(b)!="number"){
    return "all arguments must be number"
  }
  return a+b;
}

// sum(2)
module.exports=sum;