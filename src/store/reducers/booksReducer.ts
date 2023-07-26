import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from '..';

interface Book {
  id: string
  name: string
  avatar_url: string
  created_at: Date
}

const initialState = {
  books: [] as Book[]
}

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks(state, action) {
      state.books = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.books,
      }
    }
  }
})

export const { setBooks } = bookSlice.actions
export const BookState = (state: AppState) => state.book.books
export default bookSlice.reducer