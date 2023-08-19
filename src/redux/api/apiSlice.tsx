import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
    }),
    getSingleBooks: builder.query({
      query: (id) => ` /books/${id}`,
    }),
  }),
  tagTypes: ['book', 'books', 'wishlist', 'reviews', 'wishlists'],
});
export const { useGetBooksQuery, useGetSingleBooksQuery } = api;
