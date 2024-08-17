import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import contactsReducer from "./contactsReducer";
import usersReducer from "./usersReducer";

export const rootReducer = combineReducers({
    mainReducer,
    contactsReducer,
    usersReducer
})