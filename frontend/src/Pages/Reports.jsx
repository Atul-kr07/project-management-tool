import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { FaSearch, FaFilter } from "react-icons/fa";
import "../styles/Reports.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Reports = ({ theme }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  // Sample data for reports
  const projectData = {
    labels: ["Completed", "In Progress", "Pending"],
    datasets: [
      {
        label: "Projects",
        data: [12, 8, 5],
        backgroundColor: theme === "dark" ? ["#66cc66", "#ffcc66", "#ff6666"] : ["#28a745", "#ffc107", "#dc3545"],
        borderColor: theme === "dark" ? "#444" : "#fff",
        borderWidth: 1,
      },
    ],
  };

  const taskData = {
    labels: ["High", "Medium", "Low"],
    datasets: [
      {
        data: [15, 10, 5],
        backgroundColor: theme === "dark" ? ["#ff6666", "#ffcc66", "#66cc66"] : ["#dc3545", "#ffc107", "#28a745"],
        borderColor: theme === "dark" ? "#444" : "#fff",
        borderWidth: 1,
      },
    ],
  };

  const summaryData = [
    { title: "Total Projects", value: 25 },
    { title: "Completed Projects", value: 12 },
    { title: "Active Tasks", value: 30 },
    { title: "Overdue Tasks", value: 3 },
  ];

  const filteredSummary = summaryData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (filter !== "All" && item.title.toLowerCase().includes(filter.toLowerCase()))
  );

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top", labels: { color: theme === "dark" ? "#fff" : "#333" } },
      title: { display: true, text: "Project Progress", color: theme === "dark" ? "#fff" : "#333" },
    },
  };

  return (
    <div className={`reports-container ${theme === "dark" ? "dark" : ""}`}>
      <div className="reports-header">
        <h2>Reports</h2>
        <div className="reports-controls">
          <div className="search-bar">
            <FaSearch className="icon" />
            <input
              type="text"
              placeholder="Search reports..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="filter-dropdown">
            <FaFilter className="icon" />
            <select value={filter} onChange={handleFilter}>
              <option value="All">All</option>
              <option value="Projects">Projects</option>
              <option value="Tasks">Tasks</option>
            </select>
          </div>
        </div>
      </div>

      <div className="reports-content">
        <div className="report-section">
          <h3>Project Status Overview</h3>
          <Bar data={projectData} options={options} />
        </div>

        <div className="report-section">
          <h3>Task Priority Distribution</h3>
          <Pie data={taskData} options={{ responsive: true, plugins: { legend: { position: "top", labels: { color: theme === "dark" ? "#fff" : "#333" } } } }} />
        </div>

        <div className="report-section summary-section">
          <h3>Summary Statistics</h3>
          <div className="summary-cards">
            {filteredSummary.map((item, index) => (
              <div className="summary-card" key={index}>
                <h4>{item.title}</h4>
                <p><strong>{item.value}</strong></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;