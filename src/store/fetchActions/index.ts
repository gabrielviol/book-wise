import { api } from "@/lib/axios"
import { setUsers } from "../reducers/userReducer"

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