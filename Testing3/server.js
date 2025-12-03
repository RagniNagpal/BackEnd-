const express = require("express");
const User = require("./model/user.model");  
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/users/register", async (req, res) => {
  let { name, email, password } = req.body;

  let userExist = await User.findOne({ email });

  if (userExist) {
    return res.json({
      success: false,
      message: "user already exist",
    });
  }

  let newUser = await User.create({ name, email, password });

  res.json({
    success: true,
    message: "user registered successfully",
    data: newUser,
  });
});

module.exports = app;


