import {configureStore} from "@reduxjs/toolkit";
import registerSliceReducer from "./registerSlice.js";


export const store = configureStore({
    reducer: {
        registerSliceReducer
    }
})