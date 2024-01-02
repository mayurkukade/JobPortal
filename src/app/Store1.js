
import { configureStore } from "@reduxjs/toolkit";
import  AddDegreesliceReducer from "../features/AddDegreeslice";

export const Store1 = configureStore({
    reducer: {
        degree: AddDegreesliceReducer,
      },
})