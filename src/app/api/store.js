import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../../features/counter/counterSlice'

import { setupListeners } from '@reduxjs/toolkit/query'
import { registrationSlice } from '../../services/Registration/registrationSlice'
import { apiSlice } from '../../services/apiSlice'
import { jobApiSlice } from '../../services/job/jobApiSlice'
import authSlice from '../../features/authSlice/authSlice'
import { studentApiSlice } from '../../services/studentApi/studentApiSlice'
import {itTrainingSlice} from '../../services/itTraining/itTrainingSlice'
export const store = configureStore({
    reducer:{

        counter:counterReducer,
        authSlice:authSlice,
       [apiSlice.reducerPath]:apiSlice.reducer,
        [registrationSlice.reducerPath]:registrationSlice.reducer,
        [jobApiSlice.reducerPath]: jobApiSlice.reducer,
        [studentApiSlice.reducerPath] : studentApiSlice.reducer,
        [itTrainingSlice.reducerPath]:itTrainingSlice.reducer
      
       
    },

    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true,
})

setupListeners(store.dispatch)