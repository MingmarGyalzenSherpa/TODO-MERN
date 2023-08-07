const express = require("express");
const Todo = require("../model/Todo");
const todoRouter = express.Router();
const {
  addTodo,
  readTodo,
  editTodo,
  deleteTodo,
} = require("../controller/todoController");

//Create
todoRouter.post("/add_todo", addTodo);

//Read
todoRouter.get("/", readTodo);

//Delete
todoRouter.get("/delete_todo/:id", deleteTodo);

//Update
todoRouter.post("/edit_todo/:id", editTodo);
module.exports = todoRouter;
