// A slice is a combination of reducer function, action creators, and initial state.
//action tells what to do
//payload is optional, contains data required to perform action
//reducers update redux store, not directly on store but makes a copy of store, does changes and replaces initial store
//name of slice is posts
//Reducers are pure functions that take the current state and an action as input, and return a new state



import { createSlice } from '@reduxjs/toolkit';
export const postsSlice = createSlice({
  
  name: 'posts',
  initialState: {
    posts: [],
  },
  reducers: {
    addPosts: (state, action) => {
      state.posts = action.payload
    },
  },
});

export const { addPosts } = postsSlice.actions;

export default postsSlice.reducer;