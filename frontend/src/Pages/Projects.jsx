import React, { useState } from "react";
import "../styles/Projects.css";
import { FaPlus, FaEdit, FaTrash, FaSearch, FaFilter } from "react-icons/fa";

const Projects = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "Project Alpha", status: "In Progress" },
    { id: 2, name: "Project Beta", status: "Completed" },
    { id: 3, name: "Project Gamma", status: "Pending" },
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
    setProjects(projects.filter((project) => project.id !== id));
  };

  const filteredProjects = projects.filter((project) =>
    (filter === "All" || project.status === filter) &&
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2>Projects</h2>
        <div className="projects-controls">
          <div className="search-bar">
            <FaSearch className="icon" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="filter-dropdown">
            <FaFilter className="icon" />
            <select onChange={(e) => handleFilter(e.target.value)}>
              <option value="All">All</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
          <button className="add-btn">
            <FaPlus /> Add Project
          </button>
        </div>
      </div>

      <div className="projects-list">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <h3>{project.name}</h3>
              <p>Status: <span className={project.status.toLowerCase()}>{project.status}</span></p>
              <div className="project-actions">
                <button className="edit-btn"><FaEdit /></button>
                <button className="delete-btn" onClick={() => handleDelete(project.id)}><FaTrash /></button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-projects">No projects found</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
