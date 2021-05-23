import { GET_DATA, LOADING, MODAl } from "../types/types";

const initialState = {
    loading: true,
    modal:false
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                loading:false,
            }
         case MODAl:
             return{
                 ...state,
                 modal:action.check
             }   
        default:
            return state
        }
}
export default reducer