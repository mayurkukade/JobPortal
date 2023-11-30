import { apiSlice } from "../apiSlice";

export const studentApiSlice = apiSlice.injectEndpoints({
   endpoints:(builder)=>({
    getStudent: builder.query({
        query: (id) => `/user/getById?userId=${id}`,
        providesTags: ["registerPost"],
      }),
      getAllStudent: builder.query({
        query: () => `/user/getAllUsers?pageNo=0`,
        providesTags: ["registerPost"],
      }),
   })
})

export const {
    useGetAllStudentQuery,
    useGetStudentQuery
} = studentApiSlice;