const initialState = {
    data: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "data/fetchSuccess":
            return { ...state, data: action.payload }
        case "detail/fetchSuccess":
            return { ...state, data: action.payload }
        default:
            return state
    }

}