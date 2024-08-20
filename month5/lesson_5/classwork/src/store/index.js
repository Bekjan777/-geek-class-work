import {configureStore, createStore} from '@reduxjs/toolkit'
import mainPageSliceReducer from "./mainPageSlice";
import postSliceReducer from "./postSlice";

export const store = configureStore({
        reducer: {
            mainPageSliceReducer,
            postSliceReducer
        },
    }
)