import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const SOSAlertsSection = ({ activeSubTab, searchQuery }) => {
  // Here you can add logic to filter alerts based on searchQuery.
  return (
    <div className="sos-alerts-section card">
      <h2>
        SOS Alerts - <span>{activeSubTab}</span>
      </h2>
      <div className="map-section">
        <MapContainer
          center={[30.0444, 31.2357]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[30.0444, 31.2357]}>
            <Popup>Alert Location in Cairo, Egypt</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default SOSAlertsSection;
