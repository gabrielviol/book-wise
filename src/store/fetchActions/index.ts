import { api } from "@/lib/axios"
import { setUsers } from "../reducers/usersReducer"
import { setBooks } from "../reducers/booksReducer"

export const fetchUsers = () => async (dispatch: any) => {
  try {
    console.log('Fetching users...')
    const response = await api.get('/get/users')
    dispatch(setUsers(response.data))
    console.log('Response:', response)
  } catch (error) {
    console.log('Error:', error)
  }
}

export const fetchBooks = () => async (dispatch: any) => {
  try {
    console.log('Fetching books...')
    const response = await api.get('/get/books')
    const books = response.data
    dispatch(setBooks(books))
    console.log('Response:', response)
  } catch (error) {
    console.log('Error:', error)
  }
}