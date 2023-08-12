import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// action type will be users/fetch/pending
const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3005/users');

  // DEV ONLY!!!
  await pause(1000);

  return response.data; // assigned to action.payload when fulfilled, otherwise action.error
});

// automatically generates action creators:
// fetchUsers.pending === 'users/fetch/pending'
// fetchUsers.fulfilled === 'users/fetch/fulfilled'
// fetchUsers.rejected === 'users/fetch/rejected'

// DEV ONLY!!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
