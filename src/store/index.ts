import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/usersReducer'
import { createWrapper } from 'next-redux-wrapper'
import booksReducer from './reducers/booksReducer'

const makeStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
      book: booksReducer
    },
    devTools: true
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore["getState"]>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>

export const wrapper = createWrapper<AppStore>(makeStore);


