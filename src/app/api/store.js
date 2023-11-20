import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../../features/counter/counterSlice'
import { pokemonApi } from '../../services/pokemon'
import { setupListeners } from '@reduxjs/toolkit/query'
export const store = configureStore({
    reducer:{

        counter:counterReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },

    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(pokemonApi.middleware)
})

setupListeners(store.dispatch)