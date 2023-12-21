import { apiSlice } from "../apiSlice";

export const jobApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getAllJob:builder.query({
            query:()=>({
                url:`/job/all`,
             })
           
            // transformResponse:(data)=>{
                
            //  return   data?.list?.sort((a,b)=> b.jobId - a.jobId)
            // }
            ,
            providesTags:["job","application"]
        }),
        addJobs:builder.mutation({
            query:(data)=>({
                url:"/job/add",
                method:"POST",
                body:data,
                tranforResponse:console.log(data)
            }),
            invalidatesTags:["Job"]
        }),
        byIdJobs:builder.query({
            query:(id)=>({
                url:`/job/getJob?JobId=${id}`,
               
            }),
            providesTags:["Job","application"]

        }),
        jobFilter: builder.query({
            query: (mainFilter) => {
                console.log(mainFilter)
              const { jobSearch,city,experiance} = mainFilter;
              console.log(jobSearch)
              console.log(city)
              console.log(experiance)
              console.log(`/filter/mainFilter?companyName=${jobSearch}&jobLocation=${city}&salary=&experienceLevel=${experiance}`) 
              return `/filter/mainFilter?companyName=${jobSearch}&jobLocation=${city}&salary=&experienceLevel=${experiance}`;
             },
            // transformResponse:(data)=>(data?.list?.sort((a,b)=> b.jobId - a.jobId)),
          }),

    })
})

export const {
useGetAllJobQuery,
useAddJobsMutation,
useByIdJobsQuery,
useJobFilterQuery

} = jobApiSlice