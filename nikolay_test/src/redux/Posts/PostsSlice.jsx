import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  favourites: []
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    addFavourite(state, action) {
      state.favourites.push(action.payload);
    },
    removeFavourite(state, action) {
      state.favourites = state.favourites.filter(post => post.id !== action.payload);
    }
  }
});

export const { setPosts, addFavourite, removeFavourite } = postsSlice.actions;

export default postsSlice.reducer;