// src/reducers/userReducer.js

// Import necessary dependencies
import { ADD_USER_LIST } from '../actions/types';

// Define the initial state
const initialState = {
  userList: []
};

// Function to handle user list addition
const addItemToList = (list, item) => {
  return [...list, {
    id: list.length + 1,
    username: item.username,
    phoneNumber: item.phoneNumber,
    email: item.email,
    description: item.description
  }];
};

// User reducer function
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_LIST:
      return {
        ...state,
        userList: addItemToList(state.userList, action.item)
      };
    default:
      return state;
  }
};

// Export the reducer
export default userReducer;