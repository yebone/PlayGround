import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counter/counterslice";
import { postsSlice } from "../features/posts/postsSlice";
import { wishListsSlice } from "../features/wishlists/wishListsSlice";

export default configureStore({
  reducer: {
    counter: counterSlice.reducer,
    posts: postsSlice.reducer,
    wishlists: wishListsSlice.reducer,
  },
});
