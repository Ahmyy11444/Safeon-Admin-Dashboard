import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import AdminSection from "./components/AdminSection";
import SOSAlertsSection from "./components/SOSAlertsSection";
import CommunityReportsSection from "./components/CommunityReportsSection";
import UsersManagementSection from "./components/UsersManagementSection";
import Zoney from "./components/Zoney";
import Notifications from "./components/Notifications";
import "./styles.css";

const Dashboard = ({ setIsLoggedIn }) => {
  // Default active category now uses "dashboard" as it appears in your sidebar.
  const [activeSection, setActiveSection] = useState("dashboard");
  const [activeSubTab, setActiveSubTab] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <AdminSection searchQuery={searchQuery} />;
      case "sos":
        return <SOSAlertsSection activeSubTab={activeSubTab} searchQuery={searchQuery} />;
      case "community":
        return <CommunityReportsSection activeSubTab={activeSubTab} searchQuery={searchQuery} />;
      case "zoney":
        return <Zoney searchQuery={searchQuery} />;
      case "users":
        return <UsersManagementSection searchQuery={searchQuery} />;
      case "notifications":
        return <Notifications searchQuery={searchQuery} />;
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
            {/* Profile pic positioned at top-right */}
            <img src="https://i.pravatar.cc/40" alt="Profile" className="profile-pic" />
          </div>
        </header>
        <div className="content-area">{renderSection()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
