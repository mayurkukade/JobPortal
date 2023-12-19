import { apiSlice } from "../apiSlice";

export const savedJobsAPiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        postSaveJob:builder.mutation({
            query:(data)=>({
                url:`/save/saveJob?userId=${data.userId}&jobId=${data.jobId}`,
                method:"POST",
                transformResponse:console.log(data.userId),
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
                url:`/save/getsavedjobByUserId?userId=${userId}`,
                
            }),
            providesTags:["save"]
        }),
        deleteSaveJob:builder.mutation({
            query:(id)=>({
                url:`/save/delete?jobSaveId=${5}`,
                method:"DELETE"
            }),
            invalidatesTags:["save"]
        })
    })
})

export const {
    useGetSavedJobBYUserIdQuery,
    usePostSaveJobMutation,
    useGetSavedJobByIdQuery,
    useDeleteSaveJobMutation
} = savedJobsAPiSlice;