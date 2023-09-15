import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
