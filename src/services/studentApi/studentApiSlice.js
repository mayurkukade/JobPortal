import { apiSlice } from "../apiSlice";

export const studentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStudent: builder.query({
      query: (id) => `/user/getById?userId=${id}`,
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
      }),
      providesTags: ["registerPost"],
    }),

    getCertificate: builder.query({
      query: () => ({
        url: `/certificate/getCertificate?userId=1102`,
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
  useCertificateUpdateMutation,
  useGetCertificateQuery,
} = studentApiSlice;
