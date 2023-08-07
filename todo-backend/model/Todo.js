const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  task: String,
  completed: Boolean,
});

module.exports = mongoose.model("Todo", schema);
