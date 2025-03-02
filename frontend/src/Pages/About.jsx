import React from "react";
import { FaInfoCircle, FaCheckCircle, FaEnvelope, FaGithub } from "react-icons/fa";
import "../styles/About.css";

const About = ({ theme }) => {
  return (
    <div className={`about-container ${theme === "dark" ? "dark" : ""}`}>
      <div className="about-header">
        <h2>About</h2>
      </div>

      <div className="about-content">
        {/* Overview Card */}
        <div className="about-card">
          <h3><FaInfoCircle /> Overview</h3>
          <p>
            Welcome to the Project Management Tool, a modern web application built with React to help you manage your projects and tasks efficiently. This tool is designed to streamline your workflow, offering features like task tracking, project overviews, detailed reports, and customizable settings.
          </p>
          <p>
            Version: 1.0.0 | Released: February 2025
          </p>
        </div>

        {/* Features Card */}
        <div className="about-card">
          <h3><FaCheckCircle /> Key Features</h3>
          <ul>
            <li>Kanban-style task management with draggable columns</li>
            <li>Real-time project and task tracking</li>
            <li>Interactive reports with charts</li>
            <li>Customizable themes and notifications</li>
            <li>User-friendly interface with responsive design</li>
          </ul>
        </div>

        {/* Contact Card */}
        <div className="about-card">
          <h3><FaEnvelope /> Contact Us</h3>
          <p>
            For support or inquiries, feel free to reach out:
          </p>
          <p>Email: <a href="mailto:support@projectmanagementtool.com">support@projectmanagementtool.com</a></p>
          <p>
            GitHub: <a href="https://github.com/yourusername/project-management-tool" target="_blank" rel="noopener noreferrer">github.com/yourusername/project-management-tool</a>
          </p>
          <p>Follow us for updates!</p>
        </div>
      </div>
    </div>
  );
};

export default About;