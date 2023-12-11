import { apiSlice } from "../apiSlice";

export const jobApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getAllJob:builder.query({
            query:()=>`/job/all`,
            providesTags:["job"]
        }),
        addJobs:builder.mutation({
            query:(data)=>({
                url:"/job/add",
                method:"POST",
                body:data
            }),
            invalidatesTags:["Job"]
        }),
        byIdJobs:builder.query({
            query:(id)=>({
                url:`/job/getJob?JobId=${id}`,
               
            }),
            providesTags:["Job"]

        })

    })
})

export const {
useGetAllJobQuery,
useAddJobsMutation,
useByIdJobsQuery

} = jobApiSlice