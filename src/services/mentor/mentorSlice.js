import { apiSlice } from "../apiSlice";

export const mentorApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        addmentor:builder.mutation({
            query:(data)=>({
                url:'/mentor/post',
                method:"POST",
                body:data
            }),
            invalidatesTags:["mentor"]
        }),
        getIdMentor:builder.query({
            query:(id) =>({
                url:`/mentor/getById?mentorId=${id}`,
                method:"GET"
            }),
            providesTags:["mentor"]
        }),
        getAllMentor:builder.query({
            query:()=>({
                url:`/mentor/getAll`
            }),
            providesTags:["mentor"]
        }),
        updateMentor:builder.mutation({
            query:({mentor})=>({
            
                url:`/mentor/update?skills=${mentor.skills}&subject=${mentor.subject}&mentorInfo=${mentor.mentorInfo}&achievements=${mentor.achievements}&socalMediaLinkF=${mentor.socalMediaLinkF}&socalMediaLinkF1=${mentor.socalMediaLinkF1}&socalMediaLinkInsta=${mentor.socalMediaLinkInsta}&cost=${mentor.cost}&mentorId=${mentor.mentorId}&specialityOfMentor=${mentor.specialityOfMentor}&aboutAs=${mentor.aboutAs}`,
                method:"PATCH",
                body:mentor,
                transformResponse:console.log(mentor.aboutAs)
            }),
            invalidatesTags:["mentor"]
        }),
        deleteMentor:builder.mutation({
            query:(id)=>({
                url:`/mentor/delete?mentorId=${id}`,
                method:"DELETE",
                body:id
            }),
            invalidatesTags:['mentor']
        })
    })
})

export const {
useAddmentorMutation,
useGetAllMentorQuery,
useGetIdMentorQuery,
useUpdateMentorMutation,
useDeleteMentorMutation
} = mentorApiSlice;