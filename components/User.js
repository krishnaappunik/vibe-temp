// components/User.js

import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div key={user.id}>
      <h2>{user.username}</h2>
      <p>Email: {user.email}</p>
      <p>Phone Number: {user.phoneNumber}</p>
      <p>Description: {user.description}</p>
    </div>
  );
};

export default UserProfile;