import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../../features/counter/counterSlice'

import { setupListeners } from '@reduxjs/toolkit/query'
import { registrationSlice } from '../../services/Registration/registrationSlice'
import { apiSlice } from '../../services/apiSlice'
export const store = configureStore({
    reducer:{

        counter:counterReducer,
       [apiSlice.reducerPath]:apiSlice.reducer,
        [registrationSlice.reducerPath]:registrationSlice.reducer,
       
    },

    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true,
})

setupListeners(store.dispatch)