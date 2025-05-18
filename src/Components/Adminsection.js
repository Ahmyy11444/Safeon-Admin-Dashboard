import React from 'react';

const AdminSection = () => {
  return (
    <div className="admin-section card">
      <h2>Admin Overview</h2>
      <div className="reports-count">
        <h3>
          SOS Reports: <span className="number">215</span>
        </h3>
      </div>
      <div className="community-chart">
        <h4>Community Posts</h4>
        <div className="chart-placeholder">[Chart Placeholder]</div>
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
