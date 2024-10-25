const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todos = mongoose.model("Todos", todosSchema);

module.exports = Todos;
