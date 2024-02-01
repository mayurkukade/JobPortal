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
      query: () => ({
        url: "/uploadFile/getDocuments?userId=1102&DocumentType=ok",
      }),
      providesTags:['upload']
    }),
  }),
});

export const { useUploadFilesMutation, useGetDocumentQuery } = uploadFile;
