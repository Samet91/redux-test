import { createSlice } from "@reduxjs/toolkit";

export interface ratingObject {
  id: number;
  rating: number;
}

const initialState: ratingObject[] = [];

export const RatingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {
    setRating(state = initialState, action) {
      return (state = [...state, action.payload]); // bei react ohne den ersten state
    },
  },
});

export const { setRating } = RatingSlice.actions;
export default RatingSlice.reducer;
