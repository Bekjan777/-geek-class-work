import {configureStore, createStore} from '@reduxjs/toolkit'
import mainPageSliceReducer from "./mainPageSlice";
import postSliceReducer from "./postSlice";
import petsSliceReducer from './petsSlice'

export const store = configureStore({
        reducer: {
            mainPageSliceReducer,
            postSliceReducer,
            petsSliceReducer,
        },
    }
)