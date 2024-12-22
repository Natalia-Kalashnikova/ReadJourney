import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api';

const setAuthorizationHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthorizationHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  '/users/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthorizationHeader(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  '/users/signin',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signin', credentials);
      setAuthorizationHeader(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  '/users/signout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/signout');
      clearAuthorizationHeader();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  '/users/current',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const authToken = state.auth.token;

    if (authToken === null) {
      return rejectWithValue('Failed to retrieve user data');
    }

    try {
      setAuthorizationHeader(authToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
