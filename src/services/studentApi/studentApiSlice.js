import { apiSlice } from "../apiSlice";

export const studentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStudent: builder.query({
      query: (id) =>({
        url :`/user/getById?userId=${id}`,
        transferResponse:console.log(id)
      }) ,
      providesTags: ["registerPost"],
    }),
    getAllStudent: builder.query({
      query: () => `/user/getAllUsers?pageNo=0`,
      providesTags: ["registerPost"],
    }),
    addStudentProfile: builder.mutation({
      query: (studentFormData) => ({
        url: `/StudentProfile/AddProfile?userId=${studentFormData.userId}`,
        method: "POST",
        transformResponse: console.log(studentFormData),
        body: studentFormData,
      }),
      invalidatesTags: ["registerPost"],
    }),
    getDegreeStudentProfile: builder.query({
      query: (id) => ({
        url: `/degree/getDegree?userId=${id}`,
        transferResponse:console.log(id)
      }),
      providesTags: ["registerPost"]
    }),

    degreeStudentProfileUpdate:builder.mutation({
      query:({degrees,educationId})=>({
        url:`/degree/updateDegreeDetails?degreeId=${educationId}`,
        method:"PATCH",
        body:degrees
      }),
      invalidatesTags: ["registerPost"]
    }),

    getCertificate: builder.query({
      query: (id) => ({
        url: `/certificate/getCertificate?userId=${id}`,
      }),
      providesTags: ["registerPost"],
    }),


    CertificateUpdate: builder.mutation({
      query: ({ certificationInputForm, certificateId }) => ({
        url: `/certificate/updateCertificateDetails?certificateId=${certificateId}`,
        method: "PATCH",
        transformResponse: console.log(certificationInputForm, certificateId),
        body: certificationInputForm,
      }),
      invalidatesTags: ["registerPost"],
    }),
  }),
});

export const {
  useGetAllStudentQuery,
  useGetStudentQuery,
  useAddStudentProfileMutation,
  useGetDegreeStudentProfileQuery,
  useDegreeStudentProfileUpdateMutation,
  useCertificateUpdateMutation,
  useGetCertificateQuery,
} = studentApiSlice;
