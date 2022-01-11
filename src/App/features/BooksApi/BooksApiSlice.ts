import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BooksApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakerapi.it/api/v1/books",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (quantity = 20) => `/?_quantity=${quantity}`,
    }),
  }),
});