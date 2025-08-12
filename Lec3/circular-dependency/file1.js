const file2 = require("./File2.js"); 

function sum(a,b) {
    return a+b;
}
function sub(a,b) {
    return a-b;
}
// module.exports =  {
//     sum, sub
// }
 exports.sum = (a, b) => a + b;
 exports.sub = (a, b) => a - b;