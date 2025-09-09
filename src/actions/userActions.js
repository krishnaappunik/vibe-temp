// src/actions/userActions.js

import {
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
  USER_LOAD_FAILURE,
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAILURE,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAILURE
} from '../constants/userConstants';

const initialUserState = {
  isLoading: false,
  users: []
};

export const userListReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case USER_LOAD_REQUEST:
      return { ...state, isLoading: true };
    case USER_LOAD_SUCCESS:
      return {
        users: action.users,
        isLoading: false
      };
    case USER_LOAD_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export const createUserReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CREATE_REQUEST:
      return { ...state, isLoading: true };
    case USER_CREATE_SUCCESS:
      return {
        user: action.user,
        isLoading: false
      };
    case USER_CREATE_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export const updateUserReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { ...state, isLoading: true };
    case USER_UPDATE_SUCCESS:
      return {
        user: action.user,
        isLoading: false
      };
    case USER_UPDATE_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { ...state, isLoading: true };
    case USER_DELETE_SUCCESS:
      return {
        users: [...state.users.slice(0, action.deletedUserIndex), ...state.users.slice(action.deletedUserIndex + 1)]
      };
    case USER_DELETE_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};