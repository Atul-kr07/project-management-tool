const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  priority: { type: String, enum: ["High", "Medium", "Low"], required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ["TODO", "INPROGRESS", "COMPLETED"], default: "TODO" },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Task", taskSchema);