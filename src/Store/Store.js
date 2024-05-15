//to set up redux store, stores global state
//import configurestore -> export store ->
import { configureStore } from '@reduxjs/toolkit';
import { postsSlice } from './postsSlice';

const { addPosts } = postsSlice.actions;
const postsReducer = postsSlice.reducer;

const rootReducer = {
  posts: postsReducer,
};

const store = configureStore({
  reducer: rootReducer
});

export default store;