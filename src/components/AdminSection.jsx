// src/components/AdminSection.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminSection = ({ searchQuery }) => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Community Posts",
        data: [15, 25, 35, 30, 45, 55],
        backgroundColor: "#c0392b"
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Community Posts Over Time" }
    }
  };

  return (
    <div className="admin-section card">
      <h2>Admin Overview</h2>
      <div className="reports-count">
        <h3>
          SOS Reports: <span className="number">215</span>
        </h3>
      </div>
      <div className="chart-container">
        <Bar data={chartData} options={chartOptions} />
      </div>
      <div className="severity-legend">
        <h4>Severity Legend</h4>
        <ul>
          <li>
            <span className="severity severe">S</span> - Severe (Critical Incidents:
            35)
          </li>
          <li>
            <span className="severity high">A</span> - High (Urgent Issues: 20)
          </li>
          <li>
            <span className="severity medium">F</span> - Medium (Moderate Warnings:
            15)
          </li>
        </ul>
      </div>
      {/* Display dummy search query info if needed */}
      {searchQuery && (
        <div className="dummy-data">
          <p>
            Filtering results for: <strong>{searchQuery}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default AdminSection;
