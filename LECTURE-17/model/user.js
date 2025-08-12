const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email : String,
  username:{
    type:String,
    required: true 
  },
  password:String,
  date:Date,
  //one to many
  blogs:[{
    type:mongoose.Types.ObjectId,
     ref: "Blog" 
  }]
});

module.exports = mongoose.model('User', userSchema);
