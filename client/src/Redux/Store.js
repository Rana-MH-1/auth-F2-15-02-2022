import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './UserSlice'

export const Store = configureStore({
    reducer:{
        AuthReducer
    }
})