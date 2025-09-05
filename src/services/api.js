// src/services/api.js

import axios from 'axios';

// New API endpoint for submitting user details
axios.defaults.baseURL = 'http://localhost:3000'; // Change the base URL to your server URL

const UserService = {
  submitUserDetails: (fullName, phoneNumber, email) => {
    const payload = {
      fullName,
      phoneNumber,
      email,
    };

    return axios.post('/api/v1/users', payload)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error('Failed to submit user details');
      });
  },
};

export default UserService;