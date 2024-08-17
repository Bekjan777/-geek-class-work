import { types } from "./types"

const initialState = {
    contactsTitle: 'sdfdsfdsfdsd'
}


export default function contactsReducer(state = initialState, action) {
    if (action.type === types.WITH_PARAMS) {
        return {...state, contactsTitle: action.payload}
    } else if (action.type === types.FROM_INPUT) {
        return {...state, contactsTitle: action.payload}
    }

    return state
}