const express = require("express");
const todoRouter = require("./routes/todo.routes");
const authRouter = require("./routes/auth.routes");
const mongoose = require("mongoose");
const cors = require("cors");
const appConfig = require("./config/appConfig");
const app = express();

//middleware
app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use("/todo", todoRouter);

app.use("/auth", authRouter);

app.use("/", (req, res) => {
  res.json({ message: "Hello from todo-mern backend" });
});

//connecting to db thru mongoose
const connect = async () => {
  await mongoose.connect(appConfig.DB_URL);
  console.log("Connected Successfully!!");
};

connect()
  .then(() => {
    app.listen(appConfig.PORT, () => {
      console.log("Server has started!!");
    });
  })
  .catch((error) => {
    console.log("Connection failed");
  });

module.exports = app;
