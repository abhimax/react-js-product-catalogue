import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "./reducer/category.reducer";
import productDetailsReducer from "./reducer/productDetails.reducer";
import tabsReducer from "./reducer/tabs.reducer";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    productDetails: productDetailsReducer,
    tabs: tabsReducer,
  },
});