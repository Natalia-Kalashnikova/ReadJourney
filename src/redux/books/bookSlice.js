import { createSlice } from '@reduxjs/toolkit';
import {
  addBookById,
  addNewBook,
  fetchBookDetails,
  deleteBook,
  fetchRecommendedBooks,
  fetchOwnBooks,
  deleteReadingRecord,
  readingStart,
  readingStop,
} from './booksOperations.js';

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    data: [],
    myBooks: [],
    loading: false,
    error: null,
    totalPages: 1,
    readBook: [],
    allInfoBook: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRecommendedBooks.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecommendedBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchRecommendedBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addNewBook.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        state.loading = false;
        state.myBooks = [...state.myBooks, action.payload];
      })
      .addCase(addNewBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addBookById.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBookById.fulfilled, (state, action) => {
        state.loading = false;
        state.myBooks = [...state.myBooks, action.payload];
      })
      .addCase(addBookById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(fetchOwnBooks.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOwnBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.myBooks = action.payload;
      })
      .addCase(fetchOwnBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteBook.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.loading = false;
        state.myBooks = state.myBooks.filter(
          book => book._id !== action.payload.id
        );
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(readingStart.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(readingStart.fulfilled, (state, action) => {
        state.loading = false;
        state.readBook = [...state.readBook, action.payload];
      })
      .addCase(readingStart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(readingStop.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(readingStop.fulfilled, (state, action) => {
        state.loading = false;
        state.readBook = [...state.readBook, action.payload];
      })
      .addCase(readingStop.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteReadingRecord.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteReadingRecord.fulfilled, (state, action) => {
        state.loading = false;
        state.readBook = [action.payload];
      })
      .addCase(deleteReadingRecord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(fetchBookDetails.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBookDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.allInfoBook = action.payload;
      })
      .addCase(fetchBookDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default bookSlice.reducer;
