import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminSection = () => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Community Posts",
        data: [15, 25, 35, 30, 45, 55],
        backgroundColor: "#c0392b",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Community Posts Over Time",
      },
    },
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
            <span className="severity severe">S</span> - Severe
          </li>
          <li>
            <span className="severity high">A</span> - High
          </li>
          <li>
            <span className="severity medium">F</span> - Medium
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSection;
