import React, { useState } from 'react';

const tabs = ['Scheduled', 'Area Updates', 'Send'];

const sampleUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Regular' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Premium' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', status: 'Gold' }
];

const UsersManagementSection = () => {
  const [activeTab, setActiveTab] = useState('Scheduled');

  // For demonstration, the same user list is shown regardless of tab.
  // In practice, these tabs might filter or modify actions.
  return (
    <div className="users-management-section card">
      <h2>Users Management</h2>
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
      <div className="users-list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {sampleUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagementSection;
