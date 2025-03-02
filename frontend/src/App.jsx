import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Projects from "./Pages/Projects";
import Tasks from "./Pages/Tasks";
import Reports from "./Pages/Reports";
import Settings from "./Pages/Settings";
import About from "./Pages/About";
import Login from "./Pages/Login";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light"); // Dark Mode State

  // Toggle Dark/Light Mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div className={`d-flex app-container ${theme}`}>
        <Sidebar />
        <div className="main-content">
          <Navbar onThemeToggle={toggleTheme} />
          <Routes>
            <Route path="/" element={<Dashboard theme={theme} />} />
            <Route path="/projects" element={<Projects theme={theme} />} />
            <Route path="/tasks" element={<Tasks theme={theme} />} />
            <Route path="/reports" element={<Reports theme={theme} />} />
            <Route path="/settings" element={<Settings theme={theme} setTheme={setTheme} />} />
            <Route path="/about" element={<About theme={theme} />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;