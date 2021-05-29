import { COUNT, DATA, LOADING, MODAl } from "../types/types";

const initialState = {
    loading: true,
    modal: false,
    count: 0,
    data:[]
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
        case DATA:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}
export default reducer