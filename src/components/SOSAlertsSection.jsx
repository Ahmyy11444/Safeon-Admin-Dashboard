import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const SOSAlertsSection = () => {
  const tabs = ["ArETime", "Pending", "Approved", "Rejected"];
  const [activeTab, setActiveTab] = useState("ArETime");

  const renderContent = () => {
    switch (activeTab) {
      case "ArETime":
        return <div>ArETime Alerts Content</div>;
      case "Pending":
        return <div>Pending Alerts Content</div>;
      case "Approved":
        return <div>Approved Alerts Content</div>;
      case "Rejected":
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
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">{renderContent()}</div>
      <div className="map-section">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>Alert Location</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="download-report">
        <button onClick={() => alert("Downloading Report...")}>
          Download Report
        </button>
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
