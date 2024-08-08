import { types } from "./types"

const initialState = {
    title: 'GeekTech',
    contactsTitle: 'sdfdsfdsfdsd'
}


export default function mainReducer(state = initialState, action) {
    if (action.type === types.CHANGE_TITLE) {
        return {...state, title: 'GEEKS!'}
    }

    return state
}