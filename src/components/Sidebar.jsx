import React from "react";
import { FaChartBar, FaBell, FaComments, FaUserCog } from "react-icons/fa";

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-header">Admin Panel</h2>
      <ul className="nav-list">
        <li
          className={`nav-item ${activeSection === "admin" ? "active" : ""}`}
          onClick={() => setActiveSection("admin")}
        >
          <FaChartBar className="nav-icon" /> Admin Overview
        </li>
        <li
          className={`nav-item ${activeSection === "sos" ? "active" : ""}`}
          onClick={() => setActiveSection("sos")}
        >
          <FaBell className="nav-icon" /> SOS Alerts
        </li>
        <li
          className={`nav-item ${activeSection === "community" ? "active" : ""}`}
          onClick={() => setActiveSection("community")}
        >
          <FaComments className="nav-icon" /> Community Reports
        </li>
        <li
          className={`nav-item ${activeSection === "users" ? "active" : ""}`}
          onClick={() => setActiveSection("users")}
        >
          <FaUserCog className="nav-icon" /> Users Management
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
