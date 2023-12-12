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

        }),
        jobFilter: builder.query({
            query: (mainFilter) => {
              const { jobSearch,city,experienceLevel } = mainFilter;
              console.log(jobSearch)
              console.log(city)
              console.log(`/filter/mainFilter?companyName=${jobSearch}&jobLocation=${city}&salary=&experienceLevel=`) 
              return `/filter/mainFilter?companyName=${jobSearch}&jobLocation=${city}&salary=&experienceLevel`;
            },
            transformResponse: (response) => {
              console.log(response);
          
              return response;
            },
          }),

    })
})

export const {
useGetAllJobQuery,
useAddJobsMutation,
useByIdJobsQuery,
useJobFilterQuery

} = jobApiSlice