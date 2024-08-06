const defaultState = {
    count: 0,
}

export const countReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "INCREASE_1_COUNT":
            return {...state, count: state.count + action.payload};
        case "DECREASE_1_COUNT":
            return {...state, count: state.count - action.payload};
        case "INCREASE_10_COUNT":
            return {...state, count: state.count + action.payload};
        case "DECREASE_10_COUNT":
            return {...state, count: state.count - action.payload};
        case "RESET_COUNT":
            return {...state, count: action.payload};
        default:
            return state;
    }
}