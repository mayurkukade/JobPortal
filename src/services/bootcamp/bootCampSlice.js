import { apiSlice } from "../apiSlice";

export const bootCampSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        bootCampPost : builder.mutation({
            query:(data)=>({
                url:"/bootcamp/post",
                method:"POST",
                body:data,
                transformRespons:console.log(data)
            }),
            invalidatesTags:["bootCamp"]
        }),
        bootCampGetById: builder.query({
            query:(id)=>({
                url:`/bootcamp/getById?bootcampId=${id}`,
                transformRespons:console.log(id)

            }),
            providesTags:['bootCamp']
        }),
        bootCampGet:builder.query({
            query:()=>({
                url:`/bootcamp/getAllBootcampDetails`
            }),
            providesTags:['itTrainig','bootCamp']
        }),
        bootCampUpdate:builder.mutation({
            query:(data)=>({
                url:`/bootcamp/update?bootcampTital=s&bootcampDetails=sd&time&status&location=adad&photo&tagLine&photo=4444&price&bootCampId=1`,
                method:"PATCH",
                body:data
            }),
            invalidatesTags:['itTrainig','bootCamp']
        }),
        bootCampDelete:builder.mutation({
            query:(id)=>({
                url:`/bootcamp/delete?bootcampId=${id}`,
                method:'DELETE',
                body:id,
                transformRespons:console.log(id)
            }),
            invalidatesTags:['itTrainig','bootCamp']
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