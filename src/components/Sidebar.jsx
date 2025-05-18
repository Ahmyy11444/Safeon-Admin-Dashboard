// src/components/Sidebar.jsx
import React from "react";
import { FaChartBar, FaBell, FaComments, FaUserCog, FaSignOutAlt } from "react-icons/fa";

const mainMenu = [
  { key: "admin", label: "Admin Overview", icon: <FaChartBar /> },
  {
    key: "sos",
    label: "SOS Alerts",
    icon: <FaBell />,
    children: [
      { key: "ArETime", label: "ArETime" },
      { key: "Pending", label: "Pending" },
      { key: "Approved", label: "Approved" },
      { key: "Rejected", label: "Rejected" }
    ]
  },
  {
    key: "community",
    label: "Community Reports",
    icon: <FaComments />,
    children: [
      { key: "Pending", label: "Pending" },
      { key: "Approved", label: "Approved" },
      { key: "Rejected", label: "Rejected" }
    ]
  },
  { key: "users", label: "Users Management", icon: <FaUserCog /> }
];

const Sidebar = ({
  activeSection,
  setActiveSection,
  activeSubTab,
  setActiveSubTab,
  onLogout
}) => {
  const handleMainClick = (item) => {
    setActiveSection(item.key);
    if (item.children) {
      setActiveSubTab(item.children[0].key);
    } else {
      setActiveSubTab(null);
    }
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-header">Admin Panel</h2>
      <ul className="nav-list">
        {mainMenu.map((item) => (
          <li key={item.key}>
            <div
              className={`nav-item ${activeSection === item.key ? "active" : ""}`}
              onClick={() => handleMainClick(item)}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </div>
            {activeSection === item.key && item.children && (
              <ul className="sub-nav-list">
                {item.children.map((child) => (
                  <li
                    key={child.key}
                    className={`sub-nav-item ${activeSubTab === child.key ? "active" : ""}`}
                    onClick={() => setActiveSubTab(child.key)}
                  >
                    {child.label}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="sidebar-footer">
        <button className="logout-button" onClick={onLogout}>
          <FaSignOutAlt className="logout-icon" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
