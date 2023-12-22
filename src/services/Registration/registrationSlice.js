import { apiSlice } from "../apiSlice";

export const registrationSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    studentRegisterPost: builder.mutation({
      query: (data) => ({
        url: "/account/register",
        method: "POST",

        body: data,
      }),
      invalidatesTags: ["registerPost"],
    }),

    UpdateRegisterDetails: builder.mutation({
      query: (data) => ({
        url: "/user/updateUserDetails",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["registerPost"],
    }),
    loginApi: builder.mutation({
      query: (data) => ({
        url: "/jwt/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetStudentQuery,
  useGetAllStudentQuery,
  useStudentRegisterPostMutation,
  useUpdateRegisterDetailsMutation,
  useLoginApiMutation,
} = registrationSlice;
