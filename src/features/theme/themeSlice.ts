import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}
export type ThemeState = {
  mode: ThemeMode;
};

const initialState: ThemeState = {
  mode: ThemeMode.LIGHT,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode =
        state.mode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT;
    },
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
