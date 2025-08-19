function m1(req,res,next){
  console.log("running middleware 1...")
  req.userId="4"
  return next()
  console.log("After next 1 will run");
}

function m2(req,res,next){
  console.log("running middleware 2...")
  console.log(req.userId);
  req.isAdmin=true;
  return next()
  console.log("After next 2 will run");
}


module.exports.m1=m1;
module.exports.m2=m2;