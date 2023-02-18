import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { calculatorSlice } from "./calculator/calculatorSlice";

export const store = configureStore({
    reducer:{
        calculator: calculatorSlice.reducer,
        auth: authSlice.reducer,
    }
})