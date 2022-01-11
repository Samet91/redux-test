import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { BooksApiSlice } from "./features/BooksApi/BooksApiSlice";

export const store = configureStore({
  reducer: {
    [BooksApiSlice.reducerPath]: BooksApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(BooksApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
