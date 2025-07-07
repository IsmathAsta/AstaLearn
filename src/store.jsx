import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './Slices/Customerslice'

export const store = configureStore({
    reducer:{
        customers:customerReducer
    }
})