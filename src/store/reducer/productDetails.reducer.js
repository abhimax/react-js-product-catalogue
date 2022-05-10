import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
};

export const slice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload.product;
    },
  },
});

export const { setProduct } = slice.actions;

export default slice.reducer;
