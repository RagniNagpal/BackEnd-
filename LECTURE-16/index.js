const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Blogs = require('./model/blog');
const User = require('./model/user');

// BLOG ROUTES
app.post("/blogs", async (req, res) => {
  let { title, body } = req.body;
  let newBlog = new Blogs({
    title,
    body,
    date: Date.now()
  });
  await newBlog.save();
  res.json({
    success: true,
    data: newBlog,
    message: "Blog added successfully"
  });
});

app.get("/blogs", async (req, res) => {
  let allBlogs = await Blogs.find();
  res.json({
    success: true,
    data: allBlogs
  });
});

app.get("/blogs/:id", async (req, res) => {
  let { id } = req.params;
  let blog = await Blogs.findOne({ _id: id });
  res.json({
    success: true,
    data: blog
  });
});

// USER ROUTES
app.post("/users", async (req, res) => {
  let { email, username, password } = req.body;
  let newUser = new User({
    email,
    username,
    password
  });
  await newUser.save();
  res.json({
    success: true,
    data: newUser,
    message: "User added successfully"
  });
});

app.get("/users", async (req, res) => {
  let allUsers = await User.find();
  res.json({
    success: true,
    data: allUsers
  });
});

app.get("/users/:id", async (req, res) => {
  let { id } = req.params;
  let user = await User.findOne({ _id: id });
  res.json({
    success: true,
    data: user
  });
});

// MONGO CONNECTION
mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
  .then(() => console.log('Connected!'))
  .catch((err) => console.error('Connection error:', err));

app.listen(3022, () => {
  console.log('Server started on http://localhost:3022');
});
