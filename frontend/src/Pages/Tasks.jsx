import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Task.css";
import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";

const Task = ({ theme }) => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task A", priority: "High", dueDate: "2025-02-25", status: "TODO" },
    { id: 2, name: "Task B", priority: "Medium", dueDate: "2025-02-28", status: "TODO" },
    { id: 3, name: "Task C", priority: "Low", dueDate: "2025-03-01", status: "INPROGRESS" },
    { id: 4, name: "Task D", priority: "High", dueDate: "2025-02-20", status: "COMPLETED" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (status) => {
    setFilter(status);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter(
    (task) =>
      (filter === "All" || task.status === filter) &&
      task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`task-container ${theme === "dark" ? "dark" : ""}`}>
      <div className="task-header">
        <h2>Task Management</h2>
        <div className="task-controls">
          <div className="search-bar">
            <FaSearch className="icon" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="filter-dropdown">
            <select value={filter} onChange={(e) => handleFilter(e.target.value)}>
              <option value="All">All</option>
              <option value="TODO">TODO</option>
              <option value="INPROGRESS">INPROGRESS</option>
              <option value="COMPLETED">COMPLETED</option>
            </select>
          </div>
        </div>
      </div>

      <div className="task-board">
        <div className="task-column">
          <h3>TODO</h3>
          {filteredTasks
            .filter((task) => task.status === "TODO")
            .map((task) => (
              <div className="task-card" key={task.id}>
                <h4>{task.name}</h4>
                <p>Priority: {task.priority}</p>
                <p>Due: {task.dueDate}</p>
                <div className="task-actions">
                  <button className="edit-btn">
                    <FaEdit />
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(task.id)}>
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className="task-column">
          <h3>INPROGRESS</h3>
          {filteredTasks
            .filter((task) => task.status === "INPROGRESS")
            .map((task) => (
              <div className="task-card" key={task.id}>
                <h4>{task.name}</h4>
                <p>Priority: {task.priority}</p>
                <p>Due: {task.dueDate}</p>
                <div className="task-actions">
                  <button className="edit-btn">
                    <FaEdit />
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(task.id)}>
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className="task-column">
          <h3>COMPLETED</h3>
          {filteredTasks
            .filter((task) => task.status === "COMPLETED")
            .map((task) => (
              <div className="task-card" key={task.id}>
                <h4>{task.name}</h4>
                <p>Priority: {task.priority}</p>
                <p>Due: {task.dueDate}</p>
                <div className="task-actions">
                  <button className="edit-btn">
                    <FaEdit />
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(task.id)}>
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Task;