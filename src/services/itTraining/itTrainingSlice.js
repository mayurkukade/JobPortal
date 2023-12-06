import { apiSlice } from "../apiSlice";

export const itTrainingSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addItTraining: builder.mutation({
      query: (data) => ({
        url: "/ItTraining/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags:['itTrainig'],
    }),
    getitTrainingById: builder.query({
      query: (trainigId) =>({
url:`/ItTraining/byID?itTrainingId=${trainigId}`,
      }) ,
     
      providesTags: ['itTrainig'],
    }),
    getAllItTraining:builder.query({
        query:()=>({
            url:`/ItTraining/all`,
           
        })    ,
        providesTags:['itTrainig'],
    }),
    updateItTraining:builder.mutation({
        query:(data)=>({
            url:`/ItTraining/update?itTrainingId=${data.id}`,
        transformResponse:console.log(data),
            method:'PATCH',
            body:data

        }),
        invalidatesTags:['itTrainig'],
    }),
    deleteItTraining:builder.mutation({
        query:(id)=>({
            url:`/ItTraining/delete?itTrainingId=${id}`,
            trandformResponse:console.log(id),
            method:'DELETE',
            body:id
        }),
        invalidatesTags:['itTrainig','bootCamp'],
    })

  }),
});


export const {
useAddItTrainingMutation,
useGetitTrainingByIdQuery,
useGetAllItTrainingQuery,
useUpdateItTrainingMutation,
useDeleteItTrainingMutation
} = itTrainingSlice