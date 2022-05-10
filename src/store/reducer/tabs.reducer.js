import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  activeTab: 0,
};

export const slice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    setTab: (state, action) => {
      state.activeTab = action.payload.activeTab;
    },
  },
});

export const { setTab } = slice.actions;

export default slice.reducer;