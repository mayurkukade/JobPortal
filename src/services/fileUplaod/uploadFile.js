import { apiSlice } from "../apiSlice";

export const uploadFile = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadFiles: builder.mutation({
      query: (formData) => ({
        url: "/uploadFile/add",
        method: "POST",
        body: formData,
       
        
      }),
      invalidatesTags:['upload']
    }),
    getDocument: builder.query({
      query: ({userId,fileType}) => ({
        url: `/uploadFile/getDocuments?userId=${userId}&DocumentType=${fileType}`,
        transferResponse:console.log(userId,fileType)
      }),
      providesTags:['upload']
    }),
  }),
});

export const { useUploadFilesMutation, useGetDocumentQuery } = uploadFile;
