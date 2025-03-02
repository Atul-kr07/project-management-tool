import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Project Management</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
      
      </ul>
    </div>
  );
};

export default Sidebar;
