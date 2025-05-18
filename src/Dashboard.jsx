// src/Dashboard.jsx
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import AdminSection from "./components/AdminSection";
import SOSAlertsSection from "./components/SOSAlertsSection";
import CommunityReportsSection from "./components/CommunityReportsSection";
import UsersManagementSection from "./components/UsersManagementSection";
import "./styles.css";

const Dashboard = ({ setIsLoggedIn }) => {
  const [activeSection, setActiveSection] = useState("admin");
  const [activeSubTab, setActiveSubTab] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const renderSection = () => {
    switch (activeSection) {
      case "admin":
        return <AdminSection searchQuery={searchQuery} />;
      case "sos":
        return <SOSAlertsSection activeSubTab={activeSubTab} searchQuery={searchQuery} />;
      case "community":
        return <CommunityReportsSection activeSubTab={activeSubTab} searchQuery={searchQuery} />;
      case "users":
        return <UsersManagementSection searchQuery={searchQuery} />;
      default:
        return <AdminSection />;
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        activeSubTab={activeSubTab}
        setActiveSubTab={setActiveSubTab}
        onLogout={() => setIsLoggedIn(false)}
      />
      <div className={`main-content ${activeSection}-layout`}>
        <header className="dashboard-header">
  <div className="header-left">
    <input
      type="text"
      placeholder="Search reports, cases, etc..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  </div>
  <div className="header-right">
    {/* Profile Picture in Top Right */}
    <img src="https://i.pravatar.cc/40" alt="Profile" className="profile-pic" />
  </div>
</header>
        <div className="content-area">{renderSection()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
