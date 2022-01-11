import { configureStore } from "@reduxjs/toolkit";
import bookmarkreducer from "./features/bookmarks/BookmarksSlice";
import { BooksApiSlice } from "./features/booksApi/BooksApiSlice";

export const store = configureStore({
  reducer: {
    [BooksApiSlice.reducerPath]: BooksApiSlice.reducer,
    bookmarks: bookmarkreducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(BooksApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
