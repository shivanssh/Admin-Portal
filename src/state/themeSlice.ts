import { createSlice } from "@reduxjs/toolkit";
import { Mode } from "../common/types";

interface ThemeState {
  mode: Mode;
}

const initialState: ThemeState = {
  mode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
});

export const { setMode } = themeSlice.actions;

export default themeSlice.reducer;
