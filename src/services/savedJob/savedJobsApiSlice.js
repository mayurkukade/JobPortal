import { apiSlice } from "../apiSlice";

export const savedJobsAPiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        postSaveJob:builder.mutation({
            query:(data)=>({
                url:`/save/saveJob?userId=1000&jobId=3`,
                method:"POST",
                body:data
            }),
            invalidatesTags:["save"]
        }),
        getSavedJobById:builder.query({
            query:(id)=>({
                url:`/save/getById?jobSaveId=2`,
                method:"GET",
                body:id
            }),
            providesTags:["save"]
        }),
        getSavedJobBYUserId:builder.query({
            query:(userId)=>({
                url:`/save/getsavedjobByUserId?userId=1000`,
                
            }),
            providesTags:["save"]
        }),
        deleteSaveJob:builder.mutation({
            query:(id)=>({
                url:`/save/delete?jobSaveId=${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["save"]
        })
    })
})

export const {
    useGetSavedJobBYUserIdQuery
} = savedJobsAPiSlice;