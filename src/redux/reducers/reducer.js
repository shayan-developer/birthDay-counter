import { COUNT, LOADING, MODAl } from "../types/types";

const initialState = {
    loading: true,
    modal: false,
    count: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                loading: false,
            }
        case MODAl:
            return {
                ...state,
                modal: action.check
            }
        case COUNT:
            return {
                ...state,
                count: action.check
            }
        default:
            return state
    }
}
export default reducer