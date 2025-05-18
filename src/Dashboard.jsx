import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import AdminSection from "./components/AdminSection";
import SOSAlertsSection from "./components/SOSAlertsSection";
import CommunityReportsSection from "./components/CommunityReportsSection";
import UsersManagementSection from "./components/UsersManagementSection";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("admin");

  const renderSection = () => {
    switch (activeSection) {
      case "admin":
        return <AdminSection />;
      case "sos":
        return <SOSAlertsSection />;
      case "community":
        return <CommunityReportsSection />;
      case "users":
        return <UsersManagementSection />;
      default:
        return <AdminSection />;
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="main-content">
        <header>
          <h1>Safe On Admin Dashboard</h1>
        </header>
        <div className="content-area">{renderSection()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
