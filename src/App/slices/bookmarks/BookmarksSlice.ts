import { createSlice } from "@reduxjs/toolkit";

const initialState: number[] = []; // ids der bücher - als initialen state

export const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    toggle(state = initialState, action) {
      if (state.includes(action.payload)) {
        return (state = state.filter((entry) => entry !== action.payload));
      }
      return (state = [...state, action.payload]); // neue state ist siehe klammern
    },
  },
});

export const { toggle } = bookmarksSlice.actions; // nimm methode xy die sich auf eine action im slice bezieht
export default bookmarksSlice.reducer;
