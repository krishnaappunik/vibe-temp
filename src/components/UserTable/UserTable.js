import React from 'react';
import './UserTable.css';

function UserTable() {
  return (
    <div className="user-table-container">
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop through all users and display their information */}
          {/* Assuming you have a users array with username, phone, email, and description */}
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;