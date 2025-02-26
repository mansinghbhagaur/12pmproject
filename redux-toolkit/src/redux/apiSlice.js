import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    get: builder.query({
      query: ({ url }) => url,
    }),
    create: builder.mutation({
      query: ({ url, data }) => ({
        method: "POST",
        url: url,
        body: data,
      }),
    }),
    update: builder.mutation({
      query: ({ url, data }) => ({
        method: "PUT",
        url: url,
        body: data,
      }),
    }),
    delete: builder.mutation({
      query: ({ url }) => ({
        method: "DELETE",
        url: url,
      }),
    }),
  }),
});

export const {
  useGetQuery,
  useCreateMutation,
  useUpdateMutation,
  useDeleteMutation,
} = apiSlice;
