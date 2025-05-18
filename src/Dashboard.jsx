import React from 'react';
import AdminSection from './components/AdminSection';
import SOSAlertsSection from './components/SOSAlertsSection';
import CommunityReportsSection from './components/CommunityReportsSection';
import UsersManagementSection from './components/UsersManagementSection';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Safe On Admin Dashboard</h1>
      <div className="sections">
        <AdminSection />
        <SOSAlertsSection />
        <CommunityReportsSection />
        <UsersManagementSection />
      </div>
    </div>
  );
};

export default Dashboard;
