import {configureStore, createStore} from '@reduxjs/toolkit'
import mainPageSliceReducer from "./mainPageSlice";

export const store = configureStore({
        reducer: {
            mainPageSliceReducer
        },
    }
)