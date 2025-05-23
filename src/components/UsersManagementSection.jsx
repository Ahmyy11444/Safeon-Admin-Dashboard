import React, { useState } from "react";

const usersData = [
  { id: 1, name: "Ahmed Hany", email: "ahmed@example.com", status: "Subscribed" },
  { id: 2, name: "Sara Khalil", email: "sara@example.com", status: "Premium" },
  { id: 3, name: "Omar Adel", email: "omar@example.com", status: "Regular" },
  { id: 4, name: "Yasmine Fathy", email: "yasmine@example.com", status: "Premium" },
  // Add a few more for good measure...
  { id: 5, name: "Laila Nabil", email: "laila@example.com", status: "Subscribed" },
  { id: 6, name: "Mohamed Ali", email: "mohamed@example.com", status: "Regular" }
];

const UsersManagementSection = ({ searchQuery }) => {
  // Filter users based on search query (by name or email)
  const filteredUsers = usersData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="users-management-section card">
      <h2>Users Management</h2>
      <div className="table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`user-status ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagementSection;
