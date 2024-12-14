import { createSlice } from "@reduxjs/toolkit";
import {
    fetchRecommendedBooks,
    addNewBook,
    addBookToCollectionById,
    removeBookFromCollection,
    fetchOwnBooks,
    startReadingBook,
    finishReadingBook,
    deleteReadingRecord,
    fetchBookDetails
} from "./booksOperations.js";

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
        
      .addCase(addBookToCollectionById.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBookToCollectionById.fulfilled, (state, action) => {
        state.loading = false;
        state.myBooks = [...state.myBooks, action.payload];
      })
      .addCase(addBookToCollectionById.rejected, (state, action) => {
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
        
      .addCase(removeBookFromCollection.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeBookFromCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.myBooks = state.myBooks.filter(
          book => book._id !== action.payload.id
        );
      })
      .addCase(removeBookFromCollection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
        
      .addCase(startReadingBook.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(startReadingBook.fulfilled, (state, action) => {
        state.loading = false;
        state.readBook = [...state.readBook, action.payload];
      })
      .addCase(startReadingBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
        
      .addCase(finishReadingBook.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(finishReadingBook.fulfilled, (state, action) => {
        state.loading = false;
        state.readBook = [...state.readBook, action.payload];
      })
      .addCase(finishReadingBook.rejected, (state, action) => {
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