import {createStore} from "redux";
import {countReducer} from "./countReducer.jsx";



export const store = createStore(countReducer)