import React, { useEffect, useState } from "react";

const SOSAlertsSection = () => {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState("pending"); // Default to Pending view

  useEffect(() => {
    fetch("/api/sos-reports")
      .then((res) => res.json())
      .then((data) => setReports(data))
      .catch((error) => console.error("Error fetching reports:", error));
  }, []);

  const filteredReports = reports
    .filter((report) => report.status === view)
    .filter((report) =>
      report.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="sos-alerts-section card">
      <h2>SOS Alerts - {view.charAt(0).toUpperCase() + view.slice(1)}</h2>
      
      {/* Toggle Buttons */}
      <div className="view-buttons">
        <button
          className={view === "pending" ? "active" : ""}
          onClick={() => setView("pending")}
        >
          View Pending Alerts
        </button>
        <button
          className={view === "approved" ? "active" : ""}
          onClick={() => setView("approved")}
        >
          View Approved Alerts
        </button>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search reports..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Reports List */}
      <div className="reports-list">
        {filteredReports.map((report) => (
          <div
            key={report.id}
            className="report-item"
            onClick={() => setSelectedReport(report)}
          >
            <p>{report.title}</p>
            <small>{report.timestamp}</small>
          </div>
        ))}
      </div>

      {/* Detailed Report View */}
      {selectedReport && (
        <div className="report-details">
          <h2>Report Details</h2>
          <p><strong>Title:</strong> {selectedReport.title}</p>
          <p><strong>Description:</strong> {selectedReport.description}</p>
          <p><strong>Status:</strong> {selectedReport.status}</p>
          <p><strong>Timestamp:</strong> {selectedReport.timestamp}</p>
          <button onClick={() => setSelectedReport(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default SOSAlertsSection;
