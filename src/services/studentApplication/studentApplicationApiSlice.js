import { apiSlice } from "../apiSlice";

export const studentApplicationApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) =>({
       studentApplyPost : builder.mutation({
        query:(data)=>({
            url:`/studentApplication/AddApplication?userId=${data.userId}`,
            method:"POST",
            transferREsponse:console.log(data),
            body:data
        }),
        invalidatesTags:['application']
       }),
       getApplicationByUserId:builder.query({
        query:(data)=>({
           url: `/studentApplication/getById?userId=${data}` 
        }),
        providesTags:['application']
       }),
       updateApplication:builder.mutation({
        query:(data)=>({
            url:`/studentApplication/updateApplicationDetails?userId=${data.userId}&studentApplicationsId=${data.Id}`,
            method:"PATCH",
            body:data
        }),
        invalidatesTags:['application']
       }),
       getApplicationByJobId:builder.query({
        query:(data)=>({
            url: `/studentApplication/getByJobId?jobId=1` 
         }),
         providesTags:['application']
        

       }),
      
    })
})

export const {
useStudentApplyPostMutation,
useGetApplicationByUserIdQuery,
useUpdateApplicationMutation,
useGetApplicationByJobIdQuery
} = studentApplicationApiSlice