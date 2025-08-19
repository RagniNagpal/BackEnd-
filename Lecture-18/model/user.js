const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserData = new Schema({
    email : String,
    username : String,
    password : String,
    // User to Blog (one to many)
    blogs : [{
        type : mongoose.Types.ObjectId,
        ref : "Blog"
    }]
});

module.exports = mongoose.model('Users', UserData);