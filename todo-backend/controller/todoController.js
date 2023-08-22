const User = require("../model/User");
const jwt = require("jsonwebtoken");
const appConfig = require("../config/appConfig");

//create
exports.addTodo = async (req, res) => {
  const { user_id, task } = req.body;
  const user = await User.findById(user_id); //finding user
  const length = user.todos.push({ task }); //it returns the length of todos array
  await user.save();
  const todo = user.todos[length - 1]; //getting the latest todo
  res.status(200).json({ message: "Successfully added", todo });
};

//read
exports.readTodo = async (req, res) => {
  try {
    const { user_id } = req.body;
    const user = await User.findById(user_id);
    res.status(200).json({ todos: user.todos });
  } catch (error) {
    res.status(400).json({ message: "Error getting todos" });
  }
};

//edit
exports.editTodo = async (req, res) => {
  const todo_id = req.params.id;
  const { user_id, task } = req.body;
  try {
    const user = await User.findById(user_id);
    const todo = user.todos.id(todo_id);
    todo.task = task;
    await user.save();
    res.status(200).json({ message: "Successfully updated", data: todo });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

//delete
exports.deleteTodo = async (req, res) => {
  const { user_id } = req.body;
  const id = req.params.id;
  try {
    const user = await User.findById(user_id);
    user.todos.id(id).deleteOne();
    await user.save();
    res.status(200).json({ message: "Successfully deleted" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting todo" });
  }
};
