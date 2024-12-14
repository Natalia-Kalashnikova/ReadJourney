import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const fetchRecommendedBooks = createAsyncThunk(
  '/books/recommend',
  async ({ page = 1, limit = 10, title = '', author = '' }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/books/recommend?page=${page}&limit=${limit}&title=${title}&author=${author}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addNewBook = createAsyncThunk(
  '/books/addNew',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`/books/add`, data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addBookToCollectionById = createAsyncThunk(
  '/books/add',
  async (id, thunkAPI) => {
    try {
      const response = await axios.post(`/books/add/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeBookFromCollection = createAsyncThunk(
  '/books/remove',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/books/remove/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchOwnBooks = createAsyncThunk(
  '/books/own',
  async (status = '', thunkAPI) => {
    try {
      const url = status ? `/books/own?status=${status}` : '/books/own';
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const startReadingBook = createAsyncThunk(
  '/books/reading/start',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`/books/reading/start`, data);
      return response.data;
    } catch (e) {
      toast.error('Connection error');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const finishReadingBook = createAsyncThunk(
  '/books/reading/finish',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`/books/reading/finish`, data);
      return response.data;
    } catch (e) {
      toast.error('There seems to be an issue with the connection');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteReadingRecord = createAsyncThunk(
  '/books/reading',
  async (data, thunkAPI) => {
    try {
      const response = await axios.delete(
        `/books/reading?bookId=${data.bookId}&readingId=${data.readingId}`
      );
      return response.data;
    } catch (e) {
      toast.error(
        'Whoops! It looks like something went wrong... Books that have been fully read cannot be deleted'
      );
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchBookDetails = createAsyncThunk(
  '/books/id',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/books/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);