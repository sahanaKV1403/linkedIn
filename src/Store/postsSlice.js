import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
  },
  reducers: {
    addPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { addPosts } = postsSlice.actions;

export default postsSlice.reducer;
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     posts: [],
// };

// export const postsSlice = createSlice({
//     name: 'posts',
//     initialState,
//     reducers: {
//         addPost: (state, action) => {
//             state.posts.unshift(action.payload);
//         },
//     },
// });

// export const { addPosts, addPost } = postsSlice.actions;

// export default postsSlice.reducer;