import {configureStore} from '@reduxjs/toolkit'


import { setupListeners } from '@reduxjs/toolkit/query'
import { registrationSlice } from '../../services/Registration/registrationSlice'
import { apiSlice } from '../../services/apiSlice'
import { jobApiSlice } from '../../services/job/jobApiSlice'
import authSlice from '../../features/authSlice/authSlice'
import { studentApiSlice } from '../../services/studentApi/studentApiSlice'
import {itTrainingSlice} from '../../services/itTraining/itTrainingSlice'
import { bootCampSlice } from '../../services/bootcamp/bootCampSlice'
import { studentApplicationApiSlice } from '../../services/studentApplication/studentApplicationApiSlice'
import { plansApiSlice } from '../../services/plans/plansApiSlice'
import { recruiterApiSlice } from '../../services/Recruiter/recruiterApiSlice'
import { uploadFile } from '../../services/fileUplaod/uploadFile'
export const store = configureStore({
    reducer:{

        
        authSlice:authSlice,
       [apiSlice.reducerPath]:apiSlice.reducer,
        [registrationSlice.reducerPath]:registrationSlice.reducer,
        [jobApiSlice.reducerPath]: jobApiSlice.reducer,
        [studentApiSlice.reducerPath] : studentApiSlice.reducer,
        [itTrainingSlice.reducerPath]:itTrainingSlice.reducer,
        [bootCampSlice.reducerPath]:bootCampSlice.reducer,
        [studentApplicationApiSlice.reducerPath]:studentApplicationApiSlice.reducer,
        [plansApiSlice.reducerPath] : plansApiSlice,
        [recruiterApiSlice.reducerPath]:recruiterApiSlice.reducer,
        [uploadFile.reducerPath]:uploadFile.reducer
      
       
    },

    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true,
})

setupListeners(store.dispatch)