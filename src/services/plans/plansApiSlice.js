import { apiSlice } from "../apiSlice";

export const plansApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    plansPost: builder.mutation({
      query: (data) => ({
        url: `/plan/add`,
        method: "POST",
        body: data,
        transferResponse: () => {
          console.log(data);
        },
      }),
      invalidatesTags: ["plans"],
    }),
  }),
});

export const { usePlansPostMutation } = plansApiSlice;
