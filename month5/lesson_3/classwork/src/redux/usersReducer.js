import { types } from "./types"

const initialState = {
    users: []
}

export default function usersReducer(state = initialState, action) {
    if (action.type === types.USERS) {
        return {users: action.payload}
    }

    return state
}