// src/components/Zoney.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// IMPORTANT: If you're not seeing the default marker icons,
// you might need to set them up manually. For now, this example assumes
// that the default icons are loading correctly.

const Zoney = ({ reports }) => {
  // Dummy reports data: [latitude, longitude, "Report Title or Description"]
  const dummyReports = [
    [30.06, 31.22, "Report 1"],
    [30.07, 31.23, "Report 2"],
    [30.05, 31.21, "Report 3"],
    [30.08, 31.25, "Report 4"],
    [30.04, 31.20, "Report 5"],
    [30.09, 31.24, "Report 6"],
    [30.10, 31.26, "Report 7"],
  ];

  // Use your actual reports if available; otherwise fallback to dummy data.
  const reportPoints = reports && reports.length > 0 ? reports : dummyReports;

  return (
    <div className="zoney-section card">
      <h2>Reports Locations</h2>
      <MapContainer
        center={[30.06, 31.22]}
        zoom={13}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {reportPoints.map((point, index) => (
          <Marker key={index} position={[point[0], point[1]]}>
            <Popup>{point[2] || "Report"}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Zoney;
