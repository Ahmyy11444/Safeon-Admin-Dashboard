import React from "react";

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-header">Admin Panel</h2>
      <ul className="nav-list">
        <li
          className={`nav-item ${activeSection === "admin" ? "active" : ""}`}
          onClick={() => setActiveSection("admin")}
        >
          Admin Overview
        </li>
        <li
          className={`nav-item ${activeSection === "sos" ? "active" : ""}`}
          onClick={() => setActiveSection("sos")}
        >
          SOS Alerts
        </li>
        <li
          className={`nav-item ${activeSection === "community" ? "active" : ""}`}
          onClick={() => setActiveSection("community")}
        >
          Community Reports
        </li>
        <li
          className={`nav-item ${activeSection === "users" ? "active" : ""}`}
          onClick={() => setActiveSection("users")}
        >
          Users Management
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
