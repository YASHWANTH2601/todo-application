const Todos = require("../models/Todos");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { title } = req.body;
    // const date = Date.now();
    const todo = new Todos({ title });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    console.log(error);
  }
});
router.get("/", async (req, res) => {
  try {
    const todo = await Todos.find();
    res.status(201).json(todo);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
