import { GET_DATA, GET_BIRTH } from "../types/types";

const initialState = {
    person: [{
        name: "آریا",
        photo: "https://images.theconversation.com/files/180870/original/file-20170803-5614-1qdhuf8.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
        month: "5",
        day: "26",
    }],
    loading: true
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BIRTH:
            return {
                ...state,
                loading: false
            }
        default:
            return state
        }
}
export default reducer