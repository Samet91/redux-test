import { configureStore } from "@reduxjs/toolkit";
import bookmarkreducer from "./slices/bookmarks/BookmarksSlice";
import { BooksApiSlice } from "./slices/booksApi/BooksApiSlice";
import ratingreducer from "./slices/Rating/Rating.slice";

export const store = configureStore({
  reducer: {
    [BooksApiSlice.reducerPath]: BooksApiSlice.reducer,
    bookmarks: bookmarkreducer,
    ratings: ratingreducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(BooksApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
