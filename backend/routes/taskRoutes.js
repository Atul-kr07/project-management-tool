const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const authenticateToken = require("../middleware/auth"); // Assuming you move authenticateToken to a separate file

// Middleware to authenticate token
router.use(authenticateToken);

// Get all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find().populate("projectId");
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a task
router.post("/", async (req, res) => {
  const task = new Task({
    name: req.body.name,
    priority: req.body.priority,
    dueDate: req.body.dueDate,
    status: req.body.status,
    projectId: req.body.projectId,
  });
  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a task
router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    task.name = req.body.name || task.name;
    task.priority = req.body.priority || task.priority;
    task.dueDate = req.body.dueDate || task.dueDate;
    task.status = req.body.status || task.status;
    task.projectId = req.body.projectId || task.projectId;
    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a task
router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    await task.remove();
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;