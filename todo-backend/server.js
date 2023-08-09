const express = require("express");
const todoRouter = require("./routes/todo.routes");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//middleware
app.use(express.json());

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.urlencoded({ extended: true }));

app.use("/todo", todoRouter);

//connecting to db thru mongoose
const connect = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/mingmar-todos");
  console.log("Connected Successfully!!");
};

connect()
  .then(() => {
    app.listen(8000, (req, res) => {
      console.log("Server has started!!");
    });
  })
  .catch((error) => {
    console.log("Connection failed");
  });
