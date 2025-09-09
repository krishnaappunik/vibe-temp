// src/container/UserTableContainer.js

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../reducers';

interface Props {
  users: User[];
  getUsers: () => void;
}

interface User {
  id: number;
  username: string;
  phoneNumber: string;
  email: string;
  description: string;
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const UserTableContainer: React.FC<Props> = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, []);

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell align="right">{user.username}</TableCell>
              <TableCell align="right">{user.phoneNumber}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getUsers: () => dispatch({ type: 'GET_USER_LIST' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTableContainer);