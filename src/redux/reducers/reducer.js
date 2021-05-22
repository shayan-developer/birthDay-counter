import { GET_DATA, GET_BIRTH } from "../types/types";

const initialState = {
    loading: true
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BIRTH:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
        }
}
export default reducer