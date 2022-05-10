import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
};

export const slice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      const hasCategory = state.category.find(
        (item) =>
          item.toLocaleLowerCase() ===
          action.payload.category?.toLocaleLowerCase()
      );

      if (hasCategory) {
        state.category = state.category.filter(
          (item) =>
            item.toLocaleLowerCase() !==
            action.payload.category?.toLocaleLowerCase()
        );
      } else {
        state.category = [...state.category, action.payload.category];
      }
    },
  },
});

export const { setCategory } = slice.actions;

export default slice.reducer;
