import { apiSlice } from "../apiSlice";

export const jobApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getAllJob:builder.query({
            query:()=>`/job/all`,
            providesTags:["job"]
        })
    })
})

export const {
useGetAllJobQuery
} = jobApiSlice