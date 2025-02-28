import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    retrieve: builder.query({
      query: ({ url }) => url,
      transformErrorResponse: (error) => {
        console.log(error);
      },
      transformResponse: (response) => console.log(response),
    }),
    create: builder.mutation({
      query: ({ url, data }) => ({
        url,
        method: "POST",
        body: JSON.stringify(data),
      }),
    }),
    update: builder.mutation({
      query: ({ url, data }) => ({
        url,
        method: "PUT",
        body: JSON.stringify(data),
      }),
    }),
    delete: builder.mutation({
      query: ({ url }) => ({
        url,
      }),
    }),
  }),
});

export const {
  useRetrieveQuery,
  useCreateMutation,
  useUpdateMutation,
  useDeleteMutation,
} = api;
