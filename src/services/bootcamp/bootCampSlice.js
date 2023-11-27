import { apiSlice } from "../apiSlice";

export const bootCampSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        bootCampPost : builder.mutation({
            query:(data)=>({
                url:"/bootcamp/post",
                method:"POSt",
                body:data
            }),
            invalidatesTags:["bootCamp"]
        }),
        bootCampGetById: builder.query({
            query:(id)=>({
                url:`/getById?bootcampId=${id}`,

            }),
            providesTags:['bootCamp']
        }),
        bootCampGet:builder.query({
            query:()=>({
                url:`bootcamp/getAllBootcampDetails`
            }),
            providesTags:['itTrainig']
        }),
        bootCampUpdate:builder.mutation({
            query:(data)=>({
                url:`/bootcamp/update?bootcampTital=s&bootcampDetails=sd&time&status&location=adad&photo&tagLine&photo=4444&price&bootCampId=1`,
                method:"PATCH",
                body:data
            }),
            invalidatesTags:['itTrainig']
        }),
        bootCampDelete:builder.mutation({
            query:(id)=>({
                url:`bootcamp/delete?bannerId=${id}`,
                method:'DELETE',
                body:id
            }),
            invalidatesTags:['itTrainig']
        })
    })
})


export const {
useBootCampPostMutation,
useBootCampGetByIdQuery,
useBootCampGetQuery,
useBootCampUpdateMutation,
useBootCampDeleteMutation
} = bootCampSlice;