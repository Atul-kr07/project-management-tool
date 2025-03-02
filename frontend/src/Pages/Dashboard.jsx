import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { FaPlus, FaBell, FaUser, FaSearch, FaSun, FaMoon } from "react-icons/fa";
import "../styles/Dashboard.css";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Tasks Completed",
        data: [12, 19, 10, 15, 8],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div className={`dashboard-container ${darkMode ? "dark" : ""}`}>
      {/* Header Section */}
      <div className="dashboard-header">
        <h2>Project Management Tool</h2>
        <div className="dashboard-controls">
          {/* Search Bar Interaction */}
          <div className={`search-bar ${searchActive ? "active" : ""}`} onClick={() => setSearchActive(true)}>
            <FaSearch className="icon" />
            {searchActive && <input type="text" placeholder="Type to search..." autoFocus onBlur={() => setSearchActive(false)} />}
          </div>

          {/* Notification Icon Interaction */}
          <div className="icon-container">
            <FaBell className="icon" onClick={() => setShowNotifications(!showNotifications)} />
            {showNotifications && <div className="dropdown-menu">No new notifications</div>}
          </div>

          {/* Profile Icon Interaction */}
          <div className="icon-container">
            <FaUser className="icon" onClick={() => setShowProfileMenu(!showProfileMenu)} />
            {showProfileMenu && (
              <div className="dropdown-menu">
                <p>Profile</p>
                <p>Logout</p>
              </div>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <button className="toggle-mode" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <button className="action-btn"><FaPlus /> Add Task</button>
        <button className="action-btn"><FaPlus /> Add Project</button>
      </div>

      {/* Dashboard Sections */}
      <div className="dashboard-content">
        <div className="project-overview">
          <h3>Project Overview</h3>
          <p>Ongoing Projects: <strong>5</strong></p>
          <p>Completed Projects: <strong>12</strong></p>
          <p>Pending Tasks: <strong>7</strong></p>
        </div>

        <div className="task-list">
          <h3>Task List</h3>
          <ul>
            <li>Fix UI issues - <span className="pending">Pending</span></li>
            <li>Complete API Integration - <span className="completed">Completed</span></li>
            <li>Write Documentation - <span className="in-progress">In Progress</span></li>
          </ul>
        </div>

        <div className="graphical-reports">
          <h3>Progress Overview</h3>
          <Bar data={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
