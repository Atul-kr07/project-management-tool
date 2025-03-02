import React, { useState } from "react";
import { FaUser, FaBell, FaMoon, FaSun, FaCog } from "react-icons/fa";
import "../styles/Settings.css";

const Settings = ({ theme, setTheme }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme); // Update theme via prop from App.jsx
  };

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleEmailNotificationsToggle = () => {
    setEmailNotifications(!emailNotifications);
  };

  return (
    <div className={`settings-container ${theme === "dark" ? "dark" : ""}`}>
      <div className="settings-header">
        <h2>Settings</h2>
      </div>

      <div className="settings-content">
        {/* Profile Card */}
        <div className="settings-card">
          <h3><FaUser /> Profile</h3>
          <div className="setting-item">
            <label>Username:</label>
            <input type="text" defaultValue="User123" disabled />
          </div>
          <div className="setting-item">
            <label>Email:</label>
            <input type="email" defaultValue="user@example.com" disabled />
          </div>
          <button className="edit-profile-btn">Edit Profile</button>
        </div>

        {/* Theme Card */}
        <div className="settings-card">
          <h3><FaCog /> Theme</h3>
          <div className="setting-item">
            <label>Mode:</label>
            <button className="theme-toggle-btn" onClick={handleThemeToggle}>
              {theme === "light" ? <FaMoon /> : <FaSun />} {theme === "light" ? "Dark" : "Light"} Mode
            </button>
          </div>
        </div>

        {/* Notifications Card */}
        <div className="settings-card">
          <h3><FaBell /> Notifications</h3>
          <div className="setting-item">
            <label>Enable Notifications:</label>
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={handleNotificationsToggle}
            />
          </div>
          <div className="setting-item">
            <label>Email Notifications:</label>
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={handleEmailNotificationsToggle}
              disabled={!notificationsEnabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;