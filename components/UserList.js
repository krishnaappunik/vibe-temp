import React from 'react';
import './UserList.css';

function UserList() {
  const users = [
    {
      id: 1,
      username: 'johndoe',
      email: 'johndoe@example.com',
      phoneNumber: '123-456-7890',
      description: 'A sample user',
    },
    {
      id: 2,
      username: 'janedoe',
      email: 'janedoe@example.com',
      phoneNumber: '987-654-3210',
      description: 'Another sample user',
    },
  ];

  return (
    <div className="user-list-container">
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;