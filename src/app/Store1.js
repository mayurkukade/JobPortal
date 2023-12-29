
import { configureStore } from "@reduxjs/toolkit";
import { AddDegreereducer } from "../features/AddDegree";

export const Store = configureStore({
    reducer: AddDegreereducer
})