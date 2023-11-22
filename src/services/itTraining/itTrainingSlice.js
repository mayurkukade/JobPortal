import { apiSlice } from "../apiSlice";

export const itTrainingSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addItTraining: builder.mutation({
      query: (data) => ({
        url: "/ItTraining/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["itTrainig"],
    }),
    getitTrainingById: builder.query({
      query: (id) => `ItTraining/byID?itTrainingId=4${id}`,
      provideTags: ["itTrainig"],
    }),
    getAllItTraining:builder.query({
        query:()=>({
            url:`/ItTraining/all`,
            provideTags:['itTrainig']
        })    
    }),
    updateItTraining:builder.mutation({
        query:(data)=>({
            url:`/ItTraining/update?itTrainingId=${data}`,
            Method:'PATCH',
            body:data

        }),
        invalidatesTags:['itTrainig']
    }),
    deleteItTraining:builder.mutation({
        query:(id)=>({
            url:`/itTrainig/update?itTrainingId=${id}`,
            method:'DELETE',
            body:id
        }),
        invalidatesTags:['itTrainig']
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