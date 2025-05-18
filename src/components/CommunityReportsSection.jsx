import React, { useState } from "react";

const tabs = ["Pending", "Approved", "Rejected"];

const sampleReports = {
  Pending: [
    { id: 1, content: "Report 1: Suspicious activity", timestamp: "2025-05-17 10:00 AM" },
    { id: 2, content: "Report 2: Unusual gathering", timestamp: "2025-05-17 10:30 AM" },
  ],
  Approved: [
    { id: 3, content: "Report 3: Noise complaint", timestamp: "2025-05-16 09:00 AM" },
  ],
  Rejected: [
    { id: 4, content: "Report 4: Incorrect data", timestamp: "2025-05-15 08:00 AM" },
  ],
};

const CommunityReportsSection = () => {
  const [activeTab, setActiveTab] = useState("Pending");
  const reports = sampleReports[activeTab] || [];

  return (
    <div className="community-reports-section card">
      <h2>Community Reports</h2>
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="reports-list">
        {reports.map((report) => (
          <div key={report.id} className="report-item">
            <p>{report.content}</p>
            <small>{report.timestamp}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityReportsSection;
