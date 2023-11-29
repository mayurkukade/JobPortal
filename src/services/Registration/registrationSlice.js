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
    getStudent: builder.query({
      query: (id) => `user/getById?userId=${id}`,
      providesTags: ["registerPost"],
    }),
    getAllStudent: builder.query({
      query: (id) => `/user/getAllUsers?pageNo=${id}`,
      providesTags: ["registerPost"],
    }),
    UpdateRegisterDetails: builder.mutation({
      query: (data) => ({
        userl: "/user/updateUserDetails",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["registerPost"],
    }),
  }),
});

export const {
  useGetStudentQuery,
  useGetAllStudentQuery,
  useStudentRegisterPostMutation,
  useUpdateRegisterDetailsMutation,
} = registrationSlice;
