import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from '..';

interface User {
  id: string
  name: string
  avatar_url: string
  created_at: Date
}

const initialState = {
  users: [] as User[]
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.users,
      }
    }
  }
})

export const { setUsers } = userSlice.actions
export const UserState = (state: AppState) => state.user.users
export default userSlice.reducer