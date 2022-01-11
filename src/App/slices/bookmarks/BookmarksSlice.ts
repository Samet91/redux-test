import { createSlice } from "@reduxjs/toolkit";

const initialState: number[] = []; // ids der bücher - als initialen state

export const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    toggle(state, action) {
      console.log(action);
    },
  },
});

export const {} = bookmarksSlice.actions; // nimm methode xy die sich auf eine action im slice bezieht
export default bookmarksSlice.reducer;
