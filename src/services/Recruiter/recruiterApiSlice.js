import { apiSlice } from "../apiSlice";

export const recruiterApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        companyByUserId:builder.query({
            query:(data)=>({
                url:`/company/GetCompanyByUserId?userId=${data}`,
                transformResponse:console.log(data)
            }),
            providesTags:['recruiter']
        })
    })
})

export const {
    useCompanyByUserIdQuery
} = recruiterApiSlice;