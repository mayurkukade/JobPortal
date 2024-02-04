import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";


export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
  }),
  prepareHeaders:(headers)=>{
      let token = Cookies.get('jwtToken')
  
    
      if(token){
        token = Cookies.get('jwtToken')
      }
      if (token) {
        token =  JSON.parse(Cookies.get('jwtToken')) 
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
  },
  tagTypes: ['registerPost','plans','save','mentor','itTrainig','bootCamp','job','application','recruiter'],
  endpoints: (builder) => ({}),
});
