const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPost = new Schema({
  title: String,
  body: String,
  date: Date,
  // Blog to user (many to one)
  userId : {
    type : mongoose.Types.ObjectId,
    ref: "Users"
  },
    like: {
  type: Boolean,
  default: false
}
});

module.exports = mongoose.model('Blog', BlogPost);