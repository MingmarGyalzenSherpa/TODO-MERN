const Todo = require("../model/Todo");

//Create
exports.addTodo = async (req, res) => {
  const { task, completed } = req.body;
  try {
    const todo = await Todo.create({ task, completed }); //create and save
    res.status(200).json({ message: "Task Successfully Added", data: todo });
  } catch (error) {
    res.status(400).json({ message: "Couldn't add task" });
  }
};


//Read
exports.readTodo = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({ data: todos });
  } catch (error) {
    res.status(400).json({ message: "Error getting todos" });
  }
};

//Update
exports.editTodo = async (req, res) => {
  const id = req.params.id;
  const { task, completed = false } = req.body;
  try {
    const todo = await Todo.findByIdAndUpdate(
      id,
      { task, completed },
      { returnDocument: "after" }
    );
    res.status(200).json({ message: "Successfully updated", data: todo });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

//delete
exports.deleteTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findByIdAndDelete(id);
    res.status(200).json({ message: "Successfully deleted" });
  } catch (error) {
    res.status(400).json({ error });
  }
};
