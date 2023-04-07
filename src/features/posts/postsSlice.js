import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "First Post!", content: "Hello!" },
  { id: "2", title: "Second Post", content: "More text" },
];
export const postsSlice = createSlice({
  name: "socialMedia",
  initialState,
  reducers: {
    addPost: (state, action) => {
      console.log(state);
      state.push(action.payload);
    },
  },
});

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
