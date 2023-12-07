import { apiSlice } from "../apiSlice";

export const studentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStudent: builder.query({
      query: (id) => `/user/getById?userId=${id}`,
      providesTags: ["registerPost"],
    }),
    getAllStudent: builder.query({
      query: () => `/user/getAllUsers?pageNo=0`,
      providesTags: ["registerPost"],
    }),
    addStudentProfile:builder.mutation({
      query:({studentFormData,id})=>({
        url:`/StudentProfile/AddProfile?userId=1173`,
        method:"POST",
        transformResponse:console.log(id),
        body:studentFormData

      }),
      invalidatesTags:['registerPost']
    })
  }),
});

export const { useGetAllStudentQuery, useGetStudentQuery,useAddStudentProfileMutation } = studentApiSlice;
