import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/UserSlice'
import postsReducer from './Posts/PostsSlice'
import commentsReducer from './Comments/Comments'

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    comments: commentsReducer
  },
})
