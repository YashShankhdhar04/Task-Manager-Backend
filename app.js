//connecting express
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

const connectDB = require("./db/connect"); //connecting database

//connecting dotenv
require("dotenv").config();

//middlewares
app.use(express.static("./public"));
app.use(express.json());

//routes
// app.get("/hello", (req, res) => {
//   res.send("Task Manager App");
// });

app.use("/api/v1/tasks", tasks);
//routes

// Port Setup
// const port=3000;
// app.listen(port,console.log(`Server is on ${port}...`))
//Port Setup Done

// First - Connecting Database -> Port Setup
// creating an asynchronous function

const port = 3000;
const start = async () => {
  try {
    // using MONGO_URI from dotenv
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is on port  ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
//calling start
