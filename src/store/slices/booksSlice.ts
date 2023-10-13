import { createSlice } from '@reduxjs/toolkit'
import { IBook } from '../../interfaces/interfaces'

interface IState {
  books: IBook[]
  book: IBook | null
}

const initialState: IState = {
  books: [],
  book: null,
}

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    getBooks(state, action) {
      state.books = action.payload
    },
    getBook(state, action) {
      state.book = action.payload
    },
  },
})

export const { getBooks, getBook } = bookSlice.actions

export default bookSlice.reducer
