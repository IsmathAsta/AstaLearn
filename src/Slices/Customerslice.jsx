import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const customerSlice = createSlice({
    name:'customerTest',
    initialState: initialState,
    reducers:{
        addCustomer(state,action){
         state.push(action.payload)
        }
    }
})

export const {addCustomer} = customerSlice.actions;
export default customerSlice.reducer;
