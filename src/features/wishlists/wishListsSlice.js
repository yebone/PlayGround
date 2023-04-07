import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const initialState = {
  wishlistsProducts: [],
};

const STORAGE_KEY = "wishlistItems";
const storedItems = Cookies.get(STORAGE_KEY);

if (storedItems) {
  initialState.wishlistsProducts = JSON.parse(storedItems);
}

export const wishListsSlice = createSlice({
  name: "wishlists",
  initialState,
  reducers: {
    add_to_wishlists(state, { payload }) {
      state.wishlistsProducts.push(payload);

      Cookies.set(STORAGE_KEY, JSON.stringify(state.wishlistsProducts));
    },
    remove_from_wishlists: (state, { payload }) => {
      state.wishlistsProducts = state.wishlistsProducts.filter(
        (pd) => pd.goods_id !== payload
      );
      Cookies.set(STORAGE_KEY, JSON.stringify(state.wishlistsProducts));
    },
  },
});

export const { add_to_wishlists, remove_from_wishlists } =
  wishListsSlice.actions;

export default wishListsSlice.reducer;
