import React, { useState } from 'react';

const tabs = ['ArETime', 'Pending', 'Approved', 'Rejected'];

const SOSAlertsSection = () => {
  const [activeTab, setActiveTab] = useState('ArETime');

  const renderContent = () => {
    switch (activeTab) {
      case 'ArETime':
        return <div>ArETime Alerts Content</div>;
      case 'Pending':
        return <div>Pending Alerts Content</div>;
      case 'Approved':
        return <div>Approved Alerts Content</div>;
      case 'Rejected':
        return <div>Rejected Alerts Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="sos-alerts-section card">
      <h2>SOS Alerts</h2>
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">{renderContent()}</div>
      <div className="map-section">
        <h4>Alert Map</h4>
        <div className="map-placeholder">[Map Placeholder with Markers]</div>
      </div>
      <div className="download-report">
        <button onClick={() => alert('Downloading Report...')}>Download Report</button>
      </div>
      <div className="zone-summary">
        <h4>Zone Summary</h4>
        <ul>
          <li>Safe: 50%</li>
          <li>Moderate: 30%</li>
          <li>Risky: 20%</li>
        </ul>
      </div>
    </div>
  );
};

export default SOSAlertsSection;
