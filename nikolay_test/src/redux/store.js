import { configureStore } from '@reduxjs/toolkit'
import emailReducer from './slices/email-sender/EmailSenderSlice.js'
import userReducer from './slices/user/UserSlice.js'

export const store = configureStore({
  reducer: {
    email: emailReducer,
    user: userReducer,
  },
})
