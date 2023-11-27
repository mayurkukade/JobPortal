import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";



export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
  }),
  tagTypes: ["registerPost","itTrainig","bootCamp","job"],
  endpoints: (builder) => ({}),
});
