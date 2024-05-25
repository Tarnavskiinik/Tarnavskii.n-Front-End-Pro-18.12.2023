import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/UserSlice'
import postsReducer from './Posts/PostsSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer
  },
})
