const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoutes");
const blogRoute = require("./routes/blogsRoutes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);

mongoose.connect("mongodb://127.0.0.1:27017/g26DB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const PORT = 3022;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
